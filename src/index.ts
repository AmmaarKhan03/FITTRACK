import type { Food } from "./models/Food.js";
import type { Exercise } from "./models/Exercise.js";
import type {
    WorkoutSession,
    ExerciseSet,
} from "./models/WorkoutSession.js";
import {
    getMealCalories, getMealProtein, type Meal, 
} from "./models/Meal.js"

const chickenBreast: Food = {
    id: 1,
    name: "Chicken Breast",
    servingSize: 100,
    servingUnit: "g",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    fiber: 0,
    sugar: 0,
    sodium: 74,
};

const whiteRice: Food = {
    id: 2,
    name: "White Rice",
    servingSize: 100,
    servingUnit: "g",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    fiber: 0.4,
    sugar: 0.1,
    sodium: 1,
};

const lunch: Meal = {
    id: 1,
    name: "chicken and rice",
    mealType: "lunch", 
    eatenAt: new Date(), 
    items: [ 
        {
            food: chickenBreast,
            servings: 2.5,
        },
        {
            food: whiteRice,
            servings: 1.5,
        },
    ],
    notes: "nothing",
};

const benchPress: Exercise = {
    id: 1,
    name: "Bench Press",
    category: "strength",
    muscleGroup: "chest",
    instructions: "Lower the bar under control and press upward.",
};

const benchSets: ExerciseSet[] = [
    {
        reps: 8,
        weight: 185,
        completed: true,
    },
    {
        reps: 8,
        weight: 185,
        completed: true,
    },
    {
        reps: 6,
        weight: 185,
        completed: true,
    },
];

const pushWorkout: WorkoutSession = {
    id: 1,
    name: "Monday Push Day",
    workoutType: "push",
    startedAt: new Date(),
    caloriesBurned: 420,
    averageHeartRate: 132,
    notes: "Bench press felt strong.",
    exercises: [
        {
            exercise: benchPress,
            sets: benchSets,
        },
    ],
};


console.log("Meal calories:", getMealCalories(lunch));
console.log("Meal protein:", getMealProtein(lunch));