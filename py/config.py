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
            "auth": {
                "prefix": "Bearer",
            },
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
            "name": "station_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "timestamp",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "value",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "air_temperature",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 1459,
                      "kind": "param",
                      "name": "collection_id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "coverage",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "dataset_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "collection",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 1459,
                      "kind": "param",
                      "name": "id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "station_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "timestamp",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "value",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "rainfall",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 1459,
                      "kind": "param",
                      "name": "collection_id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "station_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "timestamp",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "value",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "relative_humidity",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 1459,
                      "kind": "param",
                      "name": "collection_id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "station_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "timestamp",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "value",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "wind_direction",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 1459,
                      "kind": "param",
                      "name": "collection_id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
            "name": "station_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "timestamp",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "value",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "wind_speed",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 1459,
                      "kind": "param",
                      "name": "collection_id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
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
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
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
