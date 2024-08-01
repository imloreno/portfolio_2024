<script lang="ts">
  import Icons from "@components/Icons.svelte";
  import { IconType } from "@entities/icons";

  export let external = false;
  export let download = false;
  export let key;
  export let icon: IconType;
  export let className = "";
</script>

<li class={className}>
  {#if external}
    <a href={key} target="_blank">
      <Icons type={icon} />
      <slot />
      <Icons type={IconType.external} />
    </a>
  {:else if download}
    <a href={key}>
      <Icons type={icon} />
      <slot />
      <Icons type={IconType.download} />
    </a>
  {:else}
    <a href={key}>
      <Icons type={icon} />
      <slot />
    </a>
  {/if}
</li>

<style>
  li a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
