

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RealtimeWeatherSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('RelativeHumidityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when REALTIME_WEATHER_TEST_LIVE=TRUE.
  afterEach(liveDelay('REALTIME_WEATHER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RealtimeWeatherSDK.test()
    const ent = testsdk.RelativeHumidity()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.REALTIME_WEATHER_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'relative_humidity.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"stationId":{"a":true,"h":"Station Id","n":"stationId","r":false,"sh":"Station identifier","t":"`$STRING`","key$":"stationId","index$":0},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":false,"sh":"Timestamp of the reading","t":"`$STRING`","key$":"timestamp","index$":1},"value":{"a":true,"fo":"double","h":"Value","n":"value","r":false,"sh":"The measured value","t":"`$NUMBER`","key$":"value","index$":2}},"name":"relative_humidity","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /collections/{collectionId}/relative-humidity","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":1459,"k":"param","n":"collection_id","or":"collection_id","r":true,"t":"`$INTEGER`","index$":0}],"query":[{"a":true,"k":"query","n":"date","or":"date","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"datetime","or":"datetime","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/collections/{collectionId}/relative-humidity","q":{"exist":["collection_id","date","datetime"]},"r":{"param":{"collectionId":"collection_id"}},"s":[{"lit":"collections"},{"var":"collection_id"},{"lit":"relative-humidity"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.collection"]]},"key$":"relative_humidity","name__orig":"relative_humidity","Name":"RelativeHumidity","name_":"relative_humidity","name-":"relative-humidity","NAME":"RELATIVE_HUMIDITY","index$":3}, {"active":true,"entity":"relative_humidity","key$":"BasicRelativeHumidityFlow","kind":"basic","name":"BasicRelativeHumidityFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"collection_id":"collection01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"relative_humidity_ref01"}}],"index$":0}]}, 'RelativeHumidity', {"GET /collections/{collectionId}/relative-humidity":{"protocol":"http","operationId":"getRelativeHumidity","responses":{"200":{"description":"Successful response with relative humidity data","content":{"application/json":{"schema":{"type":"object","properties":{"metadata":{"key$":"metadata","properties":{"readingType":{"description":"Type of weather reading","example":"temperature","type":"string"},"readingUnit":{"description":"Unit of measurement","example":"deg C","type":"string"},"stations":{"description":"Weather stations providing data","items":{"properties":{"deviceId":{"description":"Device identifier","type":"string"},"id":{"description":"Unique station identifier","type":"string"},"location":{"properties":{"latitude":{"description":"Latitude coordinate","format":"double","type":"number"},"longitude":{"description":"Longitude coordinate","format":"double","type":"number"}},"type":"object"},"name":{"description":"Station name","type":"string"}},"type":"object","x-ref":"#/components/schemas/Station"},"type":"array"}},"type":"object"},"data":{"description":"Array of weather readings","items":{"properties":{"stationId":{"description":"Station identifier","type":"string","key$":"stationId"},"timestamp":{"description":"Timestamp of the reading","format":"date-time","type":"string","key$":"timestamp"},"value":{"description":"The measured value","format":"double","type":"number","key$":"value"}},"type":"object","x-ref":"#/components/schemas/Reading","index$":0},"key$":"data","type":"array"}},"x-ref":"#/components/schemas/WeatherData"}}}},"400":{"description":"Bad request","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Error message"},"details":{"type":"object","description":"Additional error details"}},"x-ref":"#/components/schemas/Error"}}}},"404":{"description":"Data not found","content":{"application/json":{"schema":{"type":"object","properties":{"code":{"type":"string","description":"Error code"},"message":{"type":"string","description":"Error message"},"details":{"type":"object","description":"Additional error details"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"collectionId","in":"path","required":true,"description":"The collection identifier (1459 for Realtime Weather)","schema":{"type":"integer","example":1459},"index$":0},{"name":"date","in":"query","required":false,"description":"Filter by date in ISO 8601 format (YYYY-MM-DD)","schema":{"type":"string","format":"date"},"index$":1},{"name":"datetime","in":"query","required":false,"description":"Filter by datetime in ISO 8601 format","schema":{"type":"string","format":"date-time"},"index$":2}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let relative_humidity_ref01_data = Object.values(setup.data.existing.relative_humidity)[0] as any

    // LIST
    const relative_humidity_ref01_ent = client.RelativeHumidity()
    const relative_humidity_ref01_match: any = {}
    relative_humidity_ref01_match['collection_id'] = setup.idmap['collection01']

    const relative_humidity_ref01_list = (await relative_humidity_ref01_ent.list(relative_humidity_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/relative_humidity/RelativeHumidityTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RealtimeWeatherSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['relative_humidity01','relative_humidity02','relative_humidity03','collection01','collection02','collection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'REALTIME_WEATHER_TEST_RELATIVE_HUMIDITY_ENTID': idmap,
    'REALTIME_WEATHER_TEST_LIVE': 'FALSE',
    'REALTIME_WEATHER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['REALTIME_WEATHER_TEST_RELATIVE_HUMIDITY_ENTID']

  const live = 'TRUE' === env.REALTIME_WEATHER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['REALTIME_WEATHER_TEST_RELATIVE_HUMIDITY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RealtimeWeatherSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.REALTIME_WEATHER_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
