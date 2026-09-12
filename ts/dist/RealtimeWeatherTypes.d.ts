export interface AirTemperature {
    stationId?: string;
    timestamp?: string;
    value?: number;
}
export interface AirTemperatureListMatch {
    collection_id: number;
    date?: string;
    datetime?: string;
}
export interface Collection {
    coverage?: string;
    datasetId?: string;
    id?: string;
    name?: string;
    type?: string;
}
export interface CollectionListMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface Rainfall {
    stationId?: string;
    timestamp?: string;
    value?: number;
}
export interface RainfallListMatch {
    collection_id: number;
    date?: string;
    datetime?: string;
}
export interface RelativeHumidity {
    stationId?: string;
    timestamp?: string;
    value?: number;
}
export interface RelativeHumidityListMatch {
    collection_id: number;
    date?: string;
    datetime?: string;
}
export interface WindDirection {
    stationId?: string;
    timestamp?: string;
    value?: number;
}
export interface WindDirectionListMatch {
    collection_id: number;
    date?: string;
    datetime?: string;
}
export interface WindSpeed {
    stationId?: string;
    timestamp?: string;
    value?: number;
}
export interface WindSpeedListMatch {
    collection_id: number;
    date?: string;
    datetime?: string;
}
