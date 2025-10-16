<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function get($city)
    {
        $apiKey = env('WEATHER_API_KEY');
        $response = Http::get("http://api.openweathermap.org/data/2.5/weather", [
            'q' => $city,
            'appid' => $apiKey,
            'units' => 'metric',
            'lang' => 'it',
        ]);

        return $response->json();
    }
}
