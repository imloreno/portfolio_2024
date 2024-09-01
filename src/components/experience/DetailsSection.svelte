<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import moment from "moment";
  import { isEmpty } from "lodash";
  import { SkillText, Button } from "@components/index";
  import { PROJECT_DETAILS } from "src/constants/urls";
  import type { JobSummary, JobDetails } from "@entities/experience";
  import { IconType } from "@entities/icons";

  export let projectInfo: JobSummary;
  let projectDetails: JobDetails = {};
  let description = ["Loading..."];

  // Dispatch event to parent component
  // Close details section when clicked close button
  const dispatch = createEventDispatcher();
  const closeButton = () => {
    dispatch("setActiveProject", {
      id: "", // Empty string to close the details section
    });
  };

  onMount(async () => {
    if (!projectInfo) return;
    fetch(PROJECT_DETAILS.replace(":id", projectInfo.id))
      .then((response) => response.json())
      .then((data) => {
        if (!data.data) return;
        projectDetails = data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // Get date in format MM 22
  const fromDate = moment.utc(projectInfo.from).format("MMM YYYY");
  const toDate = moment.utc(projectInfo.to).format("MMM YYYY");

  $: if (!isEmpty(projectDetails)) {
    description = (projectDetails.description || "").split("<br />");
  }
</script>

<div class="container">
  <div class="content">
    <div class="header">
      <div class="title-section">
        <p class="job-period">{fromDate} - {toDate}</p>
        <h2 class="job-title">JOB DETAILS</h2>
        <p class="job-type">{projectInfo.type} | {projectInfo.position}</p>
      </div>
      <div class="actions-section">
        {#if projectDetails.link}
          <Button icon={IconType.world} external href={projectDetails.link}
            >Web</Button
          >
        {/if}
        {#if projectDetails.github}
          <Button icon={IconType.github} external href={projectDetails.github}
            >GitHub</Button
          >
        {/if}
        <Button icon={IconType.close} type="red" onClick={closeButton} />
      </div>
    </div>

    <div class="description">
      <h3 class="description-title">Description:</h3>
      {#each description as desc}
        <p class="job-details-p">{desc}</p>
      {/each}
      <h3 class="skill-stack-title">Skills:</h3>
      <div class="skill-stack">
        {#each projectInfo.skills as skill}
          <SkillText skillText={skill.name} type={skill.name} size="small" />
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    overflow: hidden;
    grid-column: span 2;
    display: flex;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    border: 0.4rem solid var(--color-primary);
  }

  .content::after {
    content: "";
    position: absolute;
    width: 10rem;
    height: 10rem;
    bottom: -6rem;
    right: -6rem;
    transform: rotate(45deg);
    background-color: var(--color-bg2);
    border: 0.4rem solid var(--color-primary);
    z-index: 10;
  }

  /* ------------------------ Content styling ------------------------ */
  .header {
    padding: 2rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .job-period {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text);
  }
  .job-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-secondary);
  }
  .job-type {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text);
  }
  .actions-section {
    display: flex;
    gap: 1rem;
    height: fit-content;
  }
  .description {
    padding: 2rem;
    padding-top: 0;
  }
  .description-title,
  .skill-stack-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-secondary);
    margin-bottom: 0.5rem;
  }
  .job-details-p {
    position: relative;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    color: var(--color-text);
  }
  .job-details-p::before {
    position: absolute;
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: var(--color-secondary);
  }
  .skill-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
