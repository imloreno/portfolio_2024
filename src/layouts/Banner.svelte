<script lang="ts">
  import type { Skill } from "@entities/banner";
  import { Profile } from "../components";
  import { BannerText, ScrollDown } from "../components/banner";

  const skills: { [key: string]: Skill[] } = {
    left: [
      { text: "HTML - CSS", type: "brown" },
      { text: "TYPESCRIPT", type: "default" },
      { text: "REACT.JS", type: "cream" },
      { text: "JAVASCRIPT", type: "default" },
      { text: "REDUX & ZUSTAND", type: "brown" },
      { text: "RESPONSIVE", type: "chocolate" },
    ],
    right: [
      { text: "JAVA", type: "cream" },
      { text: "SPRING BOOT", type: "brown" },
      { text: "API REST", type: "chocolate" },
      { text: "POSTGRESQL", type: "default" },
      { text: "MONGODB", type: "milk" },
      { text: "MICROSERVICES", type: "brown" },
    ],
  };
</script>

<section class="banner">
  <div class="content">
    <BannerText align="right" skills={skills.left} />
    <Profile />
    <BannerText align="left" skills={skills.right} />
    <ScrollDown className="scroll-down" />
  </div>
</section>

<style>
  .banner {
    padding-top: 2rem;
    background-color: var(--color-bg);
  }
  .content {
    display: grid;
    row-gap: 3rem;
    grid-template-columns: 1fr 0.8fr 1fr;
    grid-template-areas:
      "left profile right"
      "scroll-down scroll-down scroll-down";
  }
</style>
