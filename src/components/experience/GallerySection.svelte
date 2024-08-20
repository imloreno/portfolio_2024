<script>
  import { Icons } from "@components/index";
  import { IconType } from "@entities/icons";
</script>

<div class="container">
  <div class="content">
    <div class="disclaimer">
      <Icons type={IconType.security} />
      <p>
        Due to the company's privacy contract, I am not allowed to show images
        or screenshots of this work experience, I want to respect the contract,
        so I cannot show this content.
      </p>
    </div>
  </div>
</div>

<style>
  .container {
    position: relative;
    overflow: hidden;
    grid-column: span 3;
    display: flex;
    padding: 1rem;
    background-color: var(--color-bg);
  }
  .content {
    width: 100%;
    height: 100%;
    border: 0.4rem solid var(--color-primary);
    display: grid;
    place-items: center;
    background-color: var(--color-bg2);
  }
  .content .disclaimer {
    margin: 4rem 2rem;
    max-width: 50rem;
    text-align: center;
    font-size: 2.3rem;
    color: var(--color-text3);
  }
  .content .disclaimer p {
    font-size: 1.2rem;
    text-align: justify;
    color: var(--color-text);
  }
  .content::after,
  .content::before {
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
  .content::before {
    top: -7rem;
    left: -7rem;
    transform: rotate(-45deg);
  }
</style>
