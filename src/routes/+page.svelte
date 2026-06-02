<script lang="ts">
  import { PUBLIC_APPVER } from '$env/static/public';
  import Chat from '$lib/chat/chat.svelte';
  import DotGrid from '$lib/dot-grid.svelte';
  //import ChatList from '$lib/chat-list/chat-list.svelte';

  // let mobileShowingMenu = false;
</script>

<svelte:head>
  <title>SinnerGPT</title>
  <link rel="icon" type="image/png" href="/tennis.png" />
  <meta name="color-scheme" content="dark" />
  <meta property="og:title" content="SinnerGPT" />
  <meta name="twitter:title" content="SinnerGPT" />
  <meta property="og:site_name" content="SinnerGPT" />
  <meta name="description" content="Cazzo, palle e racchetta in mano. Ora tennis io. ✨" />
  <meta property="og:description" content="Cazzo, palle e racchetta in mano. Ora tennis io. ✨" />
  <meta name="twitter:description" content="Cazzo, palle e racchetta in mano. Ora tennis io. ✨" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta property="og:url" content="https://sinnergpt.teto-engineer.ing" />
  <meta property="og:image" content="/tennis.png" />
  <meta name="twitter:image" content="/tennis.png" />
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
