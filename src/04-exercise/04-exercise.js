/**
 * Exercise 04:
 *
 * Finish the code of the `exercise04` function
 * so that it returns a Promise.reject with the value
 * of the parameter that the `exercise04` function receives
 */

// Finish the code of the function
function exercise04(reason) {
    return Promise.reject(reason);
}
/**
 * Finish the code of the `exercise04Chain` function bellow
 * so that it:
 *
 * 1. Receives a `reason` parameter
 *
 * 2. Returns and executes the `exercise04` promise
 *    while passing it the `reason` parameter as an argument
 *
 * 3. And chains a .catch() method call on the `exercise04` promise.
 *    that receives the `reason` as a parameter of the
 *    .catch((reason) => {...}) method and it console.logs
 *     the value of the `reason` parameter
 *
 * @example
 *
 * return myPromise(argument).catch((data) => {
 *    console.log(data);
 * })
 */

// Finish the code of the function
function exercise04Chain(reason) {
    return exercise04(reason).catch((result) => {
        console.log(result);
    });
}

// Don’t change the code bellow this line
import setup04Exercise from "./04-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup04Exercise(() => exercise04Chain("hello-world"));
}

export { exercise04, exercise04Chain };
