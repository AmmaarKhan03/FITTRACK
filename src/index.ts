type Meal = { 
    name: string; 
    calories: number;
    protein: number;
    timestamp: Date;
};

function isSameDay(a: Date, b: Date): boolean {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

function getTotalCaloriesToday(meals: Meal[]): number {
    const today = new Date();

    return meals
        .filter((meal) => isSameDay(meal.timestamp, today))
        .reduce((total, meal) => total + meal.calories, 0);
}

function getTotalForDay(meals: Meal[], day: Date, field: "calories" | "protein"): number {
    return meals
        .filter((meal) => isSameDay(meal.timestamp, day))
        .reduce((total, meal) => total + meal[field], 0);
}

const meals: Meal[] = [
    {
        name: "Chicken Bowl",
        calories: 650,
        protein: 45,
        timestamp: new Date(),
    },
    {
        name: "Protein Shake",
        calories: 220,
        protein: 30,
        timestamp: new Date(),
    },
    {
        name: "Yesterday's Dinner",
        calories: 700,
        protein: 50,
        timestamp: new Date(2026, 6, 8),
    },
];

console.log("Calories today:", getTotalCaloriesToday(meals));

console.log(
    "Calories for today:",
    getTotalForDay(meals, new Date(), "calories")
);

console.log(
    "Protein for today:",
    getTotalForDay(meals, new Date(), "protein")
);

console.log(
    "Calories for July 8, 2026:",
    getTotalForDay(meals, new Date(2026, 6, 8), "calories")
);