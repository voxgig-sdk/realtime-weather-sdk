<?php
declare(strict_types=1);

// RealtimeWeather SDK utility: result_headers

class RealtimeWeatherResultHeaders
{
    public static function call(RealtimeWeatherContext $ctx): ?RealtimeWeatherResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
