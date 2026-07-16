import type { Food } from "./Food.js";

export type MealType = // this is a union of string literals, meaning mealtype can only contain one of these 
    | "breakfeast"
    | "lunch"
    | "dinner"
    | "snack"
    | "other";

export type MealItem = {
    food: Food; 
    servings: number;
};

export type Meal = {
    id: number; 
    name: string; 
    mealType: MealType;
    eatenAt: Date;
    items: MealItem[];
    notes?: string;
};

export type CreateMealInput = Omit<Meal, "id">;  // omit is a built in ts utility type 
// it means create a new type based on meal, but remove the id proeprty 

export function getMealCalories(meal: Meal): number { // the parameter is meal and its type is Meal
    return meal.items.reduce(  // meal.items is an array we are accessing, reduce() loops through an array combine everyting into one final value
        (total,item) => total + item.food.calories * item.servings, 0 // sarting val is 0, ts calc the i.f.c * i.s and adds the result to total
    );
}

export function getMealProtein(meal: Meal): number {
    return meal.items.reduce(
        (total, item) => total + item.food.protein * item.servings,
        0
    );
}