<script lang="ts">
  import { onMount } from "svelte";
  import {
    CardBox,
    DetailsSection,
    GallerySection,
    Title,
  } from "@components/index";
  import type { JobSummary } from "@entities/experience";
  import { PROJECTS_URL } from "src/constants/urls";

  let projectList: JobSummary[] = [];
  let projectActive = "";

  // Set active project
  const onSetActiveProject = (event: CustomEvent<any>) => {
    if (projectActive === event.detail.id) {
      projectActive = "";
      return;
    }
    projectActive = event.detail.id;
  };

  onMount(async () => {
    fetch(PROJECTS_URL)
      .then((response) => response.json())
      .then((data) => {
        if (!data.data) return;
        projectList = data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  });
</script>

<section>
  <Title>Job Experience</Title>
  <div class="job-experience-container">
    {#each projectList as job (job.id)}
      <div class={projectActive === job.id ? "card-box-container" : ""}>
        <CardBox
          {job}
          on:setActiveProject={onSetActiveProject}
          isActive={projectActive === job.id}
        />
        {#if projectActive === job.id}
          <DetailsSection />
          <GallerySection />
        {/if}
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    padding-top: 15rem;
    margin: 0 auto;
    max-width: 100rem;
    background-color: var(--color-bg2);
  }
  .job-experience-container {
    display: grid;
    width: fit-content;
    max-width: 90rem;
    margin: auto;
    margin-top: 4rem;
    gap: 2rem;
    grid-template-columns: repeat(3, auto);
    padding: 2rem;
  }

  /* ------------------------ CARD BOX ------------------------ */
  .card-box-container {
    position: relative;
    grid-column: span 3;
    display: grid;
    gap: 3rem 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
