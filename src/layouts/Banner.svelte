<script lang="ts">
  import type { Skill } from "@entities/banner";
  import { Profile } from "@components/index";
  import { BannerText, ScrollDown } from "../components/banner";
  import { SkillType } from "@entities/banner";

  const skills: { [key: string]: Skill[] } = {
    left: [
      { text: "HTML - CSS", type: SkillType.default, even: true },
      { text: "TYPESCRIPT", type: SkillType.default, even: false },
      { text: "REACT.JS", type: SkillType.strawberry, even: true },
      { text: "JAVASCRIPT", type: SkillType.default, even: false },
      { text: "REDUX & ZUSTAND", type: SkillType.grapes, even: true },
      { text: "RESPONSIVE", type: SkillType.default, even: false },
    ],
    right: [
      { text: "JAVA", type: SkillType.default, even: false },
      { text: "SPRING BOOT", type: SkillType.cream, even: true },
      { text: "API REST", type: SkillType.default, even: false },
      { text: "POSTGRESQL", type: SkillType.default, even: true },
      { text: "MONGODB", type: SkillType.default, even: false },
      { text: "MICROSERVICES", type: SkillType.milk, even: true },
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
  }

  /* ----------------- RESPONSIVE DESIGN --------------------- */
  @media (max-width: 750px) {
    .banner {
      position: relative;
    }
    .content {
      grid-template-columns: 1fr 1fr;
      row-gap: 1rem;
    }
  }
</style>
