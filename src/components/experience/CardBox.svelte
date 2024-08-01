<script lang="ts">
  import type { JobSummary } from "@entities/experience";
  import CardBoxSvg from "./CardBoxSvg.svelte";

  export let job: JobSummary;
  const { company, position, jobType, date, img } = job;
</script>

<article class="card-container">
  <img class="profile-img" src={img} alt={company} />
  <CardBoxSvg />
  <div class="info">
    <p class="info-position">Frontend developer</p>
    <div class="info-company">
      <p class="company">Nice Actimize</p>
      <p class="type">Full-time</p>
    </div>
    <p class="info-timerange">Jun 22 to Jun 24</p>
  </div>
</article>

<style>
  .card-container {
    position: relative;
    width: 30rem;
    /* aspect-ratio: 96 / 117; */
  }
  .profile-img {
    position: absolute;
    width: 90%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 0.5rem;
    overflow: hidden;
    z-index: -1;
  }
  .info {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    color: var(--color-text2);
  }
  .info-position {
    position: absolute;
    top: 14.5%;
    left: 25%;
    text-transform: uppercase;
  }
  .info-company {
    position: absolute;
    top: 76%;
    left: 15%;
  }
  .info-company .company {
    font-size: 2.5rem;
    text-transform: uppercase;
  }
  .info-company .type {
    font-size: 1.5rem;
    opacity: 0.6;
  }
  .info-timerange {
    position: absolute;
    font-size: 1.3rem;
    bottom: 4%;
    left: 15%;
    opacity: 0.7;
  }
</style>
