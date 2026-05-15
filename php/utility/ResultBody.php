<?php
declare(strict_types=1);

// RealtimeWeather SDK utility: result_body

class RealtimeWeatherResultBody
{
    public static function call(RealtimeWeatherContext $ctx): ?RealtimeWeatherResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
