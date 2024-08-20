<script lang="ts">
  import moment from "moment";
  import type { JobSummary } from "@entities/experience";
  import CardBoxSvg from "./CardBoxSvg.svelte";
  import { PROJECT_PROFILE } from "src/constants/urls";

  export let job: JobSummary;
  const { name, position, type, from, to, id } = job;

  // Get date in format MM 22
  const fromDate = moment.utc(from).format("MMM YY");
  const toDate = moment.utc(to).format("MMM YY");
</script>

<article class="card-container">
  <img
    class="profile-img"
    src={PROJECT_PROFILE.replace(":id", id)}
    alt={name}
  />
  <CardBoxSvg />
  <div class="info">
    <p class="info-position">{position}</p>
    <div class="info-company">
      <p class="company">{name}</p>
      <p class="type">{type}</p>
    </div>
    <p class="info-timerange">{fromDate} to {toDate}</p>
  </div>
</article>

<style>
  .card-container {
    position: relative;
    max-width: 30rem;
  }
  .card-container:hover .profile-img {
    transform: scale(1.02);
  }
  .profile-img {
    margin: 0.5rem;
    position: absolute;
    width: 90%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.5s;
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
    font-size: clamp(1.5rem, 2.3vw, 2.3rem);
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
    bottom: 5.1%;
    left: 14%;
    background-color: var(--color-text2);
    box-shadow: 0 0.2rem 0.5rem var(--color-text2);
    color: var(--color-text);
  }
</style>
