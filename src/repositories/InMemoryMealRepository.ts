import type { Meal } from "../models/Meal.js"; 
import type { MealRepository } from "./MealRepository.js"; 

function isSameDay(a: Date, b: Date): boolean {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() == b.getDate()
    );
}

export class inMemoryMealRepository implements MealRepository {
    private meals: Meal[] = []; 

    add (meal: Meal): void {
        this.meals.push(meal); 
    }

    getAll(): Meal[] { 
        return [...this.meals];
    }

    findById(id: number): Meal | undefined {
        return this.meals.find((meals) => meals.id === id);
    }

    getMealsForDays(day: Date): Meal[] {
        return this.meals.filter((meal) =>
        isSameDay(meal.eatenAt, day));
    }

    deleteById(id: number): Boolean {
        const mealIndex = this.meals.findIndex(
            (meal) => meal.id === id
        );

        if (mealIndex === -1) {
            return false; 
        }

        this.meals.splice(mealIndex, 1);
        return true; 
    }

}