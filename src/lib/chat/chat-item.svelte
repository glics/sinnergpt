<script lang="ts">
  import type { MessageItem } from './utils';

  interface Props {
    messageItem: MessageItem;
  }

  let { messageItem }: Props = $props();
</script>

<div class="flex flex-row {messageItem.sender == 'system' ? 'justify-start' : 'justify-end'}">
  <div
    class="max-w-[80%] rounded-2xl p-4 {messageItem.sender == 'system'
      ? 'rounded-bl-none  bg-sky-900'
      : 'rounded-br-none  bg-sky-800'}
      "
  >
    {#if messageItem.pending}
      <div class="flex animate-pulse flex-row space-x-1">
        {#each [1, 2, 3] as i (i)}
          <div class="block h-2 w-2 rounded-full bg-neutral-200"></div>
        {/each}
      </div>
    {:else}
      {messageItem.message}
    {/if}
  </div>
</div>
