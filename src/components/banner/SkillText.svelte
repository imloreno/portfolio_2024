<script>
  export let type = "default";
  export let align = "right";
</script>

<div class={`text ${type} ${align}`} style="font-size: 4rem;">
  <slot />
</div>

<style>
  .text {
    padding: 0.5rem 2rem;
    color: var(--color-text);
    white-space: nowrap;
  }
  .text.right {
    text-align: right;
  }
  .text.left {
    text-align: left;
  }

  .brown {
    color: var(--color-primary);
  }
  .cream {
    background-color: var(--color-primary);
    color: var(--color-text2);
  }
  .chocolate {
    background-color: var(--color-bg2);
    color: var(--color-text);
  }
  .milk {
    background-color: var(--color-tertiary);
    color: var(--color-text2);
  }
</style>
