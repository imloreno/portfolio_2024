<script lang="ts">
  import { Icon } from "svelte-icons-pack";
  import {
    BsArrowDown,
    BsDiagram3Fill,
    BsGit,
    BsGithub,
    BsLinkedin,
  } from "svelte-icons-pack/bs";
  import {
    RiArrowsExpandDiagonalLine,
    RiDesignTableFill,
    RiLogosJavaLine,
    RiLogosReactjsLine,
  } from "svelte-icons-pack/ri";
  import {
    FaSolidDownload,
    FaSolidBugs,
    FaSolidDiagramProject,
    FaSolidSheetPlastic,
    FaSolidRepeat,
    FaBrandsGithubAlt,
    FaSolidStore,
  } from "svelte-icons-pack/fa";
  import {
    IoHome,
    IoLogoBitbucket,
    IoLogoJavascript,
    IoLogoSass,
  } from "svelte-icons-pack/io";
  import { LuMailSearch } from "svelte-icons-pack/lu";
  import { OiHistory16, OiLinkExternal16 } from "svelte-icons-pack/oi";
  import { IconType } from "@entities/icons";
  import { AiTwotoneApi } from "svelte-icons-pack/ai";
  import { SiCss3 } from "svelte-icons-pack/si";
  import { AiOutlineDocker } from "svelte-icons-pack/ai";
  import { CgFigma } from "svelte-icons-pack/cg";
  import { SiHtml5 } from "svelte-icons-pack/si";
  import { SiAdobeillustrator } from "svelte-icons-pack/si";
  import { SiJirasoftware } from "svelte-icons-pack/si";
  import { SiMongodb } from "svelte-icons-pack/si";
  import { TrOutlineBrandMysql } from "svelte-icons-pack/tr";
  import { SiAdobephotoshop } from "svelte-icons-pack/si";
  import { SiPhp } from "svelte-icons-pack/si";
  import { BiLogoPostgresql } from "svelte-icons-pack/bi";
  import { TrOutlineBrandRedux } from "svelte-icons-pack/tr";
  import { BiSolidLayout } from "svelte-icons-pack/bi";
  import { SiSpring } from "svelte-icons-pack/si";
  import { SiSvelte } from "svelte-icons-pack/si";
  import { SiTypescript } from "svelte-icons-pack/si";
  import { BiLogoVisualStudio } from "svelte-icons-pack/bi";

  export let type: IconType | string = IconType.home;
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
{:else if type === IconType.details}
  <Icon src={RiArrowsExpandDiagonalLine} className={`${className} icon`} />
{:else if type === IconType.AGILE}
  <Icon src={FaSolidRepeat} className={`${className} icon`} />
{:else if type === IconType.API_REST}
  <Icon src={AiTwotoneApi} className={`${className} icon`} />
{:else if type === IconType.BITBUCKET}
  <Icon src={IoLogoBitbucket} className={`${className} icon`} />
{:else if type === IconType.CSS}
  <Icon src={SiCss3} className={`${className} icon`} />
{:else if type === IconType.DOCKER}
  <Icon src={AiOutlineDocker} className={`${className} icon`} />
{:else if type === IconType.FIGMA}
  <Icon src={CgFigma} className={`${className} icon`} />
{:else if type === IconType.GIT}
  <Icon src={BsGit} className={`${className} icon`} />
{:else if type === IconType.GITHUB}
  <Icon src={FaBrandsGithubAlt} className={`${className} icon`} />
{:else if type === IconType.HTML}
  <Icon src={SiHtml5} className={`${className} icon`} />
{:else if type === IconType.HTML5}
  <Icon src={SiHtml5} className={`${className} icon`} />
{:else if type === IconType.ILLUSTRATOR}
  <Icon src={SiAdobeillustrator} className={`${className} icon`} />
{:else if type === IconType.JAVA}
  <Icon src={RiLogosJavaLine} className={`${className} icon`} />
{:else if type === IconType.JAVASCRIPT}
  <Icon src={IoLogoJavascript} className={`${className} icon`} />
{:else if type === IconType.JIRA}
  <Icon src={SiJirasoftware} className={`${className} icon`} />
{:else if type === IconType.MICROSERVICES}
  <Icon src={BsDiagram3Fill} className={`${className} icon`} />
{:else if type === IconType.MONGODB}
  <Icon src={SiMongodb} className={`${className} icon`} />
{:else if type === IconType.MVC}
  <Icon src={RiDesignTableFill} className={`${className} icon`} />
{:else if type === IconType.MYSQL}
  <Icon src={TrOutlineBrandMysql} className={`${className} icon`} />
{:else if type === IconType.PHOTOSHOP}
  <Icon src={SiAdobephotoshop} className={`${className} icon`} />
{:else if type === IconType.PHP}
  <Icon src={SiPhp} className={`${className} icon`} />
{:else if type === IconType.POSTGRESQL}
  <Icon src={BiLogoPostgresql} className={`${className} icon`} />
{:else if type === IconType.REACT}
  <Icon src={RiLogosReactjsLine} className={`${className} icon`} />
{:else if type === IconType.REDUX}
  <Icon src={TrOutlineBrandRedux} className={`${className} icon`} />
{:else if type === IconType.RESPONSIVE}
  <Icon src={BiSolidLayout} className={`${className} icon`} />
{:else if type === IconType.SASS}
  <Icon src={IoLogoSass} className={`${className} icon`} />
{:else if type === IconType.SPRING_BOOT}
  <Icon src={SiSpring} className={`${className} icon`} />
{:else if type === IconType.SVELTE}
  <Icon src={SiSvelte} className={`${className} icon`} />
{:else if type === IconType.TYPESCRIPT}
  <Icon src={SiTypescript} className={`${className} icon`} />
{:else if type === IconType.VS_CODE}
  <Icon src={BiLogoVisualStudio} className={`${className} icon`} />
{:else if type === IconType.ZUSTAND}
  <Icon src={FaSolidStore} className={`${className} icon`} />
{:else}
  <Icon src={IoHome} className={`${className} icon`} />
{/if}
