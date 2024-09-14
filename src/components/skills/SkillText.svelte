<script lang="ts">
  import { Icons } from "@components/index";
  import { IconType } from "@entities/icons";
  import { SKILL_LABELS } from "@entities/skills";

  type Size = "default" | "small";

  export let skillText = "";
  export let type: string | IconType = IconType.home;
  export let size: Size = "default";
</script>

<div class="skill-stack {size}">
  <div class="icon">
    <Icons {type} />
  </div>
  <p class="subtitle-stack">{SKILL_LABELS[skillText] || "None"}</p>
</div>

<style>
  .skill-stack {
    display: flex;
    align-items: center;
    height: 3.5rem;
    width: 13rem;
    padding: 1rem;
    column-gap: 1rem;
    font-size: 1.2rem;
    color: var(--color-text);
    border: solid 0.2rem var(--color-text);
    border-radius: 0.5rem;
  }

  .skill-stack:hover {
    transform: scale(1.05);
  }

  .icon {
    display: flex;
    align-items: center;
    font-size: 2rem;
  }

  /* ----------------- VARIANTS ----------------- */
  .small {
    column-gap: 0.7rem;
    height: 2.9rem;
    width: fit-content !important;
    font-size: 1rem;
    justify-content: start;
  }
  .small .icon {
    font-size: 1.3rem;
  }
  .small .subtitle-stack {
    font-size: 1rem;
  }

  /* --------------------------- RESPONSIVE WEB --------------------------------- */
  @media (max-width: 950px) {
    .skill-stack {
      width: 11rem;
      font-size: 1rem;
      column-gap: 0.5rem;
    }
    .icon {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 550px) {
    .skill-stack {
      width: fit-content;
      border: thin solid var(--color-text);
      height: fit-content;
      padding: 0.5rem 1rem;
    }
  }
</style>
