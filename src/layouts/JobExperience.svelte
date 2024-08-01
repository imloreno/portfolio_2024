<script lang="ts">
  import { CardBox, Title } from "@components/index";
  import type { JobSummary } from "@entities/experience";

  const job: JobSummary = {
    company: "Nice Actimize",
    position: "Frontend Developer",
    jobType: "Full-time",
    date: "Jun 22 to Jun 24",
    img: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2023-04/fa3a91c9-1d0e-48aa-87e3-89b7e2600890.JPG",
  };
</script>

<section>
  <Title>Job Experience</Title>
  <div class="job-experience-container">
    <CardBox {job} />
    <CardBox {job} />
    <CardBox {job} />
    <CardBox {job} />
    <CardBox {job} />
    <CardBox {job} />
    <CardBox {job} />
  </div>
</section>

<style>
  section {
    padding-top: 15rem;
    margin: 0 auto;
    max-width: 100rem;
    background-color: var(--color-bg2);
  }
  .job-experience-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 4rem;
  }
</style>
