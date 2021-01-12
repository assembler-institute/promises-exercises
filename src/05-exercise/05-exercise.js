/**
 * Exercise 05:
 *
 * Finish the code of the `exercise05` function
 * so that it returns a new instance of a Promise.
 *
 * The Promise should call the `resolve` callback
 * with the value of the parameter that the `exercise05`
 * function receives initially.
 *
 * To create a Promise you can do it the following way:
 *
 * @example
 *
 * new Promise((resolve, reject) => { ... })
 */

// Finish the code of the function
function exercise05() {}
/**
 * Finish the code of the `exercise05Chain` function bellow
 * so that it:
 *
 * 1. Receives a `message` parameter
 *
 * 2. Returns and executes the `exercise05` promise
 *    while passing it the `message` parameter as an argument
 *
 * 3. And chains a .then() method call on the `exercise05` promise.
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
function exercise05Chain() {}

// Don’t change the code bellow this line
import setup05Exercise from "./05-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup05Exercise(() => exercise05Chain("hello-world"));
}

export { exercise05, exercise05Chain };
