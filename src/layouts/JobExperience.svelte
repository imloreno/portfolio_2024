<script lang="ts">
  import { onMount } from "svelte";
  import moment from "moment";
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
        data.data.sort(
          (data1: JobSummary, data2: JobSummary) =>
            moment.utc(data2.from).unix() - moment.utc(data1.from).unix()
        );
      })
      .catch((error) => {
        console.log(error);
      });
  });
</script>

<section id="job-experience">
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
          <DetailsSection
            projectInfo={job}
            isActive={projectActive === job.id}
            on:setActiveProject={onSetActiveProject}
          />
          <GallerySection projectId={job.id} />
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

  /* ------------------------ RESPONSIVE DESIGN ------------------------ */
  @media (max-width: 1350px) {
    .job-experience-container {
      grid-template-columns: repeat(2, auto);
      gap: 1rem;
      padding: 1rem;
    }
    .card-box-container {
      display: block;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      padding: 2rem;
      background-color: var(--color-bg2);
      z-index: 200;
      overflow-y: auto;
    }
  }

  @media (max-width: 950px) {
    section {
      padding-top: 7rem;
    }
  }

  @media (max-width: 750px) {
    .job-experience-container {
      grid-template-columns: auto;
      padding: 0;
    }
    .card-box-container {
      padding: 0rem;
    }
  }
</style>
