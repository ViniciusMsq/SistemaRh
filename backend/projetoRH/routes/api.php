<?php

use App\Http\Controllers\CandidatosController;
use App\Http\Controllers\LinguagensController;
use App\Http\Controllers\VagasController;
use App\Http\Controllers\InscriptionsController;
use App\Http\Controllers\ToolsController;

use Illuminate\Support\Facades\Route;

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

//rotas api linguagens
Route::get('/linguagens', [LinguagensController::class, 'index']);

Route::get('/linguagens/{id}', [LinguagensController::class, 'show']);

Route::post('/linguagens', [LinguagensController::class, 'store']);

Route::delete('/linguagens/{id}', [LinguagensController::class, 'destroy']);

Route::put('/linguagens/{id}', [LinguagensController::class, 'update']);
//rotas linguagens

// rotas candidatos
Route::get('/candidatos', [CandidatosController::class, 'index']);

Route::get('/candidatos/{id}', [CandidatosController::class, 'show']);

Route::post('/candidatos', [CandidatosController::class, 'store']);

Route::delete('/candidatos/{id}', [CandidatosController::class, 'destroy']);

Route::put('/candidatos/{id}', [CandidatosController::class, 'update']);
// rotas candidatos

// rotas vagas
Route::get('/vagas', [VagasController::class, 'index']);

Route::get('/vagas/{id}', [VagasController::class, 'show']);

Route::post('/vagas', [VagasController::class, 'store']);

Route::delete('/vagas/{id}', [VagasController::class, 'destroy']);

Route::put('/vagas/{id}', [VagasController::class, 'update']);
// rotas candidatos

// rotas incrições
Route::get('/inscricoes', [InscriptionsController::class, 'index']);

Route::post('/inscricoes', [InscriptionsController::class, 'store']);

// rotas inscrições

// rotas ferramentas de serviço
Route::get('/ferramentas', [ToolsController::class, 'index']);

Route::post('/ferramentas', [ToolsController::class, 'store']);

// rotas ferramentas de serviço
