<script lang="ts">
  import type { Skill } from "@entities/banner";
  import { SkillText } from ".";

  export let align = "right";
  export let skills: Skill[];
</script>

<div>
  {#each skills as { text, type }}
    <SkillText {type} {align}>{text}</SkillText>
  {/each}
</div>
