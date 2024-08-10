<script lang="ts">
  export let className: string = "";
</script>

<h2 class={className}>
  <slot />
</h2>

<style>
  h2 {
    position: relative;
    font-size: 2.3em;
    color: var(--color-title);
    text-align: center;
  }

  h2::before {
    content: "<";
    color: var(--color-text);
  }
  h2::after {
    content: " />";
    color: var(--color-text);
  }
</style>
