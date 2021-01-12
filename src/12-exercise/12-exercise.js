/**
 * Finish the code of the `exercise12` function bellow
 * so that it:
 *
 * 1. Receives a parameter named `url` that is the URL
 *    that .fetch() should make a request to
 *
 * 2. The function should be of type `async`
 *
 * 3. The function should `await` for the `fetch(url)` call
 *
 *    You will need to wait for both the `result` and `json()`
 *    calls that fetch() returns because, if you remember,
 *    fetch returns a stream and we need to execute the
 *    json() method of the first response from fetch()
 *    in order to get the actual data.
 *
 * 4. The promise call should be wrapped in a try catch block
 *    so that if fetch() fails, you can catch the error
 *    and console.log the error.message
 *
 * 5. If it doesn’t failt, you should also console.log
 *    the final result
 */

// Finish the code of the function
async function exercise12(
    url = "https://jsonplaceholder.typicode.com/users/1"
) {
    try {
        const result = await fetch(url);

        const json = await result.json();

        console.log(json);
    } catch (error) {
        console.log(error.message);
    }
}

// Don’t change the code bellow this line
import setup12Exercise from "./12-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup12Exercise(() => exercise12());
}

export default exercise12;
