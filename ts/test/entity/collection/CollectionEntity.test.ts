

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


describe('CollectionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when REALTIME_WEATHER_TEST_LIVE=TRUE.
  afterEach(liveDelay('REALTIME_WEATHER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RealtimeWeatherSDK.test()
    const ent = testsdk.Collection()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.REALTIME_WEATHER_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'collection.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"collection","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":1459,"kind":"param","name":"id","orig":"collection_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /collections/{collectionId}/metadata","json":"{\"operationId\":\"getCollectionMetadata\",\"parameters\":[{\"description\":\"The unique identifier for the collection. Use 1459 for Realtime Weather Readings.\",\"in\":\"path\",\"name\":\"collectionId\",\"required\":true,\"schema\":{\"example\":1459,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"agency\":{\"description\":\"Publishing agency\",\"example\":\"National Environment Agency (NEA)\",\"type\":\"string\"},\"collectionId\":{\"description\":\"Unique identifier for the collection\",\"example\":1459,\"type\":\"integer\"},\"datasets\":{\"description\":\"List of datasets in the collection\",\"items\":{\"properties\":{\"coverage\":{\"description\":\"Time coverage of the dataset\",\"example\":\"May 2016 to Feb 2026\",\"type\":\"string\"},\"datasetId\":{\"description\":\"Unique identifier for the dataset\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the dataset\",\"type\":\"string\"},\"type\":{\"description\":\"Type of dataset\",\"enum\":[\"API\",\"file\"],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"description\":{\"description\":\"Detailed description of the collection\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the collection\",\"example\":\"Realtime Weather Readings across Singapore\",\"type\":\"string\"},\"updatedAt\":{\"description\":\"Last update timestamp\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with collection metadata\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"object\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Collection not found\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"object\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"object\"},\"message\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/collections/{collectionId}/metadata","rename":{"param":{"collectionId":"id"}},"segments":[{"lit":"collections"},{"var":"id"},{"lit":"metadata"}],"select":{"$action":"metadata","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.datasets`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"collection","name__orig":"collection","Name":"Collection","name_":"collection","name-":"collection","NAME":"COLLECTION","index$":1}, {"active":true,"entity":"collection","key$":"BasicCollectionFlow","kind":"basic","name":"BasicCollectionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"collection_id":"collection01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"collection_ref01"}}],"index$":0}]}, 'Collection')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let collection_ref01_data = Object.values(setup.data.existing.collection)[0] as any

    // LIST
    const collection_ref01_ent = client.Collection()
    const collection_ref01_match: any = {}
    collection_ref01_match['collection_id'] = setup.idmap['collection01']

    const collection_ref01_list = (await collection_ref01_ent.list(collection_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/collection/CollectionTestData.json')

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
    ['collection01','collection02','collection03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'REALTIME_WEATHER_TEST_COLLECTION_ENTID': idmap,
    'REALTIME_WEATHER_TEST_LIVE': 'FALSE',
    'REALTIME_WEATHER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['REALTIME_WEATHER_TEST_COLLECTION_ENTID']

  const live = 'TRUE' === env.REALTIME_WEATHER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['REALTIME_WEATHER_TEST_COLLECTION_ENTID']
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
  
