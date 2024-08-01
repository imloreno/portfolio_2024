<script>
  import { MenuItem } from "@components/index";
  import { IconType } from "@entities/icons";

  const menu = [
    {
      name: "GitHub",
      icon: IconType.github,
      key: "https://github.com/imloreno",
      external: true,
    },
    {
      name: "LinkedIn",
      icon: IconType.linkedin,
      key: "https://linkedin.com/in/imlorenzo",
      external: true,
    },
    {
      name: "Email",
      icon: IconType.mail,
      key: "mailto:work@imloreno.com",
      external: true,
    },
    {
      name: "Resume",
      icon: IconType.sheet,
      key: "/resume",
      className: "mx-auto",
      download: true,
    },
    { name: "Home", icon: IconType.home, key: "/home" },
    { name: "About Me", icon: IconType.bug, key: "/about-me" },
    {
      name: "Job Experience",
      icon: IconType.history,
      key: "/job-experience",
    },
    { name: "Projects", icon: IconType.projects, key: "/projects" },
  ];
</script>

<header>
  <nav>
    <ul>
      {#each menu as { name, icon, key, external, download, className } (key)}
        <MenuItem {icon} {key} {external} {download} {className}
          >{name}</MenuItem
        >
      {/each}
    </ul>
  </nav>
</header>

<style>
  header,
  nav {
    display: grid;
    place-items: center;
    background: var(--color-bg2);
    height: 4rem;
    width: 100%;
  }
  ul {
    display: flex;
    justify-content: center;
    column-gap: 2rem;
    align-items: center;
    width: 100%;
    padding: 0 4rem;
  }
</style>
