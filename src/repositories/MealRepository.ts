import type { CreateMealInput, Meal } from "../models/Meal.js"; 

export interface MealRepository { // this interface defines what any meal repo must be able to do 
    add(meal: CreateMealInput): void; 

    getAll(): Meal[];

    findById(id: number): Meal | undefined; 

    getMealsForDay(day: Date): Meal[];

    update(meal: Meal): boolean;

    deleteById(id: number): Boolean;
}