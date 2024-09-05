<script lang="ts">
  import moment from "moment";
  import { createEventDispatcher } from "svelte";
  import type { JobSummary } from "@entities/experience";
  import CardBoxSvg from "./CardBoxSvg.svelte";
  import { PROJECT_PROFILE } from "src/constants/urls";

  export let job: JobSummary;
  export let isActive = false;
  const { name, position, type, from, to, id } = job;
  const dispatch = createEventDispatcher();

  // Dispatch event to parent component
  const dispatchEvent = () => {
    dispatch("setActiveProject", {
      id: job.id,
    });
  };

  // Get date in format MM 22
  const fromDate = moment.utc(from).format("MMM YY");
  const toDate = moment.utc(to).format("MMM YY");
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<article class="card-container {isActive && 'active'}" on:click={dispatchEvent}>
  <img
    class="profile-img"
    src={"https://media.gettyimages.com/id/184837627/photo/dark-towering-buildings.jpg?s=612x612&w=gi&k=20&c=oDJSPEEhW4n3TFqvev0TF6hkF633sN_9a-I5X-e4giU="}
    alt={name}
  />
  <CardBoxSvg {isActive} />
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
    width: 25rem;
  }
  .card-container:hover .profile-img,
  .active .profile-img {
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
    top: 4.4rem;
    left: 25%;
    text-transform: uppercase;
    font-size: 1.1rem;
  }
  .info-company {
    position: absolute;
    top: 24rem;
    left: 15%;
  }
  .info-company .company {
    font-size: 1.8rem;
    text-transform: uppercase;
  }
  .info-company .type {
    font-size: 1rem;
    margin-top: -0.3rem;
    opacity: 0.6;
  }
  .info-timerange {
    position: absolute;
    font-size: 0.9rem;
    padding: 0.3rem 0.5rem;
    top: 27.6rem;
    left: 14%;
    background-color: var(--color-text2);
    box-shadow: 0 0.2rem 0.5rem var(--color-text2);
    color: var(--color-text);
  }

  /* --------------------------- RESPONSIVE WEB --------------------------------- */
  @media (max-width: 950px) {
    .card-container {
      width: 20rem;
    }

    .info-position {
      top: 3.5rem;
      left: 22%;
      font-size: 0.9rem;
    }
    .info-company {
      top: 18.8rem;
      left: 12%;
    }
    .info-company .company {
      font-size: 1.5rem;
      text-transform: uppercase;
    }
    .info-company .type {
      font-size: 0.9rem;
      margin-top: -0.3rem;
    }
    .info-timerange {
      font-size: 0.8rem;
      padding: 0.3rem 0.4rem;
      top: 22rem;
      left: 12%;
      box-shadow: 0 0.2rem 0.5rem var(--color-text2);
    }
    .active {
      display: none;
    }
  }
</style>
