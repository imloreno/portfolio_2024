<script lang="ts">
  import { SkillType } from "@entities/banner";

  export let type: SkillType = SkillType.default;
  export let align = "right";
  export let even = true;
  export let delay = 0;
</script>

<div
  class={`text ${even && "even"} ${type}  ${align}`}
  style={even ? `transition-delay: ${delay}s; animation-delay: ${delay}` : ""}
>
  <slot />
</div>

<style>
  .text {
    padding: 0.5rem 2rem;
    color: var(--color-text);
    white-space: nowrap;
    font-size: clamp(1.5rem, 3vw, 4rem);
  }
  .text.right {
    text-align: right;
  }
  .text.left {
    text-align: left;
  }

  .even {
    color: var(--color-primary);
    /* transition: all 0.2s; */
  }
  .strawberry {
    color: var(--color-text);
    background-color: var(--color-warning);
    animation: skillText 2.5s;
  }
  .cream {
    background-color: var(--color-primary);
    color: var(--color-text2);
    animation: skillText 2.5s;
  }
  .chocolate {
    background-color: var(--color-bg2);
    color: var(--color-text);
    animation: skillText 2.5s;
  }
  .milk {
    background-color: var(--color-tertiary);
    color: var(--color-text2);
    animation: skillText 2.5s;
  }
  .grass {
    background-color: var(--color-success);
    color: var(--color-text);
    animation: skillText 2.5s;
  }
  .grapes {
    background-color: var(--color-secondary);
    color: var(--color-text2);
    animation: skillText 2.5s;
  }
  .honey {
    color: var(--color-text2);
    background-color: var(--color-bg4);
    animation: skillText 2.5s;
  }
</style>
