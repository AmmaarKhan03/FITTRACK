import { WorkoutTimer } from "./models/WorkoutTimer.js";

const workoutTimer = new WorkoutTimer();

workoutTimer.start();

console.log("Running:", workoutTimer.isRunning());
console.log("Paused:", workoutTimer.isPaused());

workoutTimer.pause();

console.log("Running after pause:", workoutTimer.isRunning());
console.log("Paused after pause:", workoutTimer.isPaused());

workoutTimer.resume();

console.log("Running after resume:", workoutTimer.isRunning());
console.log("Paused after resume:", workoutTimer.isPaused());