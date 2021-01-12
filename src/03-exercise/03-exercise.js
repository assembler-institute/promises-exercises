/**
 * Exercise 03:
 *
 * Finish the code of the `exercise03` function
 * so that it:
 *
 * 1. Receives a parameter named `reason`
 *
 * 2. returns a Promise.reject that receives as an argument
 *    the `reason` parameter that the `exercise03` function receives
 */

// Finish the code of the function
function exercise03(reason) {
    return Promise.reject(reason);
}

// Don’t change the code bellow this line
import setup03Exercise from "./03-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup03Exercise(exercise03);
}

export default exercise03;
