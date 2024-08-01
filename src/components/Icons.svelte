<script lang="ts">
  import { Icon } from "svelte-icons-pack";
  import { BsArrowDown, BsGithub, BsLinkedin } from "svelte-icons-pack/bs";
  import {
    FaSolidDownload,
    FaSolidBugs,
    FaSolidDiagramProject,
    FaSolidSheetPlastic,
  } from "svelte-icons-pack/fa";
  import { IoHome } from "svelte-icons-pack/io";
  import { LuMailSearch } from "svelte-icons-pack/lu";
  import { OiHistory16, OiLinkExternal16 } from "svelte-icons-pack/oi";
  import { IconType } from "@entities/icons";

  export let type: IconType = IconType.home;
  export let className: string = "";
</script>

{#if type === IconType.home}
  <Icon src={IoHome} className={`${className} icon`} />
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
{:else if type === IconType.projects}
  <Icon src={FaSolidDiagramProject} className={`${className} icon`} />
{:else if type === IconType.external}
  <Icon src={OiLinkExternal16} className={`${className} icon`} />
{:else if type === IconType.mail}
  <Icon src={LuMailSearch} className={`${className} icon`} />
{:else if type === IconType.sheet}
  <Icon src={FaSolidSheetPlastic} className={`${className} icon`} />
{:else}
  <Icon src={IoHome} className={`${className} icon`} />
{/if}
