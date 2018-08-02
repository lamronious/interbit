const assert = require('assert')
const interbit = require('../../')

const assertChainsConfigured = require('./assertChainsConfigured')
const log = require('../../log')

const testStart = async () => {
  const options = {
    // eslint-disable-next-line
    config: require('./interbit.config'),
    noWatch: true
  }

  const { cli, hypervisor, chainManifest } = await interbit.start(options)

  assert.ok(cli)
  assert.ok(hypervisor)
  assert.ok(chainManifest)

  log.info('BOOTED THE INTERBITS WEOOOO')
  log.info(chainManifest)

  await assertChainsConfigured(cli, chainManifest)

  log.success(
    'interbit.start(options): First joined to second and shared state'
  )

  await cli.shutdown()
  hypervisor.stopHyperBlocker()
}

module.exports = testStart
