<?php
declare(strict_types=1);

// RealtimeWeather SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

RealtimeWeatherUtility::setRegistrar(function (RealtimeWeatherUtility $u): void {
    $u->clean = [RealtimeWeatherClean::class, 'call'];
    $u->done = [RealtimeWeatherDone::class, 'call'];
    $u->make_error = [RealtimeWeatherMakeError::class, 'call'];
    $u->feature_add = [RealtimeWeatherFeatureAdd::class, 'call'];
    $u->feature_hook = [RealtimeWeatherFeatureHook::class, 'call'];
    $u->feature_init = [RealtimeWeatherFeatureInit::class, 'call'];
    $u->fetcher = [RealtimeWeatherFetcher::class, 'call'];
    $u->make_fetch_def = [RealtimeWeatherMakeFetchDef::class, 'call'];
    $u->make_context = [RealtimeWeatherMakeContext::class, 'call'];
    $u->make_options = [RealtimeWeatherMakeOptions::class, 'call'];
    $u->make_request = [RealtimeWeatherMakeRequest::class, 'call'];
    $u->make_response = [RealtimeWeatherMakeResponse::class, 'call'];
    $u->make_result = [RealtimeWeatherMakeResult::class, 'call'];
    $u->make_point = [RealtimeWeatherMakePoint::class, 'call'];
    $u->make_spec = [RealtimeWeatherMakeSpec::class, 'call'];
    $u->make_url = [RealtimeWeatherMakeUrl::class, 'call'];
    $u->param = [RealtimeWeatherParam::class, 'call'];
    $u->prepare_auth = [RealtimeWeatherPrepareAuth::class, 'call'];
    $u->prepare_body = [RealtimeWeatherPrepareBody::class, 'call'];
    $u->prepare_headers = [RealtimeWeatherPrepareHeaders::class, 'call'];
    $u->prepare_method = [RealtimeWeatherPrepareMethod::class, 'call'];
    $u->prepare_params = [RealtimeWeatherPrepareParams::class, 'call'];
    $u->prepare_path = [RealtimeWeatherPreparePath::class, 'call'];
    $u->prepare_query = [RealtimeWeatherPrepareQuery::class, 'call'];
    $u->result_basic = [RealtimeWeatherResultBasic::class, 'call'];
    $u->result_body = [RealtimeWeatherResultBody::class, 'call'];
    $u->result_headers = [RealtimeWeatherResultHeaders::class, 'call'];
    $u->transform_request = [RealtimeWeatherTransformRequest::class, 'call'];
    $u->transform_response = [RealtimeWeatherTransformResponse::class, 'call'];
});
