import { RealtimeWeatherEntityBase } from '../RealtimeWeatherEntityBase';
import type { RealtimeWeatherSDK } from '../RealtimeWeatherSDK';
import type { Control } from '../types';
import type { RelativeHumidity, RelativeHumidityListMatch } from '../RealtimeWeatherTypes';
declare class RelativeHumidityEntity extends RealtimeWeatherEntityBase<RelativeHumidity> {
    constructor(client: RealtimeWeatherSDK, entopts: any);
    make(this: RelativeHumidityEntity): RelativeHumidityEntity;
    list(this: any, reqmatch?: RelativeHumidityListMatch, ctrl?: Control): Promise<RelativeHumidityEntity[]>;
}
export { RelativeHumidityEntity };
