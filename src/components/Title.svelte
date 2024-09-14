<script lang="ts">
  export let className: string = "";
  export let type = "title";
</script>

<h2 class={`${className} ${type}`}>
  <slot />
</h2>

<style>
  h2 {
    position: relative;
    font-size: clamp(2rem, 2vw, 2.5rem);
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

  /* Variants */
  .subtitle {
    font-size: 1.5em;
    text-align: unset;
  }
  .subtitle::before,
  .subtitle::after {
    content: "";
  }
</style>
