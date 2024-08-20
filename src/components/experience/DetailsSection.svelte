<script>
</script>

<div class="container">
  <div class="content">
    <div class="header">
      <div class="title-section">
        <p>Feb 2020 - May 2021</p>
        <h2 class="subtitle-stack">Job Details</h2>
        <p>Full-Time | Frontend developer</p>
      </div>
      <div class="actions-section">
        <p>Buttons will be placed here...</p>
      </div>
    </div>

    <div class="description">
      <h3>Description:</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing ept. Vero porro
        facere excepturi eos asperiores recusandae sapiente, consectetur eveniet
        voluptatem! Quasi natus praesentium, blanditiis porro nisi illum?
        Expedita, dolore ullam. Asperiores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing ept. Vero porro
        facere excepturi eos asperiores recusandae sapiente, consectetur eveniet
        voluptatem! Quasi natus praesentium, blanditiis porro nisi illum?
        Expedita, dolore ullam. Asperiores.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing ept. Vero porro
        facere excepturi eos asperiores recusandae sapiente, consectetur eveniet
        voluptatem! Quasi natus praesentium, blanditiis porro nisi illum?
        Expedita, dolore ullam. Asperiores.
      </p>
      <h3>Skill Stack:</h3>
      <p>HTML - CSS - JavaScript - TypeScript</p>
    </div>
  </div>
</div>

<style>
  .container {
    overflow: hidden;
    grid-column: span 2;
    display: flex;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    border: 0.4rem solid var(--color-primary);
  }

  .content::after {
    content: "";
    position: absolute;
    width: 10rem;
    height: 10rem;
    bottom: -6rem;
    right: -6rem;
    transform: rotate(45deg);
    background-color: var(--color-bg2);
    border: 0.4rem solid var(--color-primary);
    z-index: 10;
  }

  /* ------------------------ Content styling ------------------------ */
  .header {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
  }
  .description {
    padding: 1.5rem;
  }
</style>
