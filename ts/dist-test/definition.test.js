"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "air_temperature",
        "accessor": "AirTemperature",
        "op": "list",
        "method": "GET",
        "path": "/collections/{collectionId}/air-temperature",
        "args": [
            {
                "name": "collection_id",
                "wire": "collectionId",
                "value": 1459
            }
        ],
        "select": {
            "date": "v1",
            "datetime": "v1"
        },
        "headers": [],
        "query": [
            "date",
            "datetime"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "metadata": {
                "readingType": "temperature",
                "readingUnit": "deg C",
                "stations": [
                    {
                        "deviceId": "x",
                        "id": "x",
                        "location": {
                            "latitude": 1,
                            "longitude": 1
                        },
                        "name": "x"
                    }
                ]
            },
            "data": [
                {
                    "stationId": "x",
                    "timestamp": "2026-01-01T00:00:00Z",
                    "value": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "collection",
        "accessor": "Collection",
        "op": "list",
        "method": "GET",
        "path": "/collections/{collectionId}/metadata",
        "action": "metadata",
        "args": [
            {
                "name": "id",
                "wire": "collectionId",
                "value": 1459
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "collectionId": 1459,
            "title": "Realtime Weather Readings across Singapore",
            "description": "x",
            "agency": "National Environment Agency (NEA)",
            "datasets": [
                {
                    "coverage": "May 2016 to Feb 2026",
                    "datasetId": "x",
                    "name": "x",
                    "type": "API"
                }
            ],
            "updatedAt": "2026-01-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "rainfall",
        "accessor": "Rainfall",
        "op": "list",
        "method": "GET",
        "path": "/collections/{collectionId}/rainfall",
        "args": [
            {
                "name": "collection_id",
                "wire": "collectionId",
                "value": 1459
            }
        ],
        "select": {
            "date": "v1",
            "datetime": "v1"
        },
        "headers": [],
        "query": [
            "date",
            "datetime"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "metadata": {
                "readingType": "temperature",
                "readingUnit": "deg C",
                "stations": [
                    {
                        "deviceId": "x",
                        "id": "x",
                        "location": {
                            "latitude": 1,
                            "longitude": 1
                        },
                        "name": "x"
                    }
                ]
            },
            "data": [
                {
                    "stationId": "x",
                    "timestamp": "2026-01-01T00:00:00Z",
                    "value": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "relative_humidity",
        "accessor": "RelativeHumidity",
        "op": "list",
        "method": "GET",
        "path": "/collections/{collectionId}/relative-humidity",
        "args": [
            {
                "name": "collection_id",
                "wire": "collectionId",
                "value": 1459
            }
        ],
        "select": {
            "date": "v1",
            "datetime": "v1"
        },
        "headers": [],
        "query": [
            "date",
            "datetime"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "metadata": {
                "readingType": "temperature",
                "readingUnit": "deg C",
                "stations": [
                    {
                        "deviceId": "x",
                        "id": "x",
                        "location": {
                            "latitude": 1,
                            "longitude": 1
                        },
                        "name": "x"
                    }
                ]
            },
            "data": [
                {
                    "stationId": "x",
                    "timestamp": "2026-01-01T00:00:00Z",
                    "value": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "wind_direction",
        "accessor": "WindDirection",
        "op": "list",
        "method": "GET",
        "path": "/collections/{collectionId}/wind-direction",
        "args": [
            {
                "name": "collection_id",
                "wire": "collectionId",
                "value": 1459
            }
        ],
        "select": {
            "date": "v1",
            "datetime": "v1"
        },
        "headers": [],
        "query": [
            "date",
            "datetime"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "metadata": {
                "readingType": "temperature",
                "readingUnit": "deg C",
                "stations": [
                    {
                        "deviceId": "x",
                        "id": "x",
                        "location": {
                            "latitude": 1,
                            "longitude": 1
                        },
                        "name": "x"
                    }
                ]
            },
            "data": [
                {
                    "stationId": "x",
                    "timestamp": "2026-01-01T00:00:00Z",
                    "value": 1
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "wind_speed",
        "accessor": "WindSpeed",
        "op": "list",
        "method": "GET",
        "path": "/collections/{collectionId}/wind-speed",
        "args": [
            {
                "name": "collection_id",
                "wire": "collectionId",
                "value": 1459
            }
        ],
        "select": {
            "date": "v1",
            "datetime": "v1"
        },
        "headers": [],
        "query": [
            "date",
            "datetime"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "metadata": {
                "readingType": "temperature",
                "readingUnit": "deg C",
                "stations": [
                    {
                        "deviceId": "x",
                        "id": "x",
                        "location": {
                            "latitude": 1,
                            "longitude": 1
                        },
                        "name": "x"
                    }
                ]
            },
            "data": [
                {
                    "stationId": "x",
                    "timestamp": "2026-01-01T00:00:00Z",
                    "value": 1
                }
            ]
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map