<script>
  import { Title, AboutMeContent } from "@components/index";

  export let ticking;
</script>

<section>
  <Title>About Me</Title>
  <AboutMeContent {ticking} />
</section>

<style>
  section {
    margin-top: 12rem;
  }
</style>
