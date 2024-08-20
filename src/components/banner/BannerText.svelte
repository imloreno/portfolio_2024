<script lang="ts">
  import { SkillType, type Skill } from "@entities/banner";
  import { SkillText } from ".";
  import { shuffle } from "lodash";

  export let align = "right";
  export let skills: Skill[];

  let skillsProcessed: Skill[] = skills;
  let getEven = false;

  setInterval(() => {
    const typesList: SkillType[] = shuffle(Object.values(SkillType));

    skillsProcessed = skills.map((skill, index) => {
      const even = getEven ? index % 2 === 0 : index % 2 !== 0;
      return {
        ...skill,
        type: even ? typesList[index] : SkillType.default,
        even: even,
      };
    });

    if (getEven) {
      getEven = false;
    } else {
      getEven = true;
    }
  }, 2300);
</script>

<div>
  {#each skillsProcessed as { text, type, even }}
    <SkillText {type} {align} {even}>{text}</SkillText>
  {/each}
</div>
