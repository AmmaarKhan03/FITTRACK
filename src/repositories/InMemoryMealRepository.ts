import type { Meal } from "../models/Meal.js"; 
import type { MealRepository } from "./MealRepository.js"; 

function isSameDay(a: Date, b: Date): boolean {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() == b.getDate()
    );
}
