import { RealtimeWeatherEntityBase } from '../RealtimeWeatherEntityBase';
import type { RealtimeWeatherSDK } from '../RealtimeWeatherSDK';
import type { Control } from '../types';
import type { Rainfall, RainfallListMatch } from '../RealtimeWeatherTypes';
declare class RainfallEntity extends RealtimeWeatherEntityBase<Rainfall> {
    constructor(client: RealtimeWeatherSDK, entopts: any);
    make(this: RainfallEntity): RainfallEntity;
    list(this: any, reqmatch?: RainfallListMatch, ctrl?: Control): Promise<RainfallEntity[]>;
}
export { RainfallEntity };
