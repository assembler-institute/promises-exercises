/**
 * Exercise 02:
 *
 * Finish the code of the `exercise02` function
 * so that it returns a Promise.resolve with the value
 * of the parameter that the `exercise02` function receives
 */

// Finish the code of the function
function exercise02(message) {
    return Promise.resolve(message);
}
/**
 * Finish the code of the `exercise02Chain` function bellow
 * so that it:
 *
 * 1. Receives a `message` parameter
 *
 * 2. Returns and executes the `exercise02` promise
 *    while passing it the `message` parameter as an argument
 *
 * 3. And chains a .then() method call on the `exercise02` promise.
 *    that receives the `message` as a parameter of the
 *    .then((message) => {...}) method and it console.logs
 *     the value of the `message` parameter
 *
 * @example
 *
 * return myPromise(argument).then((data) => {
 *    console.log(data);
 * })
 */

// Finish the code of the function
function exercise02Chain(message) {
    return exercise02(message).then((result) => {
        console.log(result);
    });
}

// Don’t change the code bellow this line
import setup02Exercise from "./02-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup02Exercise(() => exercise02Chain("hello-world"));
}

export { exercise02, exercise02Chain };
