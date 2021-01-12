/**
 * Exercise 07:
 *
 * Finish the code of the `exercise07` function so that it:
 *
 * 1. Receives a boolean parameter named `shouldFail`
 *
 * 2. Receives a string parameter named `message`
 *
 * 3. Returns a new Promise that should reject if the `shouldFail`
 *    boolean is true, and if not it should resolve it
 *
 *    In either case, if it resolves or rejects, it should be
 *    rejected or resolved with the `message` parameter
 */

// Finish the code of the function
function exercise07() {}

/**
 * Finish the code of the `exercise07Chain` function bellow
 * so that it:
 *
 * 1. Receives a boolean parameter named `shouldFail`
 *
 * 2. Receives a string parameter named `message`
 *
 * 3. Returns and executes the `exercise07` promise
 *    while passing it the `shouldFail` and `message`
 *    parameters as arguments
 *
 * 4. Chains a .then() method call on the `exercise07` promise.
 *    that receives the `message` as a parameter of the
 *    .then((message) => {...}) method and it console.logs
 *     the value of the `message` parameter
 *
 * 5. Chains a .catch() method call on the `exercise07` promise.
 *    that receives the `message` as a parameter of the
 *    .catch((message) => {...}) method and it console.logs
 *     the value of the `message` parameter
 */

// Finish the code of the function
function exercise07Chain() {}

// Don’t change the code bellow this line
import setup07Exercise from "./07-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup07Exercise(() => exercise07Chain(false, "worked just fine"));
    setup07Exercise(() => exercise07Chain(true, "ups!"));
}

export { exercise07, exercise07Chain };
