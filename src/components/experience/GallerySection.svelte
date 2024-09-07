<script lang="ts">
  import { onMount } from "svelte";
  import { each, isEmpty } from "lodash";
  import { Icons } from "@components/index";
  import { IconType } from "@entities/icons";
  import type { GalleryPhoto } from "@entities/files";
  import {
    GALLERY_LIST,
    GALLERY_PHOTO,
    ID_KEY,
    NAME_KEY,
  } from "src/constants/urls";

  export let projectId;
  let galleryIds: GalleryPhoto[] = [];

  // Fetch gallery images
  onMount(async () => {
    if (!projectId) return;
    fetch(GALLERY_LIST.replace(ID_KEY, projectId))
      .then((response) => response.json())
      .then((data) => {
        if (!data.data) return;
        galleryIds = data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  });
</script>

<div class="container">
  <div class="content">
    {#if isEmpty(galleryIds)}
      <div class="disclaimer">
        <Icons type={IconType.security} />
        <p>
          Due to the company's privacy contract, I am not allowed to show images
          or screenshots of this work experience, I want to respect the
          contract, so I cannot show this content.
        </p>
      </div>
    {:else}
      <h3 class="gallery-title">Gallery</h3>
      <p class="gallery-disclaimer">
        Due to the company's privacy contract, not all information is displayed
        here.
      </p>
      <div class="gallery-container">
        {#each galleryIds as id}
          <div class="gallery-photo">
            <img
              src={GALLERY_PHOTO.replace(ID_KEY, projectId).replace(
                NAME_KEY,
                id.name
              )}
              alt="gallery"
            />
          </div>
        {/each}
      </div>
    {/if}
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

  /* -------------------- GALLERY ----------------------- */
  .gallery-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-secondary);
    margin-top: 2rem;
    margin-left: 2rem;
    justify-self: start;
  }
  .gallery-disclaimer {
    font-size: 1.2rem;
    color: var(--color-text);
    margin-left: 2rem;
    justify-self: start;
  }
  .gallery-container {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 2rem;
  }
  .gallery-photo {
    position: relative;
    background-color: var(--color-secondary);
  }
  .gallery-photo img {
    width: auto;
    height: auto;
    max-width: 20rem;
    max-height: 20rem;
    object-fit: contain;
    border: 0.3rem solid var(--color-bg);
    filter: drop-shadow(0 0 0.5rem black);
    padding: 0.5rem;
  }
  .gallery-photo::after {
    content: "";
    position: absolute;
    width: 5rem;
    height: 1.1rem;
    left: 50%;
    bottom: 0.5rem;
    transform: translateX(-50%);
    z-index: 10;
    background-color: var(--color-bg);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  /* ------------------------ RESPONSIVE ------------------------- */
  @media (max-width: 650px) {
    .gallery-container {
      flex-direction: column;
      width: 100%;
    }
    .gallery-photo img {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
