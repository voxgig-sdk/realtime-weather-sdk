import { AirTemperatureEntity } from './entity/AirTemperatureEntity';
import { CollectionEntity } from './entity/CollectionEntity';
import { RainfallEntity } from './entity/RainfallEntity';
import { RelativeHumidityEntity } from './entity/RelativeHumidityEntity';
import { WindDirectionEntity } from './entity/WindDirectionEntity';
import { WindSpeedEntity } from './entity/WindSpeedEntity';
export type * from './RealtimeWeatherTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RealtimeWeatherEntityBase } from './RealtimeWeatherEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class RealtimeWeatherSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    AirTemperature(entopts?: Record<string, any>): AirTemperatureEntity;
    Collection(entopts?: Record<string, any>): CollectionEntity;
    Rainfall(entopts?: Record<string, any>): RainfallEntity;
    RelativeHumidity(entopts?: Record<string, any>): RelativeHumidityEntity;
    WindDirection(entopts?: Record<string, any>): WindDirectionEntity;
    WindSpeed(entopts?: Record<string, any>): WindSpeedEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RealtimeWeatherSDK;
    tester(testopts?: any, sdkopts?: any): RealtimeWeatherSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RealtimeWeatherSDK;
export { stdutil, config, BaseFeature, RealtimeWeatherEntityBase, RealtimeWeatherSDK, SDK, };
