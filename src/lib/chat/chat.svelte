<script lang="ts">
  import ChatItem from './chat-item.svelte';
  import SendBtnIcon from './send-btn-icon.svelte';
  import type { MessageItem } from './utils';

  const pickOneOfThese = [
    'Tennis',
    'Tennis',
    'Tennis',
    'Tennis',
    'Racchetta',
    'Racchetta',
    'Racchetta',
    'Pallina',
    'Pallina',
    'Ora tennis io',
    'Sicuramente non il padel'
  ];

  let messages = $state<MessageItem[]>([
    {
      message: 'Ask me anything!',
      sender: 'system'
    }
  ]);
  let inputText = $state('');
  let inputElem: HTMLInputElement;
  let inputDisabled = $state(false);

  let scrollList: HTMLDivElement;

  function sendMessage() {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const whichText = pickOneOfThese[Math.round(Math.random() * pickOneOfThese.length)];

    let newItem: MessageItem = {
      message: whichText,
      sender: 'system',
      pending: true
    };

    messages = [
      ...messages,
      {
        message: trimmed,
        sender: 'user'
      },
      newItem
    ];

    inputText = '';
    inputDisabled = true;
    inputElem.placeholder = 'Thinking...';

    // Call outside event loop to scroll after rendering new msg
    setTimeout(() => {
      scrollList.scrollTo({
        top: scrollList.scrollHeight,
        behavior: 'smooth'
      });
    }, 0);

    setTimeout(() => {
      newItem.pending = false;
      messages = [...messages.slice(0, messages.length - 1), newItem];
      inputElem.placeholder = 'Ask something...';
      inputDisabled = false;
      inputElem.focus();
    }, 2000);
  }
</script>

<div class="flex h-full min-h-0 flex-col">
  <div
    bind:this={scrollList}
    class="relative h-full min-h-0 grow space-y-2 overflow-y-scroll px-8 pt-8 lg:px-40"
  >
    {#each messages as message, index (index)}
      <ChatItem messageItem={message}></ChatItem>
    {/each}
    <div
      class="sticky right-0 bottom-0 left-0 h-8 bg-linear-to-b from-transparent to-slate-950"
    ></div>
  </div>

  <form class="relative px-8 py-4 lg:px-40" onsubmit={sendMessage}>
    <input
      bind:this={inputElem}
      bind:value={inputText}
      disabled={inputDisabled}
      type="text"
      class="h-full w-full rounded-full border border-slate-800 px-8 py-4 text-white transition-colors outline-none {inputDisabled
        ? 'bg-slate-800'
        : 'bg-slate-900'}"
      placeholder="Ask something..."
    />
    {#if inputText.trim() !== ''}
      <button
        type="submit"
        class="absolute top-0 right-0 bottom-0 my-4 mr-8 cursor-pointer rounded-full px-6 text-white transition-colors hover:bg-slate-800 lg:mr-40"
      >
        <SendBtnIcon />
      </button>
    {/if}
  </form>
</div>
