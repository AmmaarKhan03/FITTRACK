export type TimerStatus =
    | "idle"
    | "running"
    | "paused"
    | "stopped";

export class WorkoutTimer {
    private startedAt: Date | null = null;
    private endedAt: Date | null = null;
    private pausedAt: Date | null = null;
    private totalPausedMilliseconds = 0;
    private status: TimerStatus = "idle";

    start(): void {
        if (this.status !== "idle") {
            throw new Error("The timer has already been started.");
        }

        this.startedAt = new Date();
        this.status = "running";
    }

    isRunning(): boolean {
        return this.status === "running";
    }
}