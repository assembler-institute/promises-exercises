import { exercise06, exercise06Chain } from "../06-exercise/06-exercise";

describe("06-exercise", function () {
    let logSpy = null;

    beforeAll(() => {
        logSpy = jest.spyOn(console, "log");
    });

    afterAll(() => {
        logSpy.mockRestore();
    });

    test("return a new promise that rejects in exercise06 with the value of the parameter", () => {
        expect.assertions(1);

        const expected = "it should reject";

        return expect(exercise06(expected)).rejects.toMatch(
            new RegExp(expected)
        );
    });

    test("return a new promise that rejects in exercise06Chain", () => {
        expect.assertions(1);

        const expected = "it should reject";
        const expectedPromise = exercise06Chain(expected);

        expect(expectedPromise).toBeInstanceOf(Promise);
    });

    test("complete exercise06Chain to console.log the rejected value", () => {
        expect.assertions(1);

        const expected = "it should reject";

        return exercise06Chain(expected).then(() => {
            expect(logSpy).toHaveBeenCalledWith(expected);
        });
    });
});
