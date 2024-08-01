<script>
  import { Icons } from "@components/index";
  import { IconType } from "@entities/icons";
</script>

<div class="container">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.3 185.86"
    ><g
      ><g id="main_card"
        ><g id="bg"
          ><path
            class="background2"
            d="M0,0V147.73H152.3V0ZM138.86,115.35l-6.34-.16.12,26.41-115.78-.89.22-112.8L10.72,23.3,10.94,8l6-6.08,11.56-.17,4.05,5.84,49.12-.39L85.08,2l39.5.28,14.56,14.22Z"
          /></g
        ><g id="left_aleron" class="smooth"
          ><g id="_base" data-name=" base"
            ><polygon
              class="background1"
              points="1 143.5 1 26.61 6.31 23.55 14.66 28.97 14.66 141.13 6.31 146.56 1 143.5"
            /><path
              class="frame"
              d="M6.28,24.72l7.38,4.79V140.59l-7.38,4.8L2,142.92V27.19l4.28-2.47m.06-2.35L0,26v118l6.34,3.66,9.32-6.06V28.42L6.34,22.37Z"
            /></g
          ><polygon
            id="bold"
            class="frame"
            points="5.47 112.47 0 118.85 0 51.52 5.47 57.91 5.47 112.47"
          /></g
        ><g id="button" class="button smooth"
          ><polygon
            points="143.8 169.45 138.16 185.63 78.25 185.63 83.89 169.45 143.8 169.45"
          /></g
        ><g id="background" class="frame"
          ><path
            d="M124.12,3.53l13.24,13.25v96.76h-6.28v25H18.69V26.78l-1.37-.88-5-3.21V8.2L17,3.53H28.15L30.6,7.29l.89,1.35H82.24l.88-1.36,2.45-3.75h38.55m1.24-3H83.94L80.61,5.64H33.11L29.77.53h-14L9.36,7V24.33l6.33,4.09V141.59H134.08v-25h6.28v-101l-15-15Z"
          /></g
        ><g id="Info_bar" data-name="Info bar"
          ><g id="front"
            ><polygon
              class="background1"
              points="10.36 178.78 10.36 146.15 15.96 142.44 16.69 141.97 16.69 135.3 145.78 135.3 151.13 168.46 83.15 168.46 78.22 182.55 77.48 184.63 16.43 184.85 10.36 178.78"
            /><path
              class="frame"
              d="M144.93,136.3l5,31.16H82.44L82,168.8l-4.7,13.42-.5,1.42-59.92.21-5.49-5.48V146.69l5.13-3.41.28-.18.92-.59V136.3H144.93m1.7-2H15.69v7.12l-.28.18-6.05,4V179.2L16,185.86l62.17-.23,1-2.75,4.7-13.42H152.3l-5.67-35.16Z"
            /></g
          ><polygon
            class="frame"
            points="84.66 138.69 32.72 138.69 30.36 134.3 87.02 134.3 84.66 138.69"
          /></g
        ><g id="ailerons" data-name="ailerons" class="frame"
          ><g id="ai3" class="smooth"
            ><polygon
              points="146.6 61.39 134.08 48.98 134.05 24.66 146.57 37.07 146.6 61.39"
            /></g
          ><g id="ai2"
            ><polygon
              points="146.63 85.7 134.12 73.29 134.08 48.98 146.6 61.38 146.63 85.7"
            /></g
          ><g id="ai1" class="smooth"
            ><polygon
              points="146.66 110.02 134.15 97.61 134.12 73.3 146.63 85.71 146.66 110.02"
            /></g
          ></g
        ><g id="dots" class="background1"
          ><rect
            id="dot_3"
            data-name="dot 3"
            x="94.79"
            y="11.28"
            width="8.85"
            height="5.67"
          /><rect
            id="dot_2"
            data-name="dot 2"
            x="104.77"
            y="11.28"
            width="8.85"
            height="5.67"
          /><rect
            id="dot_1"
            data-name="dot 1"
            x="114.74"
            y="11.28"
            width="8.85"
            height="5.67"
          /></g
        ><g id="Title_bar" data-name="Title bar"
          ><polygon
            class="background1"
            points="118.8 37 118.8 25.45 116.57 23.21 88.16 23.21 85.85 19.67 70.52 19.67 37.2 19.67 29.72 19.67 27.69 21.7 27.69 36.84 29.85 39.01 116.8 39.01 118.8 37"
          /><polygon
            class="background2"
            points="79.23 23.12 33.77 23.12 35.15 21.63 80.61 21.63 79.23 23.12"
          /></g
        ></g
      ></g
    ></svg
  >
  <p class="info-button-text smooth">
    <span>Details</span>
    <span class="details-icon">
      <Icons type={IconType.details} />
    </span>
  </p>
</div>

<style>
  /* ------------------------- SVG styles ------------------------- */
  .background1 {
    fill: var(--color-bg3);
  }
  .background2 {
    fill: var(--color-bg2);
  }
  .frame {
    fill: var(--color-primary);
  }
  .button {
    fill: var(--color-secondary);
  }

  .smooth {
    transition: transform 0.5s;
  }

  .container {
    position: relative;
    cursor: pointer;
  }

  .container svg {
    overflow: visible;
  }

  .container:hover #ai1 {
    transform: translateY(0.3rem);
  }
  .container:hover #ai3 {
    transform: translateY(-0.3rem);
  }
  .container:hover #button {
    transform: translate(0.1rem, 0.1rem);
  }
  .container:hover #left_aleron {
    transform: translateX(-0.15rem);
  }
  .info-button-text {
    position: absolute;
    display: flex;
    justify-content: center;
    column-gap: 0.5rem;
    font-size: 1.3rem;
    bottom: 3%;
    right: 17%;
    color: var(--color-text);
  }

  .container:hover .info-button-text {
    transform: translate(0.2rem, 0.2rem);
  }

  .details-icon :global(svg) {
    transform: translateY(0.2rem);
  }
</style>
