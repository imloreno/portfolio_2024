<script lang="ts">
  import { onMount } from "svelte";
  import { isEmpty, sortBy } from "lodash";
  import { StackList, Title } from "@components/index";
  import type { Skill } from "@entities/skills";
  import { SKILLS_URL } from "src/constants/urls";
  import { skillsProcessor } from "@components/skills/helpers";

  type SkillsProcessed = {
    [key: string]: {
      [key: string]: Skill[];
    };
  };

  // Sorting the skills based on the category and years
  const categorySorting = [
    "FRONTEND",
    "BACKEND",
    "DESIGN",
    "DEVOPS",
    "METHODOLOGIES",
    "REPOSITORY",
    "TOOLS",
  ];

  // Variable to store the list of skills
  let skillList: Skill[] = [];

  // Variable to store the processed skills
  let skillsProcessed: SkillsProcessed = {};

  onMount(async () => {
    // Fetching the skills from the API
    fetch(SKILLS_URL)
      .then((response) => response.json())
      .then((data) => {
        if (!data.data) return;
        skillList = data.data;
      })
      .catch((error) => {
        skillList = [];
        console.log(error);
      });
  });

  // Processing the skills
  $: skillsProcessed = skillsProcessor(skillList);
</script>

<section id="skills">
  <Title>Skill Set</Title>
  <div class="skills-container">
    {#if Object.keys(skillsProcessed).length !== 0}
      {#each categorySorting as category}
        {#if !isEmpty(skillsProcessed[category])}
          <div class="category">
            <h3 class="subtitle-stack {category}-text">{category}</h3>
            <div class="skills">
              {#each sortBy(Object.keys(skillsProcessed[category])) as key}
                <div class="skills-section">
                  <h4 class="years-subtitle {category}-text">{key} years</h4>
                  <StackList skillList={skillsProcessed[category][key] || []} />
                </div>
              {/each}
            </div>
          </div>
        {/if}
      {/each}
    {/if}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 12rem 2rem;
    max-width: 80rem;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5rem 2rem;
    margin-top: 10rem;
  }

  .skills {
    display: flex;
    column-gap: 2rem;
  }

  .skills-section {
    border: 0.3rem solid var(--color-primary);
    border-radius: 0.5rem;
    padding: 1.5rem;
    height: fit-content;
    margin-right: auto;
  }

  .subtitle-stack {
    color: var(--color-title);
    margin-bottom: 1.5rem;
    font-size: clamp(1.3rem, 2vw, 1.5rem);
  }

  .years-subtitle {
    color: var(--color-title);
    margin-bottom: 1.3rem;
  }

  /* ------------- Color as per category ------------- */

  .FRONTEND-text {
    color: var(--color-title);
  }
  .BACKEND-text {
    color: var(--color-success);
  }
  .DEVOPS-text {
    color: var(--color-text5);
  }
  .DESIGN-text {
    color: var(--color-warning);
  }
  .METHODOLOGIES-text {
    color: var(--color-secondary);
  }
  .REPOSITORY-text {
    color: var(--color-text3);
  }
  .TOOLS-text {
    color: var(--color-text4);
  }

  /* --------------------------- RESPONSIVE WEB --------------------------------- */
  @media (max-width: 950px) {
    section {
      width: 100%;
      padding: 8rem 2rem;
    }
    .skills {
      gap: 1rem;
      flex-wrap: wrap;
    }
    .skills-section {
      margin: 0;
    }
    .skills-container {
      justify-content: start;
      margin-top: 4rem;
      gap: 3rem 2rem;
    }
    .skills-section {
      height: auto;
      width: auto;
    }
  }

  @media (max-width: 750px) {
    .skills {
      flex-direction: column;
    }
    .skills-section {
      padding: 1rem;
      border: thin solid var(--color-text);
    }
    .years-subtitle {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 550px) {
    section {
      padding: 8rem 1rem;
    }
  }
</style>
