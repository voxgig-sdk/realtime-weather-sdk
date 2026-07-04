# RealtimeWeather SDK configuration


def make_config():
    return {
        "main": {
            "name": "RealtimeWeather",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api-production.data.gov.sg/v2/public/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "air_temperature": {},
                "collection": {},
                "rainfall": {},
                "relative_humidity": {},
                "wind_direction": {},
                "wind_speed": {},
            },
        },
        "entity": {
      "air_temperature": {
        "fields": [
          {
            "active": True,
            "name": "station_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "timestamp",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "value",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 2,
          },
        ],
        "name": "air_temperature",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 1459,
                      "kind": "param",
                      "name": "collection_id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/collections/{collectionId}/air-temperature",
                "parts": [
                  "collections",
                  "{collection_id}",
                  "air-temperature",
                ],
                "rename": {
                  "param": {
                    "collectionId": "collection_id",
                  },
                },
                "select": {
                  "exist": [
                    "collection_id",
                    "date",
                    "datetime",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "collection",
            ],
          ],
        },
      },
      "collection": {
        "fields": [
          {
            "active": True,
            "name": "coverage",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "dataset_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "type",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "collection",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 1459,
                      "kind": "param",
                      "name": "id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/collections/{collectionId}/metadata",
                "parts": [
                  "collections",
                  "{id}",
                  "metadata",
                ],
                "rename": {
                  "param": {
                    "collectionId": "id",
                  },
                },
                "select": {
                  "$action": "metadata",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "rainfall": {
        "fields": [
          {
            "active": True,
            "name": "station_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "timestamp",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "value",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 2,
          },
        ],
        "name": "rainfall",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 1459,
                      "kind": "param",
                      "name": "collection_id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/collections/{collectionId}/rainfall",
                "parts": [
                  "collections",
                  "{collection_id}",
                  "rainfall",
                ],
                "rename": {
                  "param": {
                    "collectionId": "collection_id",
                  },
                },
                "select": {
                  "exist": [
                    "collection_id",
                    "date",
                    "datetime",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "collection",
            ],
          ],
        },
      },
      "relative_humidity": {
        "fields": [
          {
            "active": True,
            "name": "station_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "timestamp",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "value",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 2,
          },
        ],
        "name": "relative_humidity",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 1459,
                      "kind": "param",
                      "name": "collection_id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/collections/{collectionId}/relative-humidity",
                "parts": [
                  "collections",
                  "{collection_id}",
                  "relative-humidity",
                ],
                "rename": {
                  "param": {
                    "collectionId": "collection_id",
                  },
                },
                "select": {
                  "exist": [
                    "collection_id",
                    "date",
                    "datetime",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "collection",
            ],
          ],
        },
      },
      "wind_direction": {
        "fields": [
          {
            "active": True,
            "name": "station_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "timestamp",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "value",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 2,
          },
        ],
        "name": "wind_direction",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 1459,
                      "kind": "param",
                      "name": "collection_id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/collections/{collectionId}/wind-direction",
                "parts": [
                  "collections",
                  "{collection_id}",
                  "wind-direction",
                ],
                "rename": {
                  "param": {
                    "collectionId": "collection_id",
                  },
                },
                "select": {
                  "exist": [
                    "collection_id",
                    "date",
                    "datetime",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "collection",
            ],
          ],
        },
      },
      "wind_speed": {
        "fields": [
          {
            "active": True,
            "name": "station_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "timestamp",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "value",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 2,
          },
        ],
        "name": "wind_speed",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 1459,
                      "kind": "param",
                      "name": "collection_id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/collections/{collectionId}/wind-speed",
                "parts": [
                  "collections",
                  "{collection_id}",
                  "wind-speed",
                ],
                "rename": {
                  "param": {
                    "collectionId": "collection_id",
                  },
                },
                "select": {
                  "exist": [
                    "collection_id",
                    "date",
                    "datetime",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "collection",
            ],
          ],
        },
      },
    },
    }
