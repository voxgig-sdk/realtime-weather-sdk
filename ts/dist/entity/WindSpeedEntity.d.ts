import { RealtimeWeatherEntityBase } from '../RealtimeWeatherEntityBase';
import type { RealtimeWeatherSDK } from '../RealtimeWeatherSDK';
import type { Control } from '../types';
import type { WindSpeed, WindSpeedListMatch } from '../RealtimeWeatherTypes';
declare class WindSpeedEntity extends RealtimeWeatherEntityBase<WindSpeed> {
    constructor(client: RealtimeWeatherSDK, entopts: any);
    make(this: WindSpeedEntity): WindSpeedEntity;
    list(this: any, reqmatch?: WindSpeedListMatch, ctrl?: Control): Promise<WindSpeedEntity[]>;
}
export { WindSpeedEntity };
