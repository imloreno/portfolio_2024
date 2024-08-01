<script>
  import profileImg from "@assets/profile.png";
  import roundTextImg from "@assets/round_text.svg";
</script>

<section class="container">
  <div class="profile-container">
    <img class="absolute" src={profileImg} alt="Lorenzo Arias Villegas" />
    <img class="round-text" src={roundTextImg} alt="Lorenzo Arias Villegas" />
  </div>
  <div class="title">
    <h1>LORENZO</h1>
    <h2>SOFTWARE ENGINEER</h2>
  </div>
</section>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .profile-container {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .profile-container img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .profile-container .absolute {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.8);
    border: 0.2rem solid var(--color-tertiary);
  }

  .profile-container .round-text {
    animation: round 100s linear infinite;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1, 1);
    transform: translateZ(0);
  }

  .title {
    text-align: center;
    margin-top: 2rem;
  }

  .title h1 {
    color: var(--color-title);
    font-size: 3vw;
  }

  .title h2 {
    color: var(--color-text);
    font-size: 2vw;
  }

  /* -------------- Animations -------------- */
</style>
