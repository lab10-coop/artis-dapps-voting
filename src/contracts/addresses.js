import { constants } from '../constants'
import { addressesURL, wrongRepoAlert } from './helpers'
const local = {
  VOTING_TO_CHANGE_KEYS_ADDRESS: '0xa93de45a1be456ae919a7da7970f980ec66dbb17',
  VOTING_TO_CHANGE_MIN_THRESHOLD_ADDRESS: '0x2eb6fbf909a10bc880f2051ad468bcf01e07d0ac',
  VOTING_TO_CHANGE_PROXY_ADDRESS: '0x4c3ce0a8b7cfab2b34e18aa3fcbfc603186e73ac',
  VOTING_TO_MANAGE_EMISSION_FUNDS_ADDRESS: '0x1be7f1c5743b6469418b5f9f37e6b165e9e1aeeb',
  BALLOTS_STORAGE_ADDRESS: '0x8d704a5891807658b8d4c252811579744459df72',
  KEYS_MANAGER_ADDRESS: '0xd923ea4551f9e2bc805f3974ed7aded4e8081afb',
  METADATA_ADDRESS: '0x433b82bac19682f6a7dc58c6d5d00d06e16d7ab9',
  PROXY_ADDRESS: '0x889af4f81d8126771db2b318a9cf5477a416932b',
  POA_ADDRESS: '0xf472e0e43570b9afaab67089615080cf7c20018d',
  EMISSION_FUNDS_ADDRESS: '0xfeb3000ec10af58be05afdfca65d953e20e4edf2',
  REWARD_BY_BLOCK_ADDRESS: '0x9ebf6cc90ccc648f939a78071cca7c53833bdb87',
  MOC: '0x8e1ca34f5718996f2531464f1323f959d8a8dd21'
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
