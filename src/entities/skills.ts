export interface Skill {
   category: string
   id: string
   name: string
   yearsOfExperience: number
}

export const SKILL_LABELS: { [key: string]: string } = {
   BACKEND: "Backend",
   FRONTEND: "Frontend",
   TOOLS: "Tools",
   METHODOLOGIES: "Methodologies",
   REPOSITORIES: "Repositories",
   DESIGN: "Design",
   DEVOPS: "DevOps",


   AGILE: "Agile",
   API_REST: "Api Rest",
   BITBUCKET: "Bitbucket",
   CSS: "CSS",
   DOCKER: "Docker",
   FIGMA: "Figma",
   GIT: "Git",
   GITHUB: "GitHub",
   HTML: "HTML",
   HTML5: "HTML-5",
   ILLUSTRATOR: "Illustrator",
   JAVA: "Java",
   JAVASCRIPT: "JavaScript",
   JIRA: "Jira",
   MICROSERVICES: "Microservices",
   MONGODB: "MongoDB",
   MVC: "MVC",
   MYSQL: "MySQL",
   PHOTOSHOP: "Photoshop",
   PHP: "PHP",
   POSTGRESQL: "PostgreSQL",
   REACT: "React.js",
   REDUX: "Redux",
   RESPONSIVE: "Responsive",
   SASS: "Sass",
   SPRING_BOOT: "Spring Boot",
   SVELTE: "Svelte",
   TYPESCRIPT: "TypeScript",
   VS_CODE: "VS Code",
   ZUSTAND: "Zustand"
}