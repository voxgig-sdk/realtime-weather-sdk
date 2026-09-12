import { RealtimeWeatherEntityBase } from '../RealtimeWeatherEntityBase';
import type { RealtimeWeatherSDK } from '../RealtimeWeatherSDK';
import type { Control } from '../types';
import type { AirTemperature, AirTemperatureListMatch } from '../RealtimeWeatherTypes';
declare class AirTemperatureEntity extends RealtimeWeatherEntityBase<AirTemperature> {
    constructor(client: RealtimeWeatherSDK, entopts: any);
    make(this: AirTemperatureEntity): AirTemperatureEntity;
    list(this: any, reqmatch?: AirTemperatureListMatch, ctrl?: Control): Promise<AirTemperatureEntity[]>;
}
export { AirTemperatureEntity };
