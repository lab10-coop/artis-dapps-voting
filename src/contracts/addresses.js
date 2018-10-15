import { constants } from '../constants'
import { addressesURL, wrongRepoAlert } from './helpers'
const local = {
  VOTING_TO_CHANGE_KEYS_ADDRESS: '0x4432fd475bf8c1943304b78c3ee4218e456db3dc',
  VOTING_TO_CHANGE_MIN_THRESHOLD_ADDRESS: '0xa04594dd1e9acf851588332017cf642125bc3e55',
  VOTING_TO_CHANGE_PROXY_ADDRESS: '0x29abd3d79d2e7091a3402c07ddd923a127d2a0ad',
  VOTING_TO_MANAGE_EMISSION_FUNDS_ADDRESS: '0x8cecae85e710b653b668132af774745e03a057c8',
  BALLOTS_STORAGE_ADDRESS: '0x95fbdf66375e149be4b9ef04e822ada7b389324d',
  KEYS_MANAGER_ADDRESS: '0x1529f09d060238b26d3a67ffc392ab012ba69257',
  METADATA_ADDRESS: '0x19e653a621be2e4eafe2ae71bc6e8f928c323057',
  PROXY_ADDRESS: '0x6ec40444be7fabaf3f9ec57ae191a8378ae80b92',
  POA_ADDRESS: '0xf472e0e43570b9afaab67089615080cf7c20018d',
  EMISSION_FUNDS_ADDRESS: '0xad0770a227e2a34b5e41100799ba1c9abd0d958d',
  REWARD_BY_BLOCK_ADDRESS: '0x9d1f842b35fed162968c13418b967addfeda3ab0',
  MOC: '0x48b0dc40ccd7da736cd1a049ce5a2130c0119635'
}

let SOKOL_ADDRESSES = {}
let CORE_ADDRESSES = {}
let DAI_TEST_ADDRESSES = {}
let DAI_ADDRESSES = {}

async function getContractsAddresses(branch) {
  let addr = addressesURL(branch)
  let response
  try {
    response = await fetch(addr)
  } catch (e) {
    return wrongRepoAlert(addr)
  }

  let contracts = await response.json()

  switch (branch) {
    case 'core':
      CORE_ADDRESSES = contracts
      break
    case 'dai':
      DAI_ADDRESSES = contracts
      break
    case 'sokol':
      SOKOL_ADDRESSES = contracts
      break
    case 'dai-test':
      DAI_TEST_ADDRESSES = contracts
      break
    default:
      CORE_ADDRESSES = contracts
      break
  }
}

function getAddresses(netId) {
  switch (netId) {
    case constants.NETID_SOKOL:
      return SOKOL_ADDRESSES
    case constants.NETID_DAI_TEST:
      return DAI_TEST_ADDRESSES
    case constants.NETID_CORE:
      return CORE_ADDRESSES
    case constants.NETID_DAI:
      return DAI_ADDRESSES
    case constants.NETID_ARTIS:
      return local
    default:
      return CORE_ADDRESSES
  }
}

module.exports = {
  getContractsAddresses,
  networkAddresses: getAddresses
}
