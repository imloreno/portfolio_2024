<script lang="ts">
  import { SkillType } from "@entities/banner";

  export let type: SkillType = SkillType.default;
  export let align = "right";
  export let even = true;
</script>

<div class={`text ${even && "even"} ${type}  ${align}`}>
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
    animation: skillText calc(2.5s - 0.2s);
    animation-delay: 200ms;
    transition-delay: 200ms;
  }
  .cream {
    background-color: var(--color-primary);
    color: var(--color-text2);
    animation: skillText calc(2.5s - 0.5s);
    animation-delay: 0.5s;
    transition-delay: 0.5s;
  }
  .chocolate {
    background-color: var(--color-bg2);
    color: var(--color-text);
    animation: skillText calc(2.5s - 0.8s);
    animation-delay: 0.8s;
    transition-delay: 0.8s;
  }
  .milk {
    background-color: var(--color-tertiary);
    color: var(--color-text2);
    animation: skillText calc(2.5s - 1s);
    animation-delay: 1s;
    transition-delay: 1s;
  }
  .grass {
    background-color: var(--color-success);
    color: var(--color-text);
    animation: skillText calc(2.5s - 1s);
    animation-delay: 1.3s;
    transition-delay: 1.3s;
  }
  .grapes {
    background-color: var(--color-secondary);
    color: var(--color-text2);
    animation: skillText calc(2.5s - 1.2s);
    animation-delay: 1.2s;
    transition-delay: 1.2s;
  }
  .honey {
    color: var(--color-text2);
    background-color: var(--color-bg4);
    animation: skillText calc(2.5s - 0.6s);
    animation-delay: 0.6s;
    transition-delay: 0.6s;
  }
</style>
