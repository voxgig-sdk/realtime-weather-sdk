"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WindDirectionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when REALTIME_WEATHER_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('REALTIME_WEATHER_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.RealtimeWeatherSDK.test();
        const ent = testsdk.WindDirection();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.REALTIME_WEATHER_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'wind_direction.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "stationId": { "a": true, "h": "Station Id", "n": "stationId", "r": false, "sh": "Station identifier", "t": "`$STRING`", "key$": "stationId", "index$": 0 }, "timestamp": { "a": true, "fo": "date-time", "h": "Timestamp", "n": "timestamp", "r": false, "sh": "Timestamp of the reading", "t": "`$STRING`", "key$": "timestamp", "index$": 1 }, "value": { "a": true, "fo": "double", "h": "Value", "n": "value", "r": false, "sh": "The measured value", "t": "`$NUMBER`", "key$": "value", "index$": 2 } }, "name": "wind_direction", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /collections/{collectionId}/wind-direction", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": 1459, "k": "param", "n": "collection_id", "or": "collectionId", "r": true, "t": "`$INTEGER`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "date", "or": "date", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "datetime", "or": "datetime", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/collections/{collectionId}/wind-direction", "q": { "exist": ["collection_id", "date", "datetime"] }, "r": { "param": { "collectionId": "collection_id" } }, "s": [{ "lit": "collections" }, { "var": "collection_id" }, { "lit": "wind-direction" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.collection"]] }, "key$": "wind_direction", "name__orig": "wind_direction", "Name": "WindDirection", "name_": "wind_direction", "name-": "wind-direction", "NAME": "WIND_DIRECTION", "index$": 4 }, { "active": true, "entity": "wind_direction", "key$": "BasicWindDirectionFlow", "kind": "basic", "name": "BasicWindDirectionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "collection_id": "collection01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "wind_direction_ref01" } }], "index$": 0 }] }, 'WindDirection', { "GET /collections/{collectionId}/wind-direction": { "protocol": "http", "parameters": [{ "name": "collectionId", "in": "path", "required": true, "description": "The collection identifier (1459 for Realtime Weather)", "schema": { "type": "integer", "example": 1459 }, "index$": 0 }, { "name": "date", "in": "query", "required": false, "description": "Filter by date in ISO 8601 format (YYYY-MM-DD)", "schema": { "type": "string", "format": "date" }, "index$": 1 }, { "name": "datetime", "in": "query", "required": false, "description": "Filter by datetime in ISO 8601 format", "schema": { "type": "string", "format": "date-time" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let wind_direction_ref01_data = Object.values(setup.data.existing.wind_direction)[0];
        // LIST
        const wind_direction_ref01_ent = client.WindDirection();
        const wind_direction_ref01_match = {};
        wind_direction_ref01_match['collection_id'] = setup.idmap['collection01'];
        const wind_direction_ref01_list = (await wind_direction_ref01_ent.list(wind_direction_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/wind_direction/WindDirectionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.RealtimeWeatherSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['wind_direction01', 'wind_direction02', 'wind_direction03', 'collection01', 'collection02', 'collection03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'REALTIME_WEATHER_TEST_WIND_DIRECTION_ENTID': idmap,
        'REALTIME_WEATHER_TEST_LIVE': 'FALSE',
        'REALTIME_WEATHER_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['REALTIME_WEATHER_TEST_WIND_DIRECTION_ENTID'];
    const live = 'TRUE' === env.REALTIME_WEATHER_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['REALTIME_WEATHER_TEST_WIND_DIRECTION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.RealtimeWeatherSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=WindDirectionEntity.test.js.map