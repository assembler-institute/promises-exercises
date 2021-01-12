import exercise08 from "../08-exercise/08-exercise";

describe("08-exercise", function () {
    test("promisify the function so that it resolves with the sum", async () => {
        const result = await exercise08(2, 4);

        expect(result).toBe(6);
    });

    test("promisify the function so that it rejects if the second param is undefined", () => {
        return expect(exercise08(2)).rejects.toMatch(
            /Both params need to be defined!/i
        );
    });

    test("promisify the function so that it rejects if the first param is undefined", () => {
        return expect(exercise08(undefined, 2)).rejects.toMatch(
            /Both params need to be defined!/i
        );
    });

    test("promisify the function so that it rejects if both params are undefined", () => {
        return expect(exercise08()).rejects.toMatch(
            /Both params need to be defined!/i
        );
    });
});
