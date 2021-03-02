import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PEPE2-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7346F7adc44d90604C7f3479Acff5069aB691C18',
    },
    tokenSymbol: 'PEPE2',
    tokenAddresses: {
      97: '',
      56: '0xc4BD10b2DC5F581d13F5ea109222a99a22364308',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'PEPE2-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD466a0878d5f68D2D0f94CC971F91EEaB8eD7fD7',
    },
    tokenSymbol: 'PEPE2',
    tokenAddresses: {
      97: '',
      56: '0xc4BD10b2DC5F581d13F5ea109222a99a22364308',
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
    pid: 4,
    risk: 5,
    lpSymbol: 'PEPE2-DOGE LP',
    lpAddresses: {
      97: '',
      56: '0x65A3F02915E5eaf1E42972d4929c9cDbb8AFdA03',
    },
    tokenSymbol: 'PEPE2',
    tokenAddresses: {
      97: '',
      56: '0xc4BD10b2DC5F581d13F5ea109222a99a22364308',
    },
    quoteTokenSymbol: QuoteToken.DOGE,
    quoteTokenAdresses: contracts.doge,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PEPE2',
    lpAddresses: {
      97: '',
      56: '0x7346F7adc44d90604C7f3479Acff5069aB691C18', // PEPE2-BUSD LP
    },
    tokenSymbol: 'PEPE2',
    tokenAddresses: {
      97: '',
      56: '0xc4BD10b2DC5F581d13F5ea109222a99a22364308',
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
