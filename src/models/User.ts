export type User = {
    id: number;

    name: string;

    email: string;

    active: boolean;

    age: number;

    height: number;

    weight: number;

    dailyWaterGoal: number;

    activityLevel:
        | "sedentary"
        | "light"
        | "moderate"
        | "active";

    goal:
        | "lose"
        | "maintain"
        | "gain";
}