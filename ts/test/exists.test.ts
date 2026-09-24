
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RealtimeWeatherSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RealtimeWeatherSDK.test()
    equal(testsdk instanceof RealtimeWeatherSDK, true,
      'RealtimeWeatherSDK.test() must return a client synchronously')
  })

})
