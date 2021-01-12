import { exercise04, exercise04Chain } from "../04-exercise/04-exercise";

describe("04-exercise", function () {
    let logSpy = null;

    beforeAll(() => {
        logSpy = jest.spyOn(console, "log");
    });

    afterAll(() => {
        logSpy.mockRestore();
    });

    test("return a rejected promise in exercise04 with the value of the parameter", () => {
        expect.assertions(1);

        const expected = "it should reject";

        return expect(exercise04(expected)).rejects.toMatch(
            new RegExp(expected)
        );
    });

    test("return a promise in exercise04Chain", () => {
        expect.assertions(1);

        const expected = "it should reject";
        const expectedPromise = exercise04Chain(expected);

        expect(expectedPromise).toBeInstanceOf(Promise);
    });

    test("complete exercise04Chain to console.log the rejected value", () => {
        expect.assertions(1);

        const expected = "it should reject";

        return exercise04Chain(expected).then(() => {
            expect(logSpy).toHaveBeenCalledWith(expected);
        });
    });
});
