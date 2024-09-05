<script lang="ts">
  import Icons from "@components/Icons.svelte";
  import { IconType } from "@entities/icons";

  export let name = "";
  export let external = false;
  export let download = false;
  export let key;
  export let icon: IconType;
  export let className = "";
  export let responsive = false;
</script>

<li class={className}>
  {#if external}
    <a href={key} class="item" target="_blank">
      <Icons type={icon} />
      {name}
      <Icons
        type={IconType.external}
        className={`${responsive && "responsive-display"}`}
      />
    </a>
  {:else if download}
    <a href={key} class="item">
      <Icons type={icon} />
      {name}
      <Icons
        type={IconType.download}
        className={`${responsive && "responsive-display"}`}
      />
    </a>
  {:else}
    <a href={key} class="item">
      <Icons type={icon} />
      {name}
    </a>
  {/if}
</li>

<style>
  li a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: clamp(0.9rem, 1.2vw, 1.3rem);
  }
  .item {
    white-space: nowrap;
  }

  /* ------------------------ RESPONSIVE ------------------------ */
  @media (max-width: 1200px) {
    .item :global(.responsive-display) {
      display: none;
    }
  }

  @media (max-width: 950px) {
    li a {
      font-size: clamp(1.1rem, 2vw, 2.3rem);
      padding: 1rem 2rem;
    }
  }
</style>
