-- RealtimeWeather SDK error

local RealtimeWeatherError = {}
RealtimeWeatherError.__index = RealtimeWeatherError


function RealtimeWeatherError.new(code, msg, ctx)
  local self = setmetatable({}, RealtimeWeatherError)
  self.is_sdk_error = true
  self.sdk = "RealtimeWeather"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RealtimeWeatherError:error()
  return self.msg
end


function RealtimeWeatherError:__tostring()
  return self.msg
end


return RealtimeWeatherError
