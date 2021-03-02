import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PEPE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xe4D11580163FD0dA0b1b5Cf8b8Ac370F97A4CcAC',
    },
    tokenSymbol: 'PEPE',
    tokenAddresses: {
      97: '',
      56: '0x83023E505F8946185d59a87B15E1F1589A3f6099',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'PEPE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF1db77759e76c87c12f6EB5e6E9c8F5999A924D1',
    },
    tokenSymbol: 'PEPE',
    tokenAddresses: {
      97: '',
      56: '0x83023E505F8946185d59a87B15E1F1589A3f6099',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PEPE',
    lpAddresses: {
      97: '',
      56: '0xe4D11580163FD0dA0b1b5Cf8b8Ac370F97A4CcAC', // PEPE-BUSD LP
    },
    tokenSymbol: 'PEPE',
    tokenAddresses: {
      97: '',
      56: '0x83023E505F8946185d59a87B15E1F1589A3f6099',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  // {
  // pid: 4,
  // risk: 1,
  // isTokenOnly: true,
  // lpSymbol: 'BUSD',
  // lpAddresses: {
  // 97: '',
  // 56: '0xa4ec46d1a84bddc3b2a70c1121f03aa754c72e11', // LOTUS-BUSD LP (BUSD-BUSD will ignore)
  // },
  // tokenSymbol: 'BUSD',
  // tokenAddresses: {
  // 97: '',
  // 56: '0x8202619E8f074579a46AEd7c4cB020723FfA3Fc9',
  // },
  // quoteTokenSymbol: QuoteToken.BUSD,
  // quoteTokenAdresses: contracts.busd,
  // },
  // {
  // pid: 5,
  // risk: 3,
  // isTokenOnly: true,
  // lpSymbol: 'WBNB',
  // lpAddresses: {
  // 97: '',
  // 56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
  // },
  // tokenSymbol: 'WBNB',
  // tokenAddresses: {
  // 97: '',
  // 56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  // },
  // quoteTokenSymbol: QuoteToken.BUSD,
  // quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
