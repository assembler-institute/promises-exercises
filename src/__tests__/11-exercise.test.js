import exercise11 from "../11-exercise/11-exercise";
import { task } from "../utils/utils";

describe("11-exercise", function () {
    let logSpy = null;

    beforeAll(() => {
        logSpy = jest.spyOn(console, "log");
    });

    afterAll(() => {
        logSpy.mockRestore();
    });

    test("convert the exercise11 to be an async function", () => {
        const actual = Object.prototype.toString.call(exercise11);

        expect(actual).toMatch(/AsyncFunction/);
    });

    test("await for the exercise11, catch the error and console.log it", async () => {
        const expected = "something went wrong";

        function makeFailedPromise() {
            return task(expected, true);
        }

        expect(() => {
            exercise11(makeFailedPromise);
        }).not.toThrow();

        await exercise11(makeFailedPromise);

        expect(logSpy).toHaveBeenCalledWith(expected);
    });
});
