export class WaterTracker { 

    private dailyGoal: number; 
    private currentWater: number; 

    constructor(dailyGoal: number) {
        this.dailyGoal = dailyGoal; // this refers to the specific object currently being created or used 
        this.currentWater = 0;
    }

    drink(amount: number): void { 
        if (amount <= 0) {
            throw new Error("Water amount must be greater than zero"); 
        }

        this.currentWater += amount;
    }

}