<script lang="ts">
  import { PUBLIC_APPVER } from '$env/static/public';
  // let mobileShowingMenu = false;

  //import ChatList from '$lib/chat-list/chat-list.svelte';
  import Chat from '$lib/chat/chat.svelte';
  import DotGrid from '$lib/dot-grid.svelte';

  //version number from .env
</script>

<svelte:head>
  <title>SinnerGPT</title>
  <meta name="color-scheme" content="dark" />
  <meta property="og:title" content="SinnerGPT" />
  <meta property="og:description" content="Cazzo, palle e racchetta in mano. Ora tennis io. ✨" />
</svelte:head>

<div class="flex h-dvh max-h-svh w-full flex-col bg-sinner-900">
  <DotGrid />
  <div class="z-10 flex items-center justify-between bg-sinner-900 px-4 py-4 text-white">
    <h1 class="text-xl font-medium">SinnerGPT</h1>
    <div class="cursor-default font-mono text-sm text-sinner-300/30 select-none">
      v{PUBLIC_APPVER}
    </div>
  </div>

  <div class="h-full min-h-0 bg-sinner-950 text-white">
    <!-- TODO: flex flex-row for sidebar + main
    <div class="w-full max-w-70 border-r border-sinner-900">
      <ChatList />
    </div> -->
    <Chat class="h-full min-h-0" />
  </div>
</div>
