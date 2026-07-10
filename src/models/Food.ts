export type ServingUnit = "g" | "oz" | "ml" | "piece";

export type Food = {
    id: number;
    name: string;

    servingSize: number;
    servingUnit: ServingUnit;

    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    sugar: number;
    sodium: number;
};