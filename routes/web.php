<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Auth::routes();

Route::get('{any_page}', [HomeController::class, 'index'])->where('', '.*');
