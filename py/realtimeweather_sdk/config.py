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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "short": "Station identifier",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "timestamp",
            "short": "Timestamp of the reading",
            "type": "`$STRING`",
          },
          {
            "format": "double",
            "name": "value",
            "short": "The measured value",
            "type": "`$NUMBER`",
          },
        ],
        "name": "air_temperature",
        "op": {
          "list": {
            "input": "data",
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
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/air-temperature",
                "rename": {
                  "param": {
                    "collectionId": "collection_id",
                  },
                },
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
                "parts": [
                  "collections",
                  "{collection_id}",
                  "air-temperature",
                ],
              },
            ],
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
            "short": "Time coverage of the dataset",
            "type": "`$STRING`",
          },
          {
            "name": "datasetId",
            "short": "Unique identifier for the dataset",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the dataset",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Type of dataset",
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
                "args": {
                  "params": [
                    {
                      "example": 1459,
                      "kind": "param",
                      "name": "id",
                      "orig": "collection_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/metadata",
                "rename": {
                  "param": {
                    "collectionId": "id",
                  },
                },
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
                "select": {
                  "$action": "metadata",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.datasets`",
                },
                "parts": [
                  "collections",
                  "{id}",
                  "metadata",
                ],
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
            "short": "Station identifier",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "timestamp",
            "short": "Timestamp of the reading",
            "type": "`$STRING`",
          },
          {
            "format": "double",
            "name": "value",
            "short": "The measured value",
            "type": "`$NUMBER`",
          },
        ],
        "name": "rainfall",
        "op": {
          "list": {
            "input": "data",
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
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/rainfall",
                "rename": {
                  "param": {
                    "collectionId": "collection_id",
                  },
                },
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
                "parts": [
                  "collections",
                  "{collection_id}",
                  "rainfall",
                ],
              },
            ],
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
            "name": "stationId",
            "short": "Station identifier",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "timestamp",
            "short": "Timestamp of the reading",
            "type": "`$STRING`",
          },
          {
            "format": "double",
            "name": "value",
            "short": "The measured value",
            "type": "`$NUMBER`",
          },
        ],
        "name": "relative_humidity",
        "op": {
          "list": {
            "input": "data",
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
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/relative-humidity",
                "rename": {
                  "param": {
                    "collectionId": "collection_id",
                  },
                },
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
                "parts": [
                  "collections",
                  "{collection_id}",
                  "relative-humidity",
                ],
              },
            ],
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
            "name": "stationId",
            "short": "Station identifier",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "timestamp",
            "short": "Timestamp of the reading",
            "type": "`$STRING`",
          },
          {
            "format": "double",
            "name": "value",
            "short": "The measured value",
            "type": "`$NUMBER`",
          },
        ],
        "name": "wind_direction",
        "op": {
          "list": {
            "input": "data",
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
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/wind-direction",
                "rename": {
                  "param": {
                    "collectionId": "collection_id",
                  },
                },
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
                "parts": [
                  "collections",
                  "{collection_id}",
                  "wind-direction",
                ],
              },
            ],
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
            "name": "stationId",
            "short": "Station identifier",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "timestamp",
            "short": "Timestamp of the reading",
            "type": "`$STRING`",
          },
          {
            "format": "double",
            "name": "value",
            "short": "The measured value",
            "type": "`$NUMBER`",
          },
        ],
        "name": "wind_speed",
        "op": {
          "list": {
            "input": "data",
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
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "date",
                      "orig": "date",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "datetime",
                      "orig": "datetime",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/collections/{collectionId}/wind-speed",
                "rename": {
                  "param": {
                    "collectionId": "collection_id",
                  },
                },
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
                "parts": [
                  "collections",
                  "{collection_id}",
                  "wind-speed",
                ],
              },
            ],
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
