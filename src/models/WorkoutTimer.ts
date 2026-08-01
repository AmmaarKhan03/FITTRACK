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

    pause(): void {
        if (this.status !== "running") {
            throw new Error("only a running timer can be paused");
        }

        this.pausedAt = new Date(); 
        this.status = "paused";
    }

    resume(): void {
        if (this.status !== "paused" || this.pausedAt === null) {
            throw new Error("Only a paused timer can be resumed.");
        }

        const resumedAt = new Date();

        const pausedDuration =
            resumedAt.getTime() - this.pausedAt.getTime();

        this.totalPausedMilliseconds += pausedDuration;
        this.pausedAt = null;
        this.status = "running";
    }

    stop(): void {
        if (this.status !== "running" && this.pausedAt !== null) {
            const stoppedAt = new Date();

            const finalPausedDuration = 
                stoppedAt.getTime() - this.pausedAt.getTime();

            this.totalPausedMilliseconds += finalPausedDuration; 
            this.pausedAt = null; 
            this.endedAt = stoppedAt; 
        } else {
            this.endedAt = new Date();
        }
        this.status = "stopped"
    }

    isRunning(): boolean {
        return this.status === "running";
    }

    isPaused(): boolean {
        return this.status === "paused";
    }
}