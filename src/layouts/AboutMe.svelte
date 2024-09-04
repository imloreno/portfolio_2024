<script>
  import { Title, AboutMeContent } from "@components/index";

  export let ticking;
</script>

<section id="about-me">
  <Title>About Me</Title>
  <AboutMeContent {ticking} />
</section>

<style>
  section {
    padding-top: 12rem;
  }
</style>
