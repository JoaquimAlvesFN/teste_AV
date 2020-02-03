<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('produtos', 'Produtos');
Route::resource('pedidos', 'Pedidos');
Route::get('notas/{num}/{serie}', 'NotasFiscais@show');
Route::resource('notas', 'NotasFiscais');
