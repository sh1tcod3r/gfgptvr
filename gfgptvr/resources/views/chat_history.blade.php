<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Chat History') }}


        <a href="{{ route('delete_chat') }}" onclick="return confirm('are you sure?')"
           style="float: right; margin-top: -0.35em"
           class="inline-flex items-center px-4 py-2 bg-red-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
            {{ __('Delete chat history') }}
        </a>
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div id="loading" style="color: #fff"></div>
                    <form id="questionFrm" method="POST" action="{{ route('chat_history') }}">
                        <textarea
                                style="height: 35px"
                               id="question"
                               placeholder="send a message.."
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                        <button style="margin-top: 0.5em" type="submit" class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150">
                            {{ __('Send') }}
                        </button>
                    </form>

                    @if (count($messages) > 0)
                        <br />

                        <table style="font-size: 1em; line-height: 1.7em" class="text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">{{ __('Role') }}</th>
                                    <th scope="col" class="px-6 py-3">{{ __('Message') }}</th>
                                    <th scope="col" class="px-6 py-3">{{ __('Date') }}</th>
                                </tr>
                            </thead>
                            @foreach ($messages as $message)
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4">
                                        @if($message->role === 'user')<span style="color: #fff">@endif
                                            {{ $message->role }}
                                        @if($message->role === 'user')</span>@endif
                                    </td>
                                    <td class="px-6 py-4">{{ $message->content }}</td>
                                    <td class="px-6 py-4" style="font-size: 0.7em; width: 15em">{{ $message->created_at }}</td>
                                </tr>
                            @endforeach
                        </table>
                    @else
                        <br />
                        <i style="color: #9b9b9b">no messages found...</i>
                    @endif

                    <br />

                    {{ $messages->links() }}
                </div>
            </div>
        </div>
    </div>

    <script>
        const tx = document.getElementsByTagName("textarea");
        for (let i = 0; i < tx.length; i++) {
            tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
            tx[i].addEventListener("input", OnInput, false);
        }

        function OnInput() {
            this.style.height = 0;
            this.style.height = (this.scrollHeight) + "px";
        }

        // Get the form and textarea element
        const form = document.getElementById("questionFrm");
        const textarea = document.getElementById("question");
        const loadingElement = document.getElementById("loading");

        // Add event listener to the form submit event
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the form from submitting normally

            const message = textarea.value;

            if (!message) return;

            form.style.display = "none";
            loadingElement.textContent = "Loading...";

            // Create a new FormData object and add the message parameter
            const formData = new FormData();
            formData.append("message", message);

            // Create a new XMLHttpRequest object
            const xhr = new XMLHttpRequest();

            // Define the request type, URL, and async flag
            xhr.open("POST", "/r", true);

            // Define the callback function for the request
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // Request completed successfully
                    location.reload(); // Refresh the page
                }
            };

            // Send the request with the form data
            xhr.send(formData);
        });
    </script>
</x-app-layout>
