<script lang="ts">
  import { afterUpdate } from "svelte";
  import HandsImage from "@assets/about_hands.png";
  import HeadImage from "@assets/about_head.png";

  export let ticking;
  let parallaxElementContainer: HTMLElement;
  let parallaxPositionY = 0;

  afterUpdate(() => {
    if (ticking) return;
    // Get the position of the element container
    const rectY = parallaxElementContainer?.getBoundingClientRect().top;
    parallaxPositionY = Math.abs(rectY);
  });
</script>

<div class="container" bind:this={parallaxElementContainer}>
  <div
    class="pictures"
    style="transform: translateY(calc(23vw - {parallaxPositionY * 0.25}px))"
  >
    <img class="head" src={HeadImage} alt="Lorenzo Arias - Portfolio" />
  </div>
  <div class="text">
    <p
      class="text-paragraph"
      style="transform: translateY({parallaxPositionY * 0.2}px)"
    >
      💻 I'm a <span class="text-success">software engineer</span> skilled in
      frontend development with
      <span class="text-secondary">React.js, TypeScript</span> and the ecosystem
      around it. Also, backend solutions using Spring Boot with microservices.
      Focusing on delivering seamless user experiences and
      <span class="text-warning">scalable systems</span>, I thrive on crafting
      unique and impactful software solutions 🚀.
    </p>
  </div>
  <div class="about-top-bar">
    <img class="hands" src={HandsImage} alt="Lorenzo Arias - Portfolio" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393.96 49.77"
      ><g
        ><g
          ><g id="bottom-bar"
            ><path
              class="bottom-bar"
              d="M36.15,35.57l2.28,1.81,9.73-2.72,6.74,2.51,3.29-.81,1.54-2.23,2.88-.76,3.82,1.05,3.62,2.7,3.21.69,2.46-1a6.47,6.47,0,0,1,2.12-1.4,11.55,11.55,0,0,1,2.71-.69c.7,0,11.06.59,11.06.59l1.41.16,9.06,1.62.6.1,7.41,1.35h13.18c.35-.33,2.23-1.73,2.23-1.73s2.24-.54,2.82-.64,13-.43,13.3-.38,4.24,0,4.24,0a7.68,7.68,0,0,1,2.35.38c.47.33,5.17,1,6.35,1.24s3.41.22,5.18.49,12.11.21,12.11.21a5.14,5.14,0,0,0,2.82-1c1.06-.91,3.86-4,3.86-4h2l7.42.32,1.26,3,.29,1.5a54.15,54.15,0,0,0,5.41,1l.56.4,1.44.24c.7.11,4.68,1,5.39,1.14s4,.12,4,.12C210,41.39,216.44,43,216.44,43l5.88,4.57,5.49,2.19,17.29-6.18,10.51.28,1.76-.08,4.79-6.29,9.09,5.06,8.43-2L282,37.7,286,36l14.7-5.39,11.18,5.66L330,39.46l11.41-8.9,7.18-.12,15.92,6.43,3.56-6.08,3.22,1.13,5.65.94,3.53,1.6L382.74,37l7.85.92H394V22.24H0V38l8.74-5,5.39,1.15,9.35-2.7,5.07,1.94,1.57,3Z"
            /><path
              class="top-bar"
              d="M35.77,32.21l2.66.78,9.65-2.23,6.82,1.76,3.29-1.76L61,29.7l1.77-2.11,3.64-1.05,1.65,3.22,5.18,4.16,2.47-2.23a9.39,9.39,0,0,1,2.11-3c1.07-.71,2-1.53,2.71-1.53S91.6,28.41,91.6,28.41l1.42.35,9.06,3.52.59.23,7.41,2.93h13.18c.35-.7,2.24-3.75,2.24-3.75s2.23-1.17,2.82-1.4,12.94-.94,13.29-.83,4.24.12,4.24.12,1.88.12,2.35.83,5.18,2.23,6.35,2.69,3.41.47,5.18,1,12.11.48,12.11.48a3.74,3.74,0,0,0,2.82-2.11c1.07-2,4.36-4,4.36-4h2s6.7,0,7.41.7a6.78,6.78,0,0,0,2.12,1.18l-1.06,3.74c.7.71,5.41,2.23,5.41,2.23h.7l1.29,1.41s4.71.71,5.41.94a21.56,21.56,0,0,0,3.89,0c3.64,1.17,12.47,1.88,12.47,1.88l7.53,5.62h1.29S245,43,244.66,41.31s13.06.35,13.06.35L260,35.91l6.23-2.34,6.35,6.56,8-1.63L282,33.69l4-3.64,24.28-5.35,1.6,5.94L330,37.52,337.26,30l5.95-7.81,21.34,9.69,3.13-5,6.59.62H378s2.2-.93,3.46,1.88l1.25,2.82,7.84,2H394V0H0V34.39l6.28-5.31s6.9-1.26,7.21.31,9.42-3.75,9.42-3.75l8.47,3.12L30.12,31Z"
            /></g
          ></g
        ></g
      ></svg
    >
  </div>
  <svg
    class="about-bottom-bar"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 393.96 49.77"
    ><g
      ><g
        ><g id="bottom-bar"
          ><path
            class="bottom-bar"
            d="M36.15,35.57l2.28,1.81,9.73-2.72,6.74,2.51,3.29-.81,1.54-2.23,2.88-.76,3.82,1.05,3.62,2.7,3.21.69,2.46-1a6.47,6.47,0,0,1,2.12-1.4,11.55,11.55,0,0,1,2.71-.69c.7,0,11.06.59,11.06.59l1.41.16,9.06,1.62.6.1,7.41,1.35h13.18c.35-.33,2.23-1.73,2.23-1.73s2.24-.54,2.82-.64,13-.43,13.3-.38,4.24,0,4.24,0a7.68,7.68,0,0,1,2.35.38c.47.33,5.17,1,6.35,1.24s3.41.22,5.18.49,12.11.21,12.11.21a5.14,5.14,0,0,0,2.82-1c1.06-.91,3.86-4,3.86-4h2l7.42.32,1.26,3,.29,1.5a54.15,54.15,0,0,0,5.41,1l.56.4,1.44.24c.7.11,4.68,1,5.39,1.14s4,.12,4,.12C210,41.39,216.44,43,216.44,43l5.88,4.57,5.49,2.19,17.29-6.18,10.51.28,1.76-.08,4.79-6.29,9.09,5.06,8.43-2L282,37.7,286,36l14.7-5.39,11.18,5.66L330,39.46l11.41-8.9,7.18-.12,15.92,6.43,3.56-6.08,3.22,1.13,5.65.94,3.53,1.6L382.74,37l7.85.92H394V22.24H0V38l8.74-5,5.39,1.15,9.35-2.7,5.07,1.94,1.57,3Z"
          /><path
            class="top-bar"
            d="M35.77,32.21l2.66.78,9.65-2.23,6.82,1.76,3.29-1.76L61,29.7l1.77-2.11,3.64-1.05,1.65,3.22,5.18,4.16,2.47-2.23a9.39,9.39,0,0,1,2.11-3c1.07-.71,2-1.53,2.71-1.53S91.6,28.41,91.6,28.41l1.42.35,9.06,3.52.59.23,7.41,2.93h13.18c.35-.7,2.24-3.75,2.24-3.75s2.23-1.17,2.82-1.4,12.94-.94,13.29-.83,4.24.12,4.24.12,1.88.12,2.35.83,5.18,2.23,6.35,2.69,3.41.47,5.18,1,12.11.48,12.11.48a3.74,3.74,0,0,0,2.82-2.11c1.07-2,4.36-4,4.36-4h2s6.7,0,7.41.7a6.78,6.78,0,0,0,2.12,1.18l-1.06,3.74c.7.71,5.41,2.23,5.41,2.23h.7l1.29,1.41s4.71.71,5.41.94a21.56,21.56,0,0,0,3.89,0c3.64,1.17,12.47,1.88,12.47,1.88l7.53,5.62h1.29S245,43,244.66,41.31s13.06.35,13.06.35L260,35.91l6.23-2.34,6.35,6.56,8-1.63L282,33.69l4-3.64,24.28-5.35,1.6,5.94L330,37.52,337.26,30l5.95-7.81,21.34,9.69,3.13-5,6.59.62H378s2.2-.93,3.46,1.88l1.25,2.82,7.84,2H394V0H0V34.39l6.28-5.31s6.9-1.26,7.21.31,9.42-3.75,9.42-3.75l8.47,3.12L30.12,31Z"
          /></g
        ></g
      ></g
    ></svg
  >
</div>

<style>
  /* ---------------- Pictures ---------------- */
  .container {
    position: relative;
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    height: clamp(20rem, 45vw, 50rem);
    margin-top: 4rem;
    background-color: var(--color-bg3);
    overflow: hidden;
  }
  .pictures {
    position: relative;
    user-select: none;
    transition: transform 0.2s;
  }
  .pictures .head {
    width: 20vw;
    position: absolute;
    top: -15vw;
    right: 7vw;
    user-select: none;
  }

  /* ---------------- Pictures ---------------- */
  .text {
    display: grid;
    place-items: center;
    text-align: right;
    color: var(--color-text2);
    font-size: 2rem;
  }
  .text-paragraph {
    max-width: 50rem;
    font-size: clamp(1rem, 2vw, 2rem);
    padding: 2rem;
    transition: transform 0.3s;
  }

  /* ---------------- SVG Frames ---------------- */
  .container .about-top-bar {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .container .about-bottom-bar {
    position: absolute;
    bottom: -0.3rem;
    width: 100%;
    transform: rotate(180deg);
  }
  .container .about-top-bar .hands {
    width: 25vw;
    position: absolute;
    top: 5.5vw;
    left: 15vw;
    user-select: none;
    transform: rotate(1deg);
  }
  .top-bar {
    fill: var(--color-bg2);
  }
  .bottom-bar {
    fill: var(--color-primary);
  }

  /* ---------------------- RESPONSIVE ----------------------- */
  @media (max-width: 550px) {
    .pictures .head {
      width: 10rem;
      top: -15vw;
      transform: translateX(-50%);
    }
    .container .about-top-bar .hands {
      width: 15rem;
      top: 1vw;
      right: 50%;
      transform: translateX(-50%);
      transform: rotate(2deg);
    }
    .container {
      grid-template-columns: 1fr;
      height: clamp(25rem, 30vw, 55rem);
    }
    .text-paragraph {
      padding: 2rem 2rem 5rem 2rem;
      text-align: center;
    }
  }
</style>
