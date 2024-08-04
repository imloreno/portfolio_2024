export enum SkillType {
   default = "default",
   strawberry = "strawberry",
   cream = "cream",
   chocolate = "chocolate",
   milk = "milk",
   grass = "grass",
   grapes = "grapes",
   honey = "honey",
}

export type Skill = {
   text: string;
   type: SkillType;
   even: boolean;
   delay?: number;
};