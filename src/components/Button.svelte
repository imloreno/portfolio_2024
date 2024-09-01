<script lang="ts">
  import { Icons } from "@components/index";
  import type { IconType } from "@entities/icons";

  export let icon: IconType;
  export let type: string = "default";
  export let external: boolean = false;
  export let href: string = "#";
  export let onClick = () => {};
</script>

{#if external}
  <a class="button {type}" {href} target="_blank" rel="noopener noreferrer">
    {#if icon}
      <div class="icon">
        <Icons type={icon} />
      </div>
    {/if}
    <slot />
  </a>
{:else}
  <button class="button {type}" on:click={onClick}>
    {#if icon}
      <div class="icon">
        <Icons type={icon} />
      </div>
    {/if}
    <slot />
  </button>
{/if}

<style>
  .button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    height: fit-content;
    font-size: 1rem;
    border-radius: 0.5rem;
    cursor: unset;
    font-weight: 600;
    background-color: transparent;
  }
  .button:hover {
    transform: scale(1.05);
    text-decoration: none;
  }
  .icon {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
  }

  /* ----------------- Button type ----------------- */
  .default {
    color: var(--color-text);
    border: 0.2rem solid var(--color-text);
  }

  .red {
    color: var(--color-warning);
    border: 0.2rem solid var(--color-warning);
  }
</style>
