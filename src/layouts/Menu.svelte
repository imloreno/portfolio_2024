<script>
  import { Icons, MenuItem } from "@components/index";
  import { IconType } from "@entities/icons";

  const menu = [
    {
      name: "GitHub",
      icon: IconType.github,
      key: "https://github.com/imloreno",
      external: true,
      responsive: true,
    },
    {
      name: "LinkedIn",
      icon: IconType.linkedin,
      key: "https://linkedin.com/in/imlorenzo",
      external: true,
      responsive: true,
    },
    {
      name: "work@imloreno.com",
      icon: IconType.mail,
      key: "mailto:work@imloreno.com",
      responsive: true,
    },
    {
      name: "Resume",
      icon: IconType.sheet,
      key: "https://github.com/imloreno/imloreno/raw/main/Resume.docx",
      className: "mx-auto",
      download: true,
    },
    { name: "Home", icon: IconType.home, key: "/#home" },
    { name: "About Me", icon: IconType.bug, key: "/#about-me" },
    {
      name: "Experience",
      icon: IconType.history,
      key: "/#job-experience",
    },
    {
      name: "Skills",
      icon: IconType.skills,
      key: "/#skills",
    },
  ];

  // Toggle menu
  let toggleMenu = false;
  const toggleMenuHandler = () => (toggleMenu = !toggleMenu);
</script>

<header>
  <nav>
    <button id="toggleMenu" on:click={toggleMenuHandler}>
      <Icons type={IconType.menu} />
    </button>
    <ul class="menu-content {toggleMenu && 'active'}">
      {#each menu as menuItem (menuItem.key)}
        <MenuItem {...menuItem} />
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  header,
  nav {
    display: grid;
    place-items: center;
    background: var(--color-bg2);
    height: 3.5rem;
    width: 100%;
    z-index: 100;
  }
  ul {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
    align-items: center;
    width: 100%;
    padding: 0 4rem;
  }
  #toggleMenu {
    all: unset;
    display: none;
  }

  /* ------------------------ RESPONSIVE ------------------------ */
  @media (max-width: 1200px) {
    ul {
      column-gap: 1.5rem;
      padding: 0 2rem;
    }
  }
  @media (max-width: 950px) {
    nav {
      justify-content: flex-end;
    }
    #toggleMenu {
      display: grid;
      place-items: center;
      margin-right: 1rem;
      font-size: 2.3rem;
      color: var(--color-title);
      width: 3rem;
      height: 3rem;
      z-index: 1000;
    }
    #toggleMenu:active {
      color: var(--color-primary);
    }
    .menu-content {
      position: fixed;
      flex-direction: column;
      display: none;
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
      left: 0;
      top: 0;
      background: var(--color-bg);
      z-index: 100;
    }
    .menu-content.active {
      display: flex;
    }
  }
</style>
