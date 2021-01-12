import exercise01 from "../01-exercise/01-exercise";

describe("01-exercise", function () {
    test("return a resolved promise with the value of the parameter", () => {
        expect.assertions(1);

        const expected = "it should resolve";

        return expect(exercise01(expected)).resolves.toMatch(
            new RegExp(expected)
        );
    });
});
