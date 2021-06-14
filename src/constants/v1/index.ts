import { Interface } from '@ethersproject/abi'
import { ChainId } from '@zeroexchange/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const NON_EXISTENT_ADDRESS = '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30';

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  [ChainId.ROPSTEN]: '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351',
  [ChainId.RINKEBY]: '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36',
  [ChainId.GÖRLI]: '0x6Ce570d02D73d4c384b46135E87f8C592A8c86dA',
  [ChainId.KOVAN]: NON_EXISTENT_ADDRESS,
  [ChainId.FUJI]: NON_EXISTENT_ADDRESS,
  [ChainId.AVALANCHE]: NON_EXISTENT_ADDRESS,
  [ChainId.SMART_CHAIN_TEST]: NON_EXISTENT_ADDRESS,
  // [ChainId.SMART_CHAIN]: '0x52AbdB3536a3a966056e096F2572B2755df26eac'
  [ChainId.SMART_CHAIN]: NON_EXISTENT_ADDRESS,
  [ChainId.MOONBASE_ALPHA]: NON_EXISTENT_ADDRESS,
  [ChainId.MUMBAI]: NON_EXISTENT_ADDRESS,
  [ChainId.MATIC]: NON_EXISTENT_ADDRESS,
  [ChainId.HECO]: NON_EXISTENT_ADDRESS,
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
