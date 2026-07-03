package core

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
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"active": true,
						"name": "station_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "timestamp",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "value",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 2,
					},
				},
				"name": "air_temperature",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
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
											"active": true,
											"kind": "query",
											"name": "date",
											"orig": "date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "coverage",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "dataset_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
				},
				"name": "collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": 1459,
											"kind": "param",
											"name": "id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
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
									"res": "`body`",
								},
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rainfall": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "station_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "timestamp",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "value",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 2,
					},
				},
				"name": "rainfall",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
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
											"active": true,
											"kind": "query",
											"name": "date",
											"orig": "date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "station_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "timestamp",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "value",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 2,
					},
				},
				"name": "relative_humidity",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
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
											"active": true,
											"kind": "query",
											"name": "date",
											"orig": "date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "station_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "timestamp",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "value",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 2,
					},
				},
				"name": "wind_direction",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
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
											"active": true,
											"kind": "query",
											"name": "date",
											"orig": "date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "station_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "timestamp",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "value",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 2,
					},
				},
				"name": "wind_speed",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
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
											"active": true,
											"kind": "query",
											"name": "date",
											"orig": "date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
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
								"index$": 0,
							},
						},
						"key$": "list",
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
