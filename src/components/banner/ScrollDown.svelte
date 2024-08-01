<script type="ts">
  import Icons from "../Icons.svelte";
  import { IconType } from "@entities/icons";
  export let className = "scroll-down";
</script>

<div class="scroll-down {className}">
  <div class="scroll-icon">
    <Icons className="scroll-icon-svg" type={IconType.arrowDown} />
  </div>
  <svg viewBox="0 0 1440 148" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0L685 148L1054 109.795L1440 0H0Z" />
  </svg>
</div>

<style>
  .scroll-down {
    position: relative;
    grid-column: span 3;
    background-color: var(--color-bg2);
  }
  .scroll-down .scroll-icon {
    position: absolute;
    color: var(--color-text);
    left: 50%;
    transform: translateX(-50%);
    padding: 0 2rem 1rem 2rem;
    font-size: 3rem;
    cursor: pointer;
    transition: transform 0.3s;
  }
  .scroll-down .scroll-icon :global(.scroll-icon-svg) {
    animation: to_bottom 0.5s infinite alternate-reverse;
  }
  .scroll-down .scroll-icon:hover {
    transform: translate(-50%, 1rem);
  }
  .scroll-down .scroll-icon:hover :global(.scroll-icon-svg) {
    animation-play-state: paused;
    fill: var(--color-title);
  }

  .scroll-down svg {
    width: 100%;
  }
  .scroll-down svg path {
    fill: var(--color-bg);
  }
</style>
