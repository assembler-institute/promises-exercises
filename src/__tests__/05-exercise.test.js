import { exercise05, exercise05Chain } from "../05-exercise/05-exercise";

describe("05-exercise", function () {
    let logSpy = null;

    beforeAll(() => {
        logSpy = jest.spyOn(console, "log");
    });

    afterAll(() => {
        logSpy.mockRestore();
    });

    test("return a new promise that resolves in exercise05 with the value of the parameter", () => {
        expect.assertions(1);

        const expected = "it should resolve";

        return expect(exercise05(expected)).resolves.toMatch(
            new RegExp(expected)
        );
    });

    test("return a promise in exercise05Chain", () => {
        expect.assertions(1);

        const expected = "it should resolve";
        const expectedPromise = exercise05Chain(expected);

        expect(expectedPromise).toBeInstanceOf(Promise);
    });

    test("complete exercise05Chain to console.log the resolved value", () => {
        expect.assertions(1);

        const expected = "it should resolve";

        return exercise05Chain(expected).then(() => {
            expect(logSpy).toHaveBeenCalledWith(expected);
        });
    });
});
