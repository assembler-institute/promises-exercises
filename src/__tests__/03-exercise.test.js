import exercise03 from "../03-exercise/03-exercise";

describe("03-exercise", function () {
    test("return a rejected promise with the reason of the parameter", () => {
        expect.assertions(1);

        const expected = "it should reject";

        return expect(exercise03(expected)).rejects.toMatch(
            new RegExp(expected)
        );
    });
});
