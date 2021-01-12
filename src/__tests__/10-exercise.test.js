import exercise10 from "../10-exercise/10-exercise";
import { task } from "../utils/utils";

describe("10-exercise", function () {
    let logSpy = null;

    beforeAll(() => {
        logSpy = jest.spyOn(console, "log");
    });

    afterAll(() => {
        logSpy.mockRestore();
    });

    test("convert the exercise10 to be an async function", () => {
        const actual = Object.prototype.toString.call(exercise10);

        expect(actual).toMatch(/AsyncFunction/);
    });

    test("await for the result of the exercise10 and console.log it", async () => {
        const expected = "hello-world";

        await exercise10(function makePromise() {
            return task(expected);
        });

        expect(logSpy).toHaveBeenCalledWith(expected);
    });
});
