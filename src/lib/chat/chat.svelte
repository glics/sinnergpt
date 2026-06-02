<script lang="ts">
  import { tick } from 'svelte';
  import ChatItem from './chat-item.svelte';
  import SendBtnIcon from './send-btn-icon.svelte';
  import { getRandomResponse, type MessageItem } from './utils';

  let messages = $state<MessageItem[]>([
    {
      message: 'Ask me anything!',
      sender: 'system'
    }
  ]);
  let inputText = $state('');

  let waiting = $state(false);

  let { class: className = '' } = $props();
  let scrollList: HTMLDivElement;

  function sendMessage() {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const whichText = getRandomResponse();

    let newItem: MessageItem = {
      message: whichText,
      sender: 'system',
      pending: true
    };

    messages.push(
      {
        message: trimmed,
        sender: 'user'
      },
      newItem
    );

    inputText = '';
    waiting = true;

    // Scroll after Svelte has flushed the new message to the DOM
    tick().then(() => {
      scrollToBottom();
    });

    setTimeout(async () => {
      newItem.pending = false;
      messages.pop();
      messages.push(newItem);
      waiting = false;
      await tick();
      scrollToBottom();
    }, 2000);
  }

  function scrollToBottom() {
    scrollList.scrollTo({
      top: scrollList.scrollHeight,
      behavior: 'smooth'
    });
  }
</script>

<div class="flex h-full min-h-0 flex-col {className}">
  <div
    bind:this={scrollList}
    class="scroll-fade relative h-full min-h-0 grow space-y-2 overflow-y-scroll px-8 pt-8 lg:px-40"
  >
    {#each messages as message, index (index)}
      <ChatItem messageItem={message}></ChatItem>
    {/each}
    <div class="h-5 w-full">
      <!-- 20px padding for the fade-out effect -->
    </div>
  </div>

  <form class="relative px-8 py-4 lg:px-40" onsubmit={sendMessage}>
    <input
      bind:value={inputText}
      type="text"
      class="h-full w-full rounded-full border border-sinner-800 bg-sinner-900 px-8 py-4 text-white transition-colors outline-none"
      placeholder="Ask something..."
    />
    {#if inputText.trim() !== ''}
      <button
        type="submit"
        disabled={waiting}
        class="absolute top-0 right-0 bottom-0 my-4 mr-8 cursor-pointer rounded-full px-6 text-white transition-colors hover:bg-sinner-800 disabled:pointer-events-none disabled:opacity-40 lg:mr-40"
      >
        <SendBtnIcon />
      </button>
    {/if}
  </form>
</div>

<style>
  /* 20px fade to transparent */
  .scroll-fade {
    mask-image: linear-gradient(to bottom, black calc(100% - 20px), transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 20px), transparent 100%);
  }
</style>
