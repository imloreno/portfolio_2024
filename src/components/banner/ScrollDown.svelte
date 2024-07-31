<script type="ts">
  export let className = "scroll-down";
</script>

<div class="scroll-down {className}">
  <svg viewBox="0 0 1440 148" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0L685 148L1054 109.795L1440 0H0Z" />
  </svg>
</div>

<style>
  .scroll-down {
    grid-area: scroll-down;
    background-color: var(--color-bg2);
  }
  .scroll-down svg {
    width: 100%;
  }
  .scroll-down svg path {
    fill: var(--color-bg);
  }
</style>
