/**
 * Exercise 08:
 *
 * In this exercise you will learn how to Promisify a function
 * The base function returns an error if any of the parameters
 * are undefined.
 *
 * Your job is to convert the function to a Promise that
 * resolves the sum of the parameters or it rejects the promise
 * if any of the parameters are undefined.
 *
 * Finish the code of the `exercise08` function so that it:
 *
 * 1. Receives a parameter named `a`
 *
 * 2. Receives a parameter named `b`
 *
 * 3. Returns a new Promise that should reject if any of the
 *    parameters are undefined.
 *
 *    The promise should resolve the sum of both parameters
 *    or reject the same error message from the initial function
 */

// Finish the code of the function
function exercise08(a, b) {
    // if (a === undefined || b === undefined) {
    //     return "Both params need to be defined!";
    // }

    // return a + b;

    return new Promise((resolve, reject) => {
        if (a === undefined || b === undefined) {
            reject("Both params need to be defined!");
        }

        resolve(a + b);
    });
}

// Don’t change the code bellow this line
import setup08Exercise from "./08-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup08Exercise(() => exercise08());
}

export default exercise08;
