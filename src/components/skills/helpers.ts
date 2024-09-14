import type { Skill } from "@entities/skills";

type SkillsProcessed = {
   [key: string]: {
      [key: string]: Skill[];
   };
};

export const skillsProcessor = (skillList: Skill[]): SkillsProcessed => {
   // Variable to store the processed skills
   const skillsProcessed: SkillsProcessed = {};

   // Processing the skills
   skillList.forEach((skill: Skill) => {

      const { category, yearsOfExperience } = skill;

      // Defining the secondary key
      const secondaryKey =
         yearsOfExperience <= 2
            ? "0 - 2"
            : yearsOfExperience <= 3
               ? "2 - 3"
               : "3 - 5";
      const mainKey = skillsProcessed[category];

      // Ensuring that the category exists
      if (!mainKey) {
         skillsProcessed[category] = {
            [secondaryKey]: [skill],
         };
      } else {
         if (!mainKey[secondaryKey]) {
            mainKey[secondaryKey] = [skill];
         } else {
            mainKey[secondaryKey].push(skill);
         }
      }
   })

   return skillsProcessed;
}