<?php

use App\Http\Controllers\WeatherController;

Route::get('/weather/{city}', [WeatherController::class, 'get']);
