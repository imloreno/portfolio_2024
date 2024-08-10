<script lang="ts">
  import { SkillType, type Skill } from "@entities/banner";
  import { SkillText } from ".";
  import { random, shuffle } from "lodash";

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
        delay: random(0, 1, true),
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
  {#each skillsProcessed as { text, type, even, delay }}
    <SkillText {type} {align} {even} {delay}>{text}</SkillText>
  {/each}
</div>
