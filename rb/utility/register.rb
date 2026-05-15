# RealtimeWeather SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

RealtimeWeatherUtility.registrar = ->(u) {
  u.clean = RealtimeWeatherUtilities::Clean
  u.done = RealtimeWeatherUtilities::Done
  u.make_error = RealtimeWeatherUtilities::MakeError
  u.feature_add = RealtimeWeatherUtilities::FeatureAdd
  u.feature_hook = RealtimeWeatherUtilities::FeatureHook
  u.feature_init = RealtimeWeatherUtilities::FeatureInit
  u.fetcher = RealtimeWeatherUtilities::Fetcher
  u.make_fetch_def = RealtimeWeatherUtilities::MakeFetchDef
  u.make_context = RealtimeWeatherUtilities::MakeContext
  u.make_options = RealtimeWeatherUtilities::MakeOptions
  u.make_request = RealtimeWeatherUtilities::MakeRequest
  u.make_response = RealtimeWeatherUtilities::MakeResponse
  u.make_result = RealtimeWeatherUtilities::MakeResult
  u.make_point = RealtimeWeatherUtilities::MakePoint
  u.make_spec = RealtimeWeatherUtilities::MakeSpec
  u.make_url = RealtimeWeatherUtilities::MakeUrl
  u.param = RealtimeWeatherUtilities::Param
  u.prepare_auth = RealtimeWeatherUtilities::PrepareAuth
  u.prepare_body = RealtimeWeatherUtilities::PrepareBody
  u.prepare_headers = RealtimeWeatherUtilities::PrepareHeaders
  u.prepare_method = RealtimeWeatherUtilities::PrepareMethod
  u.prepare_params = RealtimeWeatherUtilities::PrepareParams
  u.prepare_path = RealtimeWeatherUtilities::PreparePath
  u.prepare_query = RealtimeWeatherUtilities::PrepareQuery
  u.result_basic = RealtimeWeatherUtilities::ResultBasic
  u.result_body = RealtimeWeatherUtilities::ResultBody
  u.result_headers = RealtimeWeatherUtilities::ResultHeaders
  u.transform_request = RealtimeWeatherUtilities::TransformRequest
  u.transform_response = RealtimeWeatherUtilities::TransformResponse
}
