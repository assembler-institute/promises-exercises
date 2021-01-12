/**
 * Finish the code of the `exercise11` function bellow
 * so that it:
 *
 * 1. Receives a parameter named `promise` that is a Promise
 *
 * 2. The function should be of type `async`
 *
 * 3. The function should `await` for the `promise`
 *    parameter which means that you will
 *    need to execute it and await for it.
 *
 * 4. The promise call should be wrapped in a try catch block
 *    so that if the promise fails, you can catch the error
 *    and console.log the error.message
 */

// Finish the code of the function
function exercise11() {}

// Don’t change the code bellow this line
import setup11Exercise from "./11-exercise-setup";
import { task } from "../utils/utils";

if (process.env.NODE_ENV !== "test") {
    setup11Exercise(() => exercise11(() => task("something went wrong", true)));
}

export default exercise11;
