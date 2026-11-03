# RealtimeWeather SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "RealtimeWeather",
            "slug": "realtime-weather",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "name": "stationId",
            "title": "Station Id",
            "type": "`$STRING`",
            "short": "Station identifier",
          },
          {
            "name": "timestamp",
            "title": "Timestamp",
            "type": "`$STRING`",
            "short": "Timestamp of the reading",
            "format": "date-time",
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$NUMBER`",
            "short": "The measured value",
            "format": "double",
          },
        ],
        "name": "air_temperature",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/air-temperature",
                "segments": [
                  {
                    "lit": "collections",
                  },
                  {
                    "var": "collection_id",
                  },
                  {
                    "lit": "air-temperature",
                  },
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "collection_id",
                      "orig": "collectionId",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 1459,
                    },
                  ],
                  "query": [
                    {
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "datetime",
                      "orig": "datetime",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "collection_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.collection",
            ],
          ],
        },
      },
      "collection": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "collection",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/metadata",
                "segments": [
                  {
                    "lit": "collections",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "metadata",
                  },
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.datasets`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "collectionId",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 1459,
                    },
                  ],
                },
                "select": {
                  "$action": "metadata",
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "rainfall": {
        "fields": [
          {
            "name": "stationId",
            "title": "Station Id",
            "type": "`$STRING`",
            "short": "Station identifier",
          },
          {
            "name": "timestamp",
            "title": "Timestamp",
            "type": "`$STRING`",
            "short": "Timestamp of the reading",
            "format": "date-time",
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$NUMBER`",
            "short": "The measured value",
            "format": "double",
          },
        ],
        "name": "rainfall",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/rainfall",
                "segments": [
                  {
                    "lit": "collections",
                  },
                  {
                    "var": "collection_id",
                  },
                  {
                    "lit": "rainfall",
                  },
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "collection_id",
                      "orig": "collectionId",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 1459,
                    },
                  ],
                  "query": [
                    {
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "datetime",
                      "orig": "datetime",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "collection_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.collection",
            ],
          ],
        },
      },
      "relative_humidity": {
        "fields": [
          {
            "name": "stationId",
            "title": "Station Id",
            "type": "`$STRING`",
            "short": "Station identifier",
          },
          {
            "name": "timestamp",
            "title": "Timestamp",
            "type": "`$STRING`",
            "short": "Timestamp of the reading",
            "format": "date-time",
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$NUMBER`",
            "short": "The measured value",
            "format": "double",
          },
        ],
        "name": "relative_humidity",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/relative-humidity",
                "segments": [
                  {
                    "lit": "collections",
                  },
                  {
                    "var": "collection_id",
                  },
                  {
                    "lit": "relative-humidity",
                  },
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "collection_id",
                      "orig": "collectionId",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 1459,
                    },
                  ],
                  "query": [
                    {
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "datetime",
                      "orig": "datetime",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "collection_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.collection",
            ],
          ],
        },
      },
      "wind_direction": {
        "fields": [
          {
            "name": "stationId",
            "title": "Station Id",
            "type": "`$STRING`",
            "short": "Station identifier",
          },
          {
            "name": "timestamp",
            "title": "Timestamp",
            "type": "`$STRING`",
            "short": "Timestamp of the reading",
            "format": "date-time",
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$NUMBER`",
            "short": "The measured value",
            "format": "double",
          },
        ],
        "name": "wind_direction",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/wind-direction",
                "segments": [
                  {
                    "lit": "collections",
                  },
                  {
                    "var": "collection_id",
                  },
                  {
                    "lit": "wind-direction",
                  },
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "collection_id",
                      "orig": "collectionId",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 1459,
                    },
                  ],
                  "query": [
                    {
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "datetime",
                      "orig": "datetime",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "collection_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.collection",
            ],
          ],
        },
      },
      "wind_speed": {
        "fields": [
          {
            "name": "stationId",
            "title": "Station Id",
            "type": "`$STRING`",
            "short": "Station identifier",
          },
          {
            "name": "timestamp",
            "title": "Timestamp",
            "type": "`$STRING`",
            "short": "Timestamp of the reading",
            "format": "date-time",
          },
          {
            "name": "value",
            "title": "Value",
            "type": "`$NUMBER`",
            "short": "The measured value",
            "format": "double",
          },
        ],
        "name": "wind_speed",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/wind-speed",
                "segments": [
                  {
                    "lit": "collections",
                  },
                  {
                    "var": "collection_id",
                  },
                  {
                    "lit": "wind-speed",
                  },
                ],
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
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "params": [
                    {
                      "name": "collection_id",
                      "orig": "collectionId",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 1459,
                    },
                  ],
                  "query": [
                    {
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "datetime",
                      "orig": "datetime",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "collection_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.collection",
            ],
          ],
        },
      },
    },
    }
