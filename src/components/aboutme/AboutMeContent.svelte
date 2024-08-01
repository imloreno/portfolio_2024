<script>
  import HandsImage from "@assets/about_hands.png";
  import HeadImage from "@assets/about_head.png";
</script>

<div class="container">
  <div class="pictures">
    <img class="head" src={HeadImage} alt="Lorenzo Arias - Portfolio" />
    <img class="hands" src={HandsImage} alt="Lorenzo Arias - Portfolio" />
  </div>
  <div class="text">
    <p class="text-paragraph">
      💻 I'm a <span class="text-success">software engineer</span> skilled in
      frontend development with
      <span class="text-secondary">React.js, TypeScript</span> and the ecosystem
      around it. Also, backend solutions using Spring Boot with microservices.
      Focusing on delivering seamless user experiences and
      <span class="text-warning">scalable systems</span>, I thrive on crafting
      unique and impactful software solutions 🚀.
    </p>
  </div>
</div>

<style>
  /* ---------------- Pictures ---------------- */
  .container {
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    height: 40rem;
    margin-top: 4rem;
    background-color: var(--color-bg3);
    overflow: hidden;
  }
  .pictures {
    position: relative;
    user-select: none;
  }
  .pictures .hands {
    width: 450px;
    position: absolute;
    top: 0;
    right: 7vw;
    user-select: none;
  }
  .pictures .head {
    width: 400px;
    position: absolute;
    top: 0;
    right: 7vw;
    transform: scale(-1, -1);
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
  }
</style>
