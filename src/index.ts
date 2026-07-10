import type { Food } from "./models/Food.js";
import type { Exercise } from "./models/Exercise.js";
import type {
    WorkoutSession,
    ExerciseSet,
} from "./models/WorkoutSession.js";

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

console.log(chickenBreast);
console.log(pushWorkout);