
import { Context } from './Context'


class RealtimeWeatherError extends Error {

  isRealtimeWeatherError = true

  sdk = 'RealtimeWeather'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RealtimeWeatherError
}

