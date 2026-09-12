import { RealtimeWeatherEntityBase } from '../RealtimeWeatherEntityBase';
import type { RealtimeWeatherSDK } from '../RealtimeWeatherSDK';
import type { Control } from '../types';
import type { WindDirection, WindDirectionListMatch } from '../RealtimeWeatherTypes';
declare class WindDirectionEntity extends RealtimeWeatherEntityBase<WindDirection> {
    constructor(client: RealtimeWeatherSDK, entopts: any);
    make(this: WindDirectionEntity): WindDirectionEntity;
    list(this: any, reqmatch?: WindDirectionListMatch, ctrl?: Control): Promise<WindDirectionEntity[]>;
}
export { WindDirectionEntity };
