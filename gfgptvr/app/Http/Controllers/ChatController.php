<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index(Request $request)
    {
        return view('chat');
    }

    public function delete(Request $request)
    {
        Message::where('user_id', $request->user()->id)->delete();
        echo "<script>alert('deleted');</script>";
        return redirect()->back();
    }

    public function chatHistory(Request $request)
    {
        return view('chat_history', [
            'messages' => Message::where('user_id', $request->user()->id)
                ->orderBy('created_at', 'desc')
                ->orderBy('id', 'desc')
                ->paginate(20),
        ]);
    }
}
