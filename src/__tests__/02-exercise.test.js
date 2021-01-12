import { exercise02, exercise02Chain } from "../02-exercise/02-exercise";

describe("02-exercise", function () {
    let logSpy = null;

    beforeAll(() => {
        logSpy = jest.spyOn(console, "log");
    });

    afterAll(() => {
        logSpy.mockRestore();
    });

    test("return a resolved promise in exercise02 with the value of the parameter", () => {
        expect.assertions(1);

        const expected = "it should resolve";

        return expect(exercise02(expected)).resolves.toMatch(
            new RegExp(expected)
        );
    });

    test("return a promise in exercise02Chain", () => {
        expect.assertions(1);

        const expected = "it should resolve";
        const expectedPromise = exercise02Chain(expected);

        expect(expectedPromise).toBeInstanceOf(Promise);
    });

    test("complete exercise02Chain to console.log the resolved value", () => {
        expect.assertions(1);

        const expected = "it should resolve";

        return exercise02Chain(expected).then(() => {
            expect(logSpy).toHaveBeenCalledWith(expected);
        });
    });
});
