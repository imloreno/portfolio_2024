import type { Skill } from "./skills"

export type JobSummary = {
   id: string
   name: string
   position: string
   type: string
   from: string
   to: string
   picture: string
   skills: Skill[]
}

export type JobDetails = {
   description?: string
   github?: string
   link?: string
}