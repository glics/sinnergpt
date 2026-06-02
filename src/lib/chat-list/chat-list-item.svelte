<script lang="ts">
  interface Props {
    text: string;
  }

  let { text }: Props = $props();
</script>

<div class="truncate rounded-md border bg-red-500 p-2 text-ellipsis">
  {text}
</div>
