<script lang="ts">
  import { Icon } from "svelte-icons-pack";
  import { BsArrowDown, BsGithub, BsLinkedin } from "svelte-icons-pack/bs";
  import { HiSolidHome } from "svelte-icons-pack/hi";
  import { FaSolidDownload, FaSolidBugs } from "svelte-icons-pack/fa";
  import { OiHistory16 } from "svelte-icons-pack/oi";
  import { IconType } from "@entities/icons";

  export let type: IconType = IconType.home;
  export let className: string = "";
</script>

{#if type === IconType.home}
  <Icon src={HiSolidHome} className={`${className} icon`} />
{:else if type === IconType.github}
  <Icon src={BsGithub} className={`${className} icon`} />
{:else if type === IconType.linkedin}
  <Icon src={BsLinkedin} className={`${className} icon`} />
{:else if type === IconType.download}
  <Icon src={FaSolidDownload} className={`${className} icon`} />
{:else if type === IconType.arrowDown}
  <Icon src={BsArrowDown} className={`${className} icon`} />
{:else if type === IconType.bug}
  <Icon src={FaSolidBugs} className={`${className} icon`} />
{:else if type === IconType.history}
  <Icon src={OiHistory16} className={`${className} icon`} />
{:else}
  <Icon src={HiSolidHome} className={`${className} icon`} />
{/if}
