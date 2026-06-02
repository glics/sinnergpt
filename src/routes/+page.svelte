<script>
  // let mobileShowingMenu = false;

  //import ChatList from '$lib/chat-list/chat-list.svelte';
  import Chat from '$lib/chat/chat.svelte';
</script>

<svelte:head>
  <title>SinnerGPT</title>
</svelte:head>

<div class="flex max-h-svh h-dvh w-full flex-col bg-slate-900">
  <div class="flex flex-row px-4 py-4 text-white">
    <!-- TODO: menu button -->
    <h1 class="text-xl font-medium">SinnerGPT</h1>
  </div>

  <div class="flex h-full min-h-0 flex-row bg-slate-950 text-white">
    <!-- <div class="w-full max-w-70 border-r border-sky-900">
      <ChatList />
    </div> -->

    <div class="min-h-0 grow">
      <Chat />
    </div>
  </div>
</div>
