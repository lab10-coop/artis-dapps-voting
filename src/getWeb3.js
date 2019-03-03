import Web3 from 'web3'
import { messages } from './messages'
import { constants } from './constants'

let getWeb3 = () => {
  return new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener('load', async () => {
      let web3

      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (window.ethereum) {
        web3 = new Web3(window.ethereum)
        console.log('Injected web3 detected.')
        try {
          await window.ethereum.enable()
        } catch (e) {
          console.error('User denied account access')
          reject({ message: messages.USER_DENIED_ACCOUNT_ACCESS })
          return
        }
      } else if (typeof window.web3 !== 'undefined') {
        web3 = new Web3(window.web3.currentProvider)
        console.log('Injected web3 detected.')
      } else {
        console.log('No Web3 injected, falling back to Artis, assuming read only mode')
        const provider = new Web3.providers.HttpProvider(constants.NETWORKS['246529'].RPC)
        web3 = new Web3(provider)
      }

      const netId = await web3.eth.net.getId()
      console.log('netId', netId)

      let netIdName
      let errorMsg = null

      if (netId in constants.NETWORKS) {
        netIdName = constants.NETWORKS[netId].NAME
        console.log(`This is ${netIdName}`)
      } else {
        netIdName = 'ERROR'
        errorMsg = messages.WRONG_NETWORK_MSG
        console.log('This is an unknown network.')
      }

      document.title = `${netIdName} - ARTIS Governance DApp`

      if (errorMsg !== null) {
        reject({ message: errorMsg })
        return
      }

      const accounts = await web3.eth.getAccounts()
      var injectedWeb3 = true
      var defaultAccount = accounts[0] || null
      if (defaultAccount === null) {
        console.log('no default account available. Read Only Mode.')
        injectedWeb3 = false
      }

      resolve({
        web3Instance: web3,
        netIdName,
        netId,
        defaultAccount,
        injectedWeb3
      })
    })
  })
}

export default getWeb3
