import { RealtimeWeatherEntityBase } from '../RealtimeWeatherEntityBase';
import type { RealtimeWeatherSDK } from '../RealtimeWeatherSDK';
import type { Control } from '../types';
import type { Collection, CollectionListMatch } from '../RealtimeWeatherTypes';
declare class CollectionEntity extends RealtimeWeatherEntityBase<Collection> {
    constructor(client: RealtimeWeatherSDK, entopts: any);
    make(this: CollectionEntity): CollectionEntity;
    list(this: any, reqmatch?: CollectionListMatch, ctrl?: Control): Promise<CollectionEntity[]>;
}
export { CollectionEntity };
