/**
 * Finish the code of the `exercise09` function bellow
 * so that it:
 *
 * 1. Receives 3 parameters named `promise1, promise2, promise3`
 *    that are all promises
 *
 * 2. Returns a Promise.all that receives an array of the 3 parameters
 *
 * 3. Chains a .then() method call on the Promise.all call
 *    that receives an array with the results of each promise
 *    and it console.logs the value of the [1] result
 */

// Finish the code of the function
function exercise09() {}

// Don’t change the code bellow this line
import setup09Exercise from "./09-exercise-setup";
import { task } from "../utils/utils";

if (process.env.NODE_ENV !== "test") {
    setup09Exercise(() =>
        exercise09(task("hello"), task("world"), task("test"))
    );
}

export default exercise09;
