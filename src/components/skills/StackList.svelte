<script lang="ts">
  import type { Skill } from "@entities/skills";
  import SkillText from "./SkillText.svelte";

  export let skillList: Skill[] = [];
</script>

<div class="subtitle-stack">
  {#each skillList as skill (skill.name)}
    <SkillText skillText={skill.name} type={skill.name} />
  {/each}
</div>

<style>
  .subtitle-stack {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    font-size: 2rem;
    text-align: unset;
  }
</style>
