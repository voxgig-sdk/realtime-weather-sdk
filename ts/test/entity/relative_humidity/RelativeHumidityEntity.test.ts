

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"stationId","req":false,"short":"Station identifier","type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"timestamp","req":false,"short":"Timestamp of the reading","type":"`$STRING`","index$":1},{"active":true,"format":"double","name":"value","req":false,"short":"The measured value","type":"`$NUMBER`","index$":2}],"name":"relative_humidity","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":1459,"kind":"param","name":"collection_id","orig":"collection_id","reqd":true,"type":"`$INTEGER`","index$":0}],"query":[{"active":true,"kind":"query","name":"date","orig":"date","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"datetime","orig":"datetime","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /collections/{collectionId}/relative-humidity","json":"{\"operationId\":\"getRelativeHumidity\",\"parameters\":[{\"description\":\"The collection identifier (1459 for Realtime Weather)\",\"in\":\"path\",\"name\":\"collectionId\",\"required\":true,\"schema\":{\"example\":1459,\"type\":\"integer\"}},{\"description\":\"Filter by date in ISO 8601 format (YYYY-MM-DD)\",\"in\":\"query\",\"name\":\"date\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"Filter by datetime in ISO 8601 format\",\"in\":\"query\",\"name\":\"datetime\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Array of weather readings\",\"items\":{\"properties\":{\"stationId\":{\"description\":\"Station identifier\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Timestamp of the reading\",\"format\":\"date-time\",\"type\":\"string\"},\"value\":{\"description\":\"The measured value\",\"format\":\"double\",\"type\":\"number\"}},\"type\":\"object\"},\"type\":\"array\"},\"metadata\":{\"properties\":{\"readingType\":{\"description\":\"Type of weather reading\",\"example\":\"temperature\",\"type\":\"string\"},\"readingUnit\":{\"description\":\"Unit of measurement\",\"example\":\"deg C\",\"type\":\"string\"},\"stations\":{\"description\":\"Weather stations providing data\",\"items\":{\"properties\":{\"deviceId\":{\"description\":\"Device identifier\",\"type\":\"string\"},\"id\":{\"description\":\"Unique station identifier\",\"type\":\"string\"},\"location\":{\"properties\":{\"latitude\":{\"description\":\"Latitude coordinate\",\"format\":\"double\",\"type\":\"number\"},\"longitude\":{\"description\":\"Longitude coordinate\",\"format\":\"double\",\"type\":\"number\"}},\"type\":\"object\"},\"name\":{\"description\":\"Station name\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with relative humidity data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"object\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"object\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Data not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/collections/{collectionId}/relative-humidity","rename":{"param":{"collectionId":"collection_id"}},"segments":[{"lit":"collections"},{"var":"collection_id"},{"lit":"relative-humidity"}],"select":{"exist":["collection_id","date","datetime"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["collection"]]},"key$":"relative_humidity","name__orig":"relative_humidity","Name":"RelativeHumidity","name_":"relative_humidity","name-":"relative-humidity","NAME":"RELATIVE_HUMIDITY","index$":3}, {"active":true,"entity":"relative_humidity","key$":"BasicRelativeHumidityFlow","kind":"basic","name":"BasicRelativeHumidityFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"collection_id":"collection01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"relative_humidity_ref01"}}],"index$":0}]}, 'RelativeHumidity')
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
  
