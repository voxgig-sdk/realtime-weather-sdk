package core

type RealtimeWeatherError struct {
	IsRealtimeWeatherError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRealtimeWeatherError(code string, msg string, ctx *Context) *RealtimeWeatherError {
	return &RealtimeWeatherError{
		IsRealtimeWeatherError: true,
		Sdk:              "RealtimeWeather",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RealtimeWeatherError) Error() string {
	return e.Msg
}
