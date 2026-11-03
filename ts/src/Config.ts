
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'RealtimeWeather',
        slug: "realtime-weather",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api-production.data.gov.sg/v2/public/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        air_temperature: {
        },
  
        collection: {
        },
  
        rainfall: {
        },
  
        relative_humidity: {
        },
  
        wind_direction: {
        },
  
        wind_speed: {
        },
  
    }
  }


  entity = {
    "air_temperature": {
      "fields": [
        {
          "name": "stationId",
          "title": "Station Id",
          "type": "`$STRING`",
          "short": "Station identifier"
        },
        {
          "name": "timestamp",
          "title": "Timestamp",
          "type": "`$STRING`",
          "short": "Timestamp of the reading",
          "format": "date-time"
        },
        {
          "name": "value",
          "title": "Value",
          "type": "`$NUMBER`",
          "short": "The measured value",
          "format": "double"
        }
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
                  "lit": "collections"
                },
                {
                  "var": "collection_id"
                },
                {
                  "lit": "air-temperature"
                }
              ],
              "parts": [
                "collections",
                "{collection_id}",
                "air-temperature"
              ],
              "rename": {
                "param": {
                  "collectionId": "collection_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "collection_id",
                    "orig": "collectionId",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true,
                    "example": 1459
                  }
                ],
                "query": [
                  {
                    "name": "date",
                    "orig": "date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "collection_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.collection"
          ]
        ]
      }
    },
    "collection": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                  "lit": "collections"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "metadata"
                }
              ],
              "parts": [
                "collections",
                "{id}",
                "metadata"
              ],
              "rename": {
                "param": {
                  "collectionId": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.datasets`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "collectionId",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true,
                    "example": 1459
                  }
                ]
              },
              "select": {
                "$action": "metadata",
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "rainfall": {
      "fields": [
        {
          "name": "stationId",
          "title": "Station Id",
          "type": "`$STRING`",
          "short": "Station identifier"
        },
        {
          "name": "timestamp",
          "title": "Timestamp",
          "type": "`$STRING`",
          "short": "Timestamp of the reading",
          "format": "date-time"
        },
        {
          "name": "value",
          "title": "Value",
          "type": "`$NUMBER`",
          "short": "The measured value",
          "format": "double"
        }
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
                  "lit": "collections"
                },
                {
                  "var": "collection_id"
                },
                {
                  "lit": "rainfall"
                }
              ],
              "parts": [
                "collections",
                "{collection_id}",
                "rainfall"
              ],
              "rename": {
                "param": {
                  "collectionId": "collection_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "collection_id",
                    "orig": "collectionId",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true,
                    "example": 1459
                  }
                ],
                "query": [
                  {
                    "name": "date",
                    "orig": "date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "collection_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.collection"
          ]
        ]
      }
    },
    "relative_humidity": {
      "fields": [
        {
          "name": "stationId",
          "title": "Station Id",
          "type": "`$STRING`",
          "short": "Station identifier"
        },
        {
          "name": "timestamp",
          "title": "Timestamp",
          "type": "`$STRING`",
          "short": "Timestamp of the reading",
          "format": "date-time"
        },
        {
          "name": "value",
          "title": "Value",
          "type": "`$NUMBER`",
          "short": "The measured value",
          "format": "double"
        }
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
                  "lit": "collections"
                },
                {
                  "var": "collection_id"
                },
                {
                  "lit": "relative-humidity"
                }
              ],
              "parts": [
                "collections",
                "{collection_id}",
                "relative-humidity"
              ],
              "rename": {
                "param": {
                  "collectionId": "collection_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "collection_id",
                    "orig": "collectionId",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true,
                    "example": 1459
                  }
                ],
                "query": [
                  {
                    "name": "date",
                    "orig": "date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "collection_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.collection"
          ]
        ]
      }
    },
    "wind_direction": {
      "fields": [
        {
          "name": "stationId",
          "title": "Station Id",
          "type": "`$STRING`",
          "short": "Station identifier"
        },
        {
          "name": "timestamp",
          "title": "Timestamp",
          "type": "`$STRING`",
          "short": "Timestamp of the reading",
          "format": "date-time"
        },
        {
          "name": "value",
          "title": "Value",
          "type": "`$NUMBER`",
          "short": "The measured value",
          "format": "double"
        }
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
                  "lit": "collections"
                },
                {
                  "var": "collection_id"
                },
                {
                  "lit": "wind-direction"
                }
              ],
              "parts": [
                "collections",
                "{collection_id}",
                "wind-direction"
              ],
              "rename": {
                "param": {
                  "collectionId": "collection_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "collection_id",
                    "orig": "collectionId",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true,
                    "example": 1459
                  }
                ],
                "query": [
                  {
                    "name": "date",
                    "orig": "date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "collection_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.collection"
          ]
        ]
      }
    },
    "wind_speed": {
      "fields": [
        {
          "name": "stationId",
          "title": "Station Id",
          "type": "`$STRING`",
          "short": "Station identifier"
        },
        {
          "name": "timestamp",
          "title": "Timestamp",
          "type": "`$STRING`",
          "short": "Timestamp of the reading",
          "format": "date-time"
        },
        {
          "name": "value",
          "title": "Value",
          "type": "`$NUMBER`",
          "short": "The measured value",
          "format": "double"
        }
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
                  "lit": "collections"
                },
                {
                  "var": "collection_id"
                },
                {
                  "lit": "wind-speed"
                }
              ],
              "parts": [
                "collections",
                "{collection_id}",
                "wind-speed"
              ],
              "rename": {
                "param": {
                  "collectionId": "collection_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "collection_id",
                    "orig": "collectionId",
                    "type": "`$INTEGER`",
                    "kind": "param",
                    "reqd": true,
                    "example": 1459
                  }
                ],
                "query": [
                  {
                    "name": "date",
                    "orig": "date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "collection_id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.collection"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

