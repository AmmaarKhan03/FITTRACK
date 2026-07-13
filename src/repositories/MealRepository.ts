import type { Meal } from "../models/Meal.js"; 

export interface MealRepository { // this interface defines what any meal repo must be able to do 
    add(meal: Meal): void; 

    getAll: Meal[];

    findById(id: number): Meal | undefined; 

    getMealsForDays(day: Date): Meal[];

    deleteById(id: number): Boolean;
}