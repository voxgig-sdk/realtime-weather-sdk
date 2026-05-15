# RealtimeWeather SDK configuration

module RealtimeWeatherConfig
  def self.make_config
    {
      "main" => {
        "name" => "RealtimeWeather",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api-production.data.gov.sg/v2/public/api",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "air_temperature" => {},
          "collection" => {},
          "rainfall" => {},
          "relative_humidity" => {},
          "wind_direction" => {},
          "wind_speed" => {},
        },
      },
      "entity" => {
        "air_temperature" => {
          "fields" => [
            {
              "name" => "station_id",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "timestamp",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "value",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 2,
            },
          ],
          "name" => "air_temperature",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "collection_id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "datetime",
                        "orig" => "datetime",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/air-temperature",
                  "parts" => [
                    "collections",
                    "{collection_id}",
                    "air-temperature",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "collection_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "collection_id",
                      "date",
                      "datetime",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "collection",
              ],
            ],
          },
        },
        "collection" => {
          "fields" => [
            {
              "name" => "coverage",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "dataset_id",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "name",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "type",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
          ],
          "name" => "collection",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/metadata",
                  "parts" => [
                    "collections",
                    "{id}",
                    "metadata",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "id",
                    },
                  },
                  "select" => {
                    "$action" => "metadata",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "rainfall" => {
          "fields" => [
            {
              "name" => "station_id",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "timestamp",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "value",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 2,
            },
          ],
          "name" => "rainfall",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "collection_id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "datetime",
                        "orig" => "datetime",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/rainfall",
                  "parts" => [
                    "collections",
                    "{collection_id}",
                    "rainfall",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "collection_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "collection_id",
                      "date",
                      "datetime",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "collection",
              ],
            ],
          },
        },
        "relative_humidity" => {
          "fields" => [
            {
              "name" => "station_id",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "timestamp",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "value",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 2,
            },
          ],
          "name" => "relative_humidity",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "collection_id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "datetime",
                        "orig" => "datetime",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/relative-humidity",
                  "parts" => [
                    "collections",
                    "{collection_id}",
                    "relative-humidity",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "collection_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "collection_id",
                      "date",
                      "datetime",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "collection",
              ],
            ],
          },
        },
        "wind_direction" => {
          "fields" => [
            {
              "name" => "station_id",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "timestamp",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "value",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 2,
            },
          ],
          "name" => "wind_direction",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "collection_id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "datetime",
                        "orig" => "datetime",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/wind-direction",
                  "parts" => [
                    "collections",
                    "{collection_id}",
                    "wind-direction",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "collection_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "collection_id",
                      "date",
                      "datetime",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "collection",
              ],
            ],
          },
        },
        "wind_speed" => {
          "fields" => [
            {
              "name" => "station_id",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "timestamp",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "value",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 2,
            },
          ],
          "name" => "wind_speed",
          "op" => {
            "list" => {
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "collection_id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "datetime",
                        "orig" => "datetime",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/wind-speed",
                  "parts" => [
                    "collections",
                    "{collection_id}",
                    "wind-speed",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "collection_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "collection_id",
                      "date",
                      "datetime",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "collection",
              ],
            ],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    RealtimeWeatherFeatures.make_feature(name)
  end
end
