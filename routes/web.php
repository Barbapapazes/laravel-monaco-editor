<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

if (!app()->isProduction()) {
    require __DIR__ . '/proxy.dev.php';
}
