export type ExerciseCategory =
    | "strength"
    | "cardio"
    | "mobility"
    | "sports";

export type Exercise = {
    id: number;
    name: string;
    category: ExerciseCategory;
    muscleGroup?: string;  // question mark means the property is optional 
    instructions?: string;
};