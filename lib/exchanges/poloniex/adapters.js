module.exports = exports = {
/**
* Helper function to adapt the pair name to the exchange
* @param  {String}  pair    pair to adapt
* @param  {Boolean} reverse whether to reverse the process and revert to exchange
* @return {String}          normalized pair name
*/
  pair: (pair, reverse = false) => {
    if (reverse) {
      return { BCNBTC: 'BTC_BCN',
        BELABTC: 'BTC_BELA',
        BLKBTC: 'BTC_BLK',
        BTCDBTC: 'BTC_BTCD',
        BTMBTC: 'BTC_BTM',
        BTSBTC: 'BTC_BTS',
        BURSTBTC: 'BTC_BURST',
        CLAMBTC: 'BTC_CLAM',
        DASHBTC: 'BTC_DASH',
        DGBBTC: 'BTC_DGB',
        DOGEBTC: 'BTC_DOGE',
        EMC2BTC: 'BTC_EMC2',
        FLDCBTC: 'BTC_FLDC',
        FLOBTC: 'BTC_FLO',
        GAMEBTC: 'BTC_GAME',
        GRCBTC: 'BTC_GRC',
        HUCBTC: 'BTC_HUC',
        LTCBTC: 'BTC_LTC',
        MAIDBTC: 'BTC_MAID',
        OMNIBTC: 'BTC_OMNI',
        NAUTBTC: 'BTC_NAUT',
        NAVBTC: 'BTC_NAV',
        NEOSBTC: 'BTC_NEOS',
        NMCBTC: 'BTC_NMC',
        NOTEBTC: 'BTC_NOTE',
        NXTBTC: 'BTC_NXT',
        PINKBTC: 'BTC_PINK',
        POTBTC: 'BTC_POT',
        PPCBTC: 'BTC_PPC',
        RICBTC: 'BTC_RIC',
        SJCXBTC: 'BTC_SJCX',
        STRBTC: 'BTC_STR',
        SYSBTC: 'BTC_SYS',
        VIABTC: 'BTC_VIA',
        XVCBTC: 'BTC_XVC',
        VRCBTC: 'BTC_VRC',
        VTCBTC: 'BTC_VTC',
        XBCBTC: 'BTC_XBC',
        XCPBTC: 'BTC_XCP',
        XEMBTC: 'BTC_XEM',
        XMRBTC: 'BTC_XMR',
        XPMBTC: 'BTC_XPM',
        XRPBTC: 'BTC_XRP',
        BTCUSDT: 'USDT_BTC',
        DASHUSDT: 'USDT_DASH',
        LTCUSDT: 'USDT_LTC',
        NXTUSDT: 'USDT_NXT',
        STRUSDT: 'USDT_STR',
        XMRUSDT: 'USDT_XMR',
        XRPUSDT: 'USDT_XRP',
        BCNXMR: 'XMR_BCN',
        BLKXMR: 'XMR_BLK',
        BTCDXMR: 'XMR_BTCD',
        DASHXMR: 'XMR_DASH',
        LTCXMR: 'XMR_LTC',
        MAIDXMR: 'XMR_MAID',
        NXTXMR: 'XMR_NXT',
        ETHBTC: 'BTC_ETH',
        ETHUSDT: 'USDT_ETH',
        SCBTC: 'BTC_SC',
        BCYBTC: 'BTC_BCY',
        EXPBTC: 'BTC_EXP',
        FCTBTC: 'BTC_FCT',
        RADSBTC: 'BTC_RADS',
        AMPBTC: 'BTC_AMP',
        DCRBTC: 'BTC_DCR',
        LSKBTC: 'BTC_LSK',
        LSKETH: 'ETH_LSK',
        LBCBTC: 'BTC_LBC',
        STEEMBTC: 'BTC_STEEM',
        STEEMETH: 'ETH_STEEM',
        SBDBTC: 'BTC_SBD',
        ETCBTC: 'BTC_ETC',
        ETCETH: 'ETH_ETC',
        ETCUSDT: 'USDT_ETC',
        REPBTC: 'BTC_REP',
        REPUSDT: 'USDT_REP',
        REPETH: 'ETH_REP',
        ARDRBTC: 'BTC_ARDR',
        ZECBTC: 'BTC_ZEC',
        ZECETH: 'ETH_ZEC',
        ZECUSDT: 'USDT_ZEC',
        ZECXMR: 'XMR_ZEC',
        STRATBTC: 'BTC_STRAT',
        NXCBTC: 'BTC_NXC',
        PASCBTC: 'BTC_PASC',
        GNTBTC: 'BTC_GNT',
        GNTETH: 'ETH_GNT',
        GNOBTC: 'BTC_GNO',
        GNOETH: 'ETH_GNO' }[pair];
    }
    const currencies = pair.split('_');
    return currencies[1] + currencies[0];
  },

  /**
* Helper function to adapt orderbook price level
* @param  {Array} msg message from socket
* @return {String}     Object of normalized order
*/
  socketPriceLevel: msg => ({
    id: parseFloat(msg[0]),
    price: parseFloat(msg[0]),
    amount: parseFloat(msg[1]),
    type: msg[2],
  }),

  /**
* Helper function to adapt orderbook price level
* @param  {Object} msg  price level from public API
* @param  {String} side book side to add to
* @return {Object}      Object of normalized order
*/
  publicPriceLevel: (msg, side) => ({
    id: parseFloat(msg[0]),
    price: parseFloat(msg[0]),
    amount: parseFloat(msg[1]),
    type: side === 'bids' ? 'bid' : 'ask',
  }),
};
