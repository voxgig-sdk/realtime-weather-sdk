
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'RealtimeWeather',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "value",
          "type": "`$NUMBER`"
        }
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "date",
                    "orig": "date",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/collections/{collectionId}/air-temperature",
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
              "select": {
                "exist": [
                  "collection_id",
                  "date",
                  "datetime"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "collection"
          ]
        ]
      }
    },
    "collection": {
      "fields": [
        {
          "name": "coverage",
          "type": "`$STRING`"
        },
        {
          "name": "datasetId",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "type": "`$STRING`"
        }
      ],
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/collections/{collectionId}/metadata",
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
              "select": {
                "$action": "metadata",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.datasets`"
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
          "type": "`$STRING`"
        },
        {
          "name": "timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "value",
          "type": "`$NUMBER`"
        }
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "date",
                    "orig": "date",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/collections/{collectionId}/rainfall",
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
              "select": {
                "exist": [
                  "collection_id",
                  "date",
                  "datetime"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "collection"
          ]
        ]
      }
    },
    "relative_humidity": {
      "fields": [
        {
          "name": "stationId",
          "type": "`$STRING`"
        },
        {
          "name": "timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "value",
          "type": "`$NUMBER`"
        }
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "date",
                    "orig": "date",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/collections/{collectionId}/relative-humidity",
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
              "select": {
                "exist": [
                  "collection_id",
                  "date",
                  "datetime"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "collection"
          ]
        ]
      }
    },
    "wind_direction": {
      "fields": [
        {
          "name": "stationId",
          "type": "`$STRING`"
        },
        {
          "name": "timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "value",
          "type": "`$NUMBER`"
        }
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "date",
                    "orig": "date",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/collections/{collectionId}/wind-direction",
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
              "select": {
                "exist": [
                  "collection_id",
                  "date",
                  "datetime"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "collection"
          ]
        ]
      }
    },
    "wind_speed": {
      "fields": [
        {
          "name": "stationId",
          "type": "`$STRING`"
        },
        {
          "name": "timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "value",
          "type": "`$NUMBER`"
        }
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "date",
                    "orig": "date",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "datetime",
                    "orig": "datetime",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/collections/{collectionId}/wind-speed",
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
              "select": {
                "exist": [
                  "collection_id",
                  "date",
                  "datetime"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "collection"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config
}

