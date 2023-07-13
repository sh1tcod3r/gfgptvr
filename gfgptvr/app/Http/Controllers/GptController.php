<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use OpenAI;

class GptController extends Controller
{
    private function sendErr($user, string $userMsg, string $assistantMsg)
    {
        Message::create(['user_id' => $user->id, 'role' => 'user', 'content' => $userMsg]);
        Message::create(['user_id' => $user->id, 'role' => 'assistant', 'content' => $assistantMsg]);

        return response(['audio' => false, 'txt' => $assistantMsg], 200)->header("Content-Type", "audio/mpeg");
    }

    public function index(Request $request)
    {
        $user = $request->user();

        try {
            $client = OpenAI::client($user->openai_key ?? getenv('OPEN_AI'));

            if ($user->messages_sent > 5 && ! $user->openai_key) {
                return $this->sendErr($user, $request->input('message'), 'Limits exceeded. Enter OpenAI key in the profile.');
            }

            $messages = [];
            $messages[] = ['role' => 'system', 'content' => trim("
                You will play a role of a good friend.
                Your name is Samantha.
                Their name is {$user->name}.
                Don't say hi or hey or similar, just use their name.
                Ask them random questions, keep the conversation going.
                Ask them questions about life, death, their happiness, morality and similar things.
                Keep the conversation going, keep asking questions, make it fun.
                Ask them fun questions.
                Ask personal questions: about family, about their parents, relationships, friends, hobbies, job.
                Sometimes tell a joke. Don't repeat jokes.
                DO NOT REPEAT QUESTIONS YOU HAVE ALREADY ASKED.
                Call them by their name if you didn't the last time.
                Don't say hi or hey or similar, just use their name.
                DO NOT REPEAT QUESTIONS YOU HAVE ALREADY ASKED.
                DO NOT TELL SAME JOKES.
            ")];

            foreach (array_reverse(Message::where('user_id', $user->id)
                         ->orderBy('created_at', 'desc')
                         ->orderBy('id', 'desc')
                         ->take(20)->get()->toArray()) as $m
            ) {
                $messages[] = ['role' => $m['role'], 'content' => $m['content']];
            }

            $messages[] = ['role' => 'user', 'content' => $request->input('message')];

            $response = $client->chat()->create([
                'model' => 'gpt-3.5-turbo',
                'messages' => $messages,
                'temperature' => 0.8,
            ]);
            $openAiResponse = $response->choices[0]->message->content;

            Message::create(['user_id' => $user->id, 'role' => 'user', 'content' => $request->input('message')]);
            Message::create(['user_id' => $user->id, 'role' => 'assistant', 'content' => $openAiResponse]);

            $user->messages_sent = $user->messages_sent + 1;
            $user->save();

            // voice
            $audio = false;
            try {
//            $data = [
//                "text" => $openAiResponse,
//                "model_id" => "eleven_monolingual_v1",
//                "voice_settings" => [
//                    "stability" => 0.5,
//                    "similarity_boost" => 0.5
//                ]
//            ];
//
//            $response = Http::withHeaders([
//                "accept" => "audio/mpeg",
//                "xi-api-key" => "",
//                "Content-Type" => "application/json"
//            ])->post("https://api.elevenlabs.io/v1/text-to-speech/", $data);
//
//            $audio = base64_encode($response->body());

//            $response = Http::withHeaders([
//                "accept" => "audio/mpeg",
//                "Content-Type" => "application/json"
//            ])->get("https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&q={$openAiResponse}&tl=en-US");
//
//            $audio = base64_encode($response->body());
            } catch (\Exception $e) {
                $audio = false;
            }
        } catch (\Throwable $e) {
            return $this->sendErr($user, $request->input('message'), $e->getMessage());
        }

        return response(['audio' => $audio, 'txt' => $openAiResponse], 200)->header("Content-Type", "audio/mpeg");
    }
}
