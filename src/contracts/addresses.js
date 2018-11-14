import { addressesURL, wrongRepoAlert } from './helpers'

let ADDRESSES = {}

async function getContractsAddresses(branch) {
  const addr = addressesURL(branch)
  let response
  try {
    response = await fetch(addr)
  } catch (e) {
    return wrongRepoAlert(addr)
  }

  const contracts = await response.json()

  ADDRESSES = contracts
}
function networkAddresses() {
  return ADDRESSES
}

module.exports = {
  getContractsAddresses,
  networkAddresses
}
