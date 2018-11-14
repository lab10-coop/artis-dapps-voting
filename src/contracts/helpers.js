import { constants } from '../constants'
import { messages } from '../messages'
import swal from 'sweetalert2'

function addressesURL(branch) {
  return `/networks/${branch}/${constants.addressesSourceFile}`
}

function ABIURL(branch, contract) {
  return `/networks/${branch}/abis/` + constants.ABIsSources[contract]
}

function getABI(branch, contract) {
  let addr = ABIURL(branch, contract)
  return fetch(addr).then(response => {
    return response.json()
  })
}

function wrongRepoAlert(addr) {
  swal('Error!', messages.wrongRepo(addr), 'error')
}

module.exports = {
  addressesURL,
  ABIURL,
  getABI,
  wrongRepoAlert
}
