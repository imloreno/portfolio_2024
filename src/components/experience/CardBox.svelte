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
    max-width: 30rem;
  }
  .card-container:hover .profile-img {
    filter: grayscale(1) contrast(1.7) sepia(0.6) saturate(0.5);
  }
  .profile-img {
    margin: 0.5rem;
    position: absolute;
    width: 90%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: filter 0.5s;
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
    font-size: clamp(0.5rem, 1.3vw, 1.3rem);
  }
  .info-company {
    position: absolute;
    top: 76%;
    left: 15%;
  }
  .info-company .company {
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    text-transform: uppercase;
  }
  .info-company .type {
    font-size: clamp(0.8rem, 1.3vw, 1.3rem);
    margin-top: -2%;
    opacity: 0.6;
  }
  .info-timerange {
    position: absolute;
    font-size: clamp(0.5rem, 1vw, 1rem);
    padding: 0.3rem 0.5rem;
    bottom: 4.5%;
    left: 14%;
    background-color: var(--color-text2);
    box-shadow: 0 0.2rem 0.5rem var(--color-text2);
    color: var(--color-text);
  }
</style>
