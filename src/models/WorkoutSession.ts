import type { Exercise } from "./Exercise.js"

export type WorkoutType = 
    | "push"
    | "pull" 
    | "legs" 
    | "upper" 
    | "lower" 
    | "full-body" 
    | "cardio" 
    | "other"; 

export type ExerciseSet = {
    reps: number; 
    weight: number; 
    completed: boolean;
};

export type ExercisePerformance = {
    exercise: Exercise; 
    sets: ExerciseSet[];
};

export type WorkoutSession = {
    id: number;
    name: string;
    workoutType: WorkoutType;

    startedAt: Date;
    endedAt?: Date;

    caloriesBurned?: number;
    averageHeartRate?: number;
    notes?: string;

    exercises: ExercisePerformance[];
};