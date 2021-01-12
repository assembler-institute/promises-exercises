import { exercise07, exercise07Chain } from "../07-exercise/07-exercise";

describe("07-exercise", function () {
    let logSpy = null;

    beforeAll(() => {
        logSpy = jest.spyOn(console, "log");
    });

    afterEach(() => {
        logSpy.mockClear();
    });

    afterAll(() => {
        logSpy.mockRestore();
    });

    test("return a promise that rejects if the boolean is true", () => {
        expect.assertions(1);

        const expected = "it should reject";

        return expect(exercise07(true, expected)).rejects.toMatch(
            new RegExp(expected)
        );
    });

    test("return a promise that resolves if the boolean is false", () => {
        expect.assertions(1);

        const expected = "it should resolve";

        return expect(exercise07(false, expected)).resolves.toMatch(
            new RegExp(expected)
        );
    });

    test("return a new promise that rejects in exercise07Chain", () => {
        expect.assertions(1);

        const expected = "it should reject";
        const expectedPromise = exercise07Chain(true, expected);

        expect(expectedPromise).toBeInstanceOf(Promise);
    });

    test("complete exercise07Chain to console.log the rejected value", () => {
        expect.assertions(1);

        const expected = "it should reject";

        return exercise07Chain(true, expected).then(() => {
            expect(logSpy).toHaveBeenCalledWith(expected);
        });
    });

    test("return a new promise that resolves in exercise07Chain", () => {
        expect.assertions(1);

        const expected = "it should resolve";
        const expectedPromise = exercise07Chain(false, expected);

        expect(expectedPromise).toBeInstanceOf(Promise);
    });

    test("complete exercise07Chain to console.log the resolved value", () => {
        expect.assertions(1);

        const expected = "it should resolve";

        return exercise07Chain(false, expected).then(() => {
            expect(logSpy).toHaveBeenCalledWith(expected);
        });
    });
});
