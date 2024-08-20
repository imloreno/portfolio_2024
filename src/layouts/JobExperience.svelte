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
      <div class="">
        <CardBox {job} />
      </div>
    {/each}
    {#if projectList.length !== 0}
      <div class="card-box-container">
        <CardBox job={projectList[1]} />
        <DetailsSection />
        <GallerySection />
      </div>
    {/if}
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
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 4rem;
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
