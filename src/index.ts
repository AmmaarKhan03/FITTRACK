import type { Food } from "./models/Food.js";
import {
    getMealCalories,
    getMealProtein,
    type CreateMealInput,
} from "./models/Meal.js";
import { InMemoryMealRepository } from "./repositories/InMemoryMealRepository.js";

import { WorkoutTimer } from "./models/WorkoutTimer.js";

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

const lunchInput: CreateMealInput = {
    name: "Chicken and Rice",
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
};

const mealRepository = new InMemoryMealRepository();

const savedLunch = mealRepository.add(lunchInput);

