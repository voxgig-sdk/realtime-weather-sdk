package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "RealtimeWeather",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api-production.data.gov.sg/v2/public/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"air_temperature": map[string]any{},
				"collection": map[string]any{},
				"rainfall": map[string]any{},
				"relative_humidity": map[string]any{},
				"wind_direction": map[string]any{},
				"wind_speed": map[string]any{},
			},
		},
		"entity": map[string]any{
			"air_temperature": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "stationId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"type": "`$NUMBER`",
					},
				},
				"name": "air_temperature",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/air-temperature",
								"parts": []any{
									"collections",
									"{collection_id}",
									"air-temperature",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "collection_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"date",
										"datetime",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"collection",
						},
					},
				},
			},
			"collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coverage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "datasetId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
				},
				"name": "collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/metadata",
								"parts": []any{
									"collections",
									"{id}",
									"metadata",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "id",
									},
								},
								"select": map[string]any{
									"$action": "metadata",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.datasets`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rainfall": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "stationId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"type": "`$NUMBER`",
					},
				},
				"name": "rainfall",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/rainfall",
								"parts": []any{
									"collections",
									"{collection_id}",
									"rainfall",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "collection_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"date",
										"datetime",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"collection",
						},
					},
				},
			},
			"relative_humidity": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "stationId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"type": "`$NUMBER`",
					},
				},
				"name": "relative_humidity",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/relative-humidity",
								"parts": []any{
									"collections",
									"{collection_id}",
									"relative-humidity",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "collection_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"date",
										"datetime",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"collection",
						},
					},
				},
			},
			"wind_direction": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "stationId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"type": "`$NUMBER`",
					},
				},
				"name": "wind_direction",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/wind-direction",
								"parts": []any{
									"collections",
									"{collection_id}",
									"wind-direction",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "collection_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"date",
										"datetime",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"collection",
						},
					},
				},
			},
			"wind_speed": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "stationId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"type": "`$NUMBER`",
					},
				},
				"name": "wind_speed",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/wind-speed",
								"parts": []any{
									"collections",
									"{collection_id}",
									"wind-speed",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "collection_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"date",
										"datetime",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"collection",
						},
					},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
