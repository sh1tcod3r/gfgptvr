<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\GptController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/chat', [ChatController::class, 'index'])->name('chat');
    Route::get('/chat/history', [ChatController::class, 'chatHistory'])->name('chat_history');
    Route::get('/chat/delete-chat', [ChatController::class, 'delete'])->name('delete_chat');

    Route::post('/r', [GptController::class, 'index'])->name('r');
});

require __DIR__.'/auth.php';
