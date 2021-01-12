/**
 * Finish the code of the `exercise10` function bellow
 * so that it:
 *
 * 1. Receives a parameter named `promise` that is a Promise
 *
 * 2. The function should be of type `async`
 *
 * 3. The function should `await` for the response of the
 *    `promise` parameter which means that you will
 *     need to execute it and await for the result.
 *
 * 4. The result of calling `await` should be stored in a variable
 *    which you will have to pass as an argument to console.log
 */

// Finish the code of the function
function exercise10() {}

// Don’t change the code bellow this line
import setup10Exercise from "./10-exercise-setup";
import { task } from "../utils/utils";

if (process.env.NODE_ENV !== "test") {
    setup10Exercise(() => exercise10(() => task("hello")));
}

export default exercise10;
