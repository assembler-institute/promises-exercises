import exercise09 from "../09-exercise/09-exercise";
import { task } from "../utils/utils";

describe("09-exercise", function () {
    let logSpy = null;

    beforeAll(() => {
        logSpy = jest.spyOn(console, "log");
    });

    afterAll(() => {
        logSpy.mockRestore();
    });

    test("return a Promise.all that logs the [1] result", async () => {
        const expected = "world";

        return exercise09(task("hello"), task(expected), task("test")).then(
            () => {
                expect(logSpy).toHaveBeenCalledWith(expected);
            }
        );
    });
});
