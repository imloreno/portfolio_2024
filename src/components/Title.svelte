<script lang="ts">
  export let className: string = "";
</script>

<h2 class={className}>
  <span>&lt;</span><slot /> <span>/&gt;</span>
</h2>

<style>
  h2 {
    font-size: 2.3em;
    color: var(--color-title);
    text-align: center;
  }
  span {
    color: var(--color-text);
  }
</style>
