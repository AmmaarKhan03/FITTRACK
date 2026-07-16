import type { CreateMealInput , Meal } from "../models/Meal.js"; 
import type { MealRepository } from "./MealRepository.js"; 
import { isSameDay } from "../utils/dateUtils.js";


export class InMemoryMealRepository implements MealRepository { // we created a class, whic is a blueprint for creating objects
    private meals: Meal[] = []; // creates an array that is acting like a temporary databsae 
    // private means code outside the class cannot access it 
    private nextId = 1; 

    // the rep begins with id = 1, when the fist meal is added id: this.nextId gives it id 1, then afterward it += 1, which auto increments it 

    add (mealInput: Meal): Meal {  // this is considered a method, outside code must use these 
        const meal: Meal = {
            id: this.nextId, 
            ... mealInput,
        };

        this.nextId += 1; 
        this.meals.push(meal);

        return meal; 
    }

    getAll(): Meal[] { 
        return [...this.meals]; //the ... takes the array and makes a copy of it, we are retuning a copy of the array becasue we ont want to relase the actual one 
    }

    findById(id: number): Meal | undefined {
        return this.meals.find((meals) => meals.id === id); // find goes througth an array one element at a time, and returns the first element that passes a test 
    } // the => symbol creates an arrow funciton. 

    getMealsForDay(day: Date): Meal[] {
        return this.meals.filter((meal) =>
            isSameDay(meal.eatenAt, day));
    }

    update(meal: Meal): boolean {  // the method recieves one argument called meal, and the type is Meal
        const mealIndex = this.meals.findIndex(   // this searches the meals array for a meal whose id matches the id of the new meal
            (existingMeal) => existingMeal.id === meal.id // the arrow function si the conditon used by findindex()
        ); // fore each existing meal in the array, check whether its ID mathces the ID of the meal being passed into update()

        if (mealIndex === -1) {
            return false; 
        }

        this.meals[mealIndex] = meal; 
        return true;
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