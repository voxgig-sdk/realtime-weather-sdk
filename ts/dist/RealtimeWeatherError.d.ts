import { Context } from './Context';
declare class RealtimeWeatherError extends Error {
    isRealtimeWeatherError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { RealtimeWeatherError };
