<script lang="ts">
  import { onMount } from "svelte";
  import {
    AboutMe,
    Banner,
    Menu,
    JobExperience,
    SkillSet,
    Footer,
  } from "@layouts/index";

  let scrollbarElement: HTMLElement;
  let ticking = false;

  // ---------------------- SCROLL SMOOTH ----------------------
  onMount(() => {
    scrollbarElement.addEventListener("scroll", () => {
      // ---------------------- TICKING ----------------------
      if (ticking) return;
      ticking = true;
      setTimeout(() => {
        ticking = false;
      }, 230);
    });
  });
</script>

<div id="scrollbar" bind:this={scrollbarElement}>
  <!-- Just to scroll here when user clicks on home icon -->
  <div id="home" />
  <Menu />
  <Banner />
  <AboutMe {ticking} />
  <JobExperience />
  <SkillSet />
  <Footer />
</div>

<style>
  #scrollbar {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    scroll-behavior: smooth;
  }
</style>
