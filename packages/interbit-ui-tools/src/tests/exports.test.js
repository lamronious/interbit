const assert = require('assert')
const api = require('..')

describe('module exports expected API', () => {
  it('blockExplorer exported as blockExplorerRedux', () => {
    assert.ok(api.blockExplorerRedux)
    assert.ok(api.blockExplorerRedux.actionCreators)
    assert.ok(api.blockExplorerRedux.actionCreators.selectBlock)
    assert.ok(api.blockExplorerRedux.actionCreators.selectChain)
    assert.ok(api.blockExplorerRedux.actionCreators.showRawState)
    assert.ok(api.blockExplorerRedux.actionTypes)
    assert.ok(api.blockExplorerRedux.reducer)
    assert.ok(api.blockExplorerRedux.selectors)
    assert.ok(api.blockExplorerRedux.selectors.getChainAliases)
    assert.ok(api.blockExplorerRedux.selectors.getChainState)
    assert.ok(api.blockExplorerRedux.selectors.getSelectedBlockHash)
    assert.ok(api.blockExplorerRedux.selectors.getSelectedChainAlias)
    assert.ok(api.blockExplorerRedux.selectors.getShowRawState)
    assert.ok(api.blockExplorerRedux.selectors.blockExplorerSubtree)
    assert.ok(api.blockExplorerRedux.selectors.entireTree)
  })

  it('middleware exported as interbitRedux', () => {
    assert.ok(api.interbitRedux)
    assert.ok(api.interbitRedux.actionCreators)
    assert.ok(api.interbitRedux.actionCreators.chainBlockAdded)
    assert.ok(api.interbitRedux.actionCreators.chainBlocking)
    assert.ok(api.interbitRedux.actionCreators.chainDispatch)
    assert.ok(api.interbitRedux.actionCreators.chainError)
    assert.ok(api.interbitRedux.actionCreators.chainGenesis)
    assert.ok(api.interbitRedux.actionCreators.chainLoaded)
    assert.ok(api.interbitRedux.actionCreators.chainLoading)
    assert.ok(api.interbitRedux.actionCreators.chainSponsoring)
    assert.ok(api.interbitRedux.actionCreators.chainSubscribed)
    assert.ok(api.interbitRedux.actionCreators.chainStatus)
    assert.ok(api.interbitRedux.actionCreators.chainUpdated)
    assert.ok(api.interbitRedux.actionCreators.initialConfig)
    assert.ok(api.interbitRedux.actionCreators.interbitError)
    assert.ok(api.interbitRedux.actionCreators.interbitPublicKey)
    assert.ok(api.interbitRedux.actionCreators.interbitReady)
    assert.ok(api.interbitRedux.actionCreators.loadInterbitSaga)
    assert.ok(api.interbitRedux.actionCreators.privateChainSaga)
    assert.ok(api.interbitRedux.actionCreators.sponsorChainSaga)
    assert.ok(api.interbitRedux.actionTypes)
    assert.ok(api.interbitRedux.chainDispatch)
    assert.ok(api.interbitRedux.createMiddleware)
    assert.ok(api.interbitRedux.reducer)
    assert.ok(api.interbitRedux.rootSaga)
    assert.ok(api.interbitRedux.selectors)
    assert.ok(api.interbitRedux.selectors.getBlockMaster)
    assert.ok(api.interbitRedux.selectors.getChain)
    assert.ok(api.interbitRedux.selectors.getChainAliases)
    assert.ok(api.interbitRedux.selectors.getChainId)
    assert.ok(api.interbitRedux.selectors.getConfiguredChains)
    assert.ok(api.interbitRedux.selectors.getConfiguredPeers)
    assert.ok(api.interbitRedux.selectors.getConnectionStatus)
    assert.ok(api.interbitRedux.selectors.getCovenantHash)
    assert.ok(api.interbitRedux.selectors.getInterbitStatus)
    assert.ok(api.interbitRedux.selectors.getPrivateChain)
    assert.ok(api.interbitRedux.selectors.getPrivateChainId)
    assert.ok(api.interbitRedux.selectors.getPublicChain)
    assert.ok(api.interbitRedux.selectors.getPublicChainId)
    assert.ok(api.interbitRedux.selectors.getPublicKey)
    assert.ok(api.interbitRedux.selectors.getSponsorConfig)
    assert.ok(api.interbitRedux.selectors.isChainLoaded)
    assert.ok(api.interbitRedux.selectors.isPublicChainLoaded)
    assert.ok(api.interbitRedux.selectors.interbitSubtree)
    assert.ok(api.interbitRedux.selectors.entireTree)
  })

  it('parameterEncoding', () => {
    assert.ok(api.parameterEncoding)
    assert.ok(api.parameterEncoding.packState)
    assert.ok(api.parameterEncoding.parseState)
    assert.ok(api.parameterEncoding.packCAuthParams)
    assert.ok(api.parameterEncoding.parseCAuthParams)
  })
})