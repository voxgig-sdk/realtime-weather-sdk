-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "RealtimeWeather",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api-production.data.gov.sg/v2/public/api",
      auth = {
        prefix = "Bearer",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["air_temperature"] = {},
        ["collection"] = {},
        ["rainfall"] = {},
        ["relative_humidity"] = {},
        ["wind_direction"] = {},
        ["wind_speed"] = {},
      },
    },
    entity = {
      ["air_temperature"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "station_id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "timestamp",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "value",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 2,
          },
        },
        ["name"] = "air_temperature",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = 1459,
                      ["kind"] = "param",
                      ["name"] = "collection_id",
                      ["orig"] = "collection_id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "date",
                      ["orig"] = "date",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "datetime",
                      ["orig"] = "datetime",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/collections/{collectionId}/air-temperature",
                ["parts"] = {
                  "collections",
                  "{collection_id}",
                  "air-temperature",
                },
                ["rename"] = {
                  ["param"] = {
                    ["collectionId"] = "collection_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "collection_id",
                    "date",
                    "datetime",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "collection",
            },
          },
        },
      },
      ["collection"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "coverage",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "dataset_id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "type",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
        },
        ["name"] = "collection",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = 1459,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "collection_id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/collections/{collectionId}/metadata",
                ["parts"] = {
                  "collections",
                  "{id}",
                  "metadata",
                },
                ["rename"] = {
                  ["param"] = {
                    ["collectionId"] = "id",
                  },
                },
                ["select"] = {
                  ["$action"] = "metadata",
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["rainfall"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "station_id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "timestamp",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "value",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 2,
          },
        },
        ["name"] = "rainfall",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = 1459,
                      ["kind"] = "param",
                      ["name"] = "collection_id",
                      ["orig"] = "collection_id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "date",
                      ["orig"] = "date",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "datetime",
                      ["orig"] = "datetime",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/collections/{collectionId}/rainfall",
                ["parts"] = {
                  "collections",
                  "{collection_id}",
                  "rainfall",
                },
                ["rename"] = {
                  ["param"] = {
                    ["collectionId"] = "collection_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "collection_id",
                    "date",
                    "datetime",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "collection",
            },
          },
        },
      },
      ["relative_humidity"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "station_id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "timestamp",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "value",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 2,
          },
        },
        ["name"] = "relative_humidity",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = 1459,
                      ["kind"] = "param",
                      ["name"] = "collection_id",
                      ["orig"] = "collection_id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "date",
                      ["orig"] = "date",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "datetime",
                      ["orig"] = "datetime",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/collections/{collectionId}/relative-humidity",
                ["parts"] = {
                  "collections",
                  "{collection_id}",
                  "relative-humidity",
                },
                ["rename"] = {
                  ["param"] = {
                    ["collectionId"] = "collection_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "collection_id",
                    "date",
                    "datetime",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "collection",
            },
          },
        },
      },
      ["wind_direction"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "station_id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "timestamp",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "value",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 2,
          },
        },
        ["name"] = "wind_direction",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = 1459,
                      ["kind"] = "param",
                      ["name"] = "collection_id",
                      ["orig"] = "collection_id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "date",
                      ["orig"] = "date",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "datetime",
                      ["orig"] = "datetime",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/collections/{collectionId}/wind-direction",
                ["parts"] = {
                  "collections",
                  "{collection_id}",
                  "wind-direction",
                },
                ["rename"] = {
                  ["param"] = {
                    ["collectionId"] = "collection_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "collection_id",
                    "date",
                    "datetime",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "collection",
            },
          },
        },
      },
      ["wind_speed"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "station_id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "timestamp",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "value",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 2,
          },
        },
        ["name"] = "wind_speed",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = 1459,
                      ["kind"] = "param",
                      ["name"] = "collection_id",
                      ["orig"] = "collection_id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "date",
                      ["orig"] = "date",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["kind"] = "query",
                      ["name"] = "datetime",
                      ["orig"] = "datetime",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/collections/{collectionId}/wind-speed",
                ["parts"] = {
                  "collections",
                  "{collection_id}",
                  "wind-speed",
                },
                ["rename"] = {
                  ["param"] = {
                    ["collectionId"] = "collection_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "collection_id",
                    "date",
                    "datetime",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "collection",
            },
          },
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
