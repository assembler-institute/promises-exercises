/**
 * Exercise 06:
 *
 * Finish the code of the `exercise06` function
 * so that it returns a new instance of a Promise.
 *
 * The Promise should call the `reject` callback
 * with the value of the parameter that the `exercise06`
 * function receives initially.
 *
 * To create a Promise you can do it the following way:
 *
 * @example
 *
 * new Promise((resolve, reject) => { ... })
 */

// Finish the code of the function
function exercise06() {}
/**
 * Finish the code of the `exercise06Chain` function bellow
 * so that it:
 *
 * 1. Receives a `reason` parameter
 *
 * 2. Returns and executes the `exercise06` promise
 *    while passing it the `reason` parameter as an argument
 *
 * 3. And chains a .catch() method call on the `exercise06` promise.
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
function exercise06Chain() {}

// Don’t change the code bellow this line
import setup06Exercise from "./06-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup06Exercise(() => exercise06Chain("hello-world"));
}

export { exercise06, exercise06Chain };
