import exercise12 from "../12-exercise/12-exercise";

describe("12-exercise", function () {
    let logSpy = null;

    const FETCH_RESPONSE_DATA = {
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        username: "Bret",
        website: "hildegard.org",
    };

    const FETCH_REJECT_DATA = "API is down";

    beforeAll(() => {
        logSpy = jest.spyOn(console, "log");

        global.fetch = jest.fn(() => {
            return Promise.resolve({
                json() {
                    return Promise.resolve(FETCH_RESPONSE_DATA);
                },
            });
        });
    });

    beforeEach(() => {
        fetch.mockClear();
    });

    afterAll(() => {
        logSpy.mockRestore();
        fetch.mockRestore();
    });

    test("convert the exercise12 to be an async function", () => {
        const actual = Object.prototype.toString.call(exercise12);

        expect(actual).toMatch(/AsyncFunction/);
    });

    test("await for the fetch call and console.log the data", async () => {
        expect(() => exercise12()).not.toThrow();

        await exercise12();

        expect(logSpy).toHaveBeenCalledWith(
            expect.objectContaining(FETCH_RESPONSE_DATA)
        );
    });

    test("await for the fetch call and console.log if an exception is caught", async () => {
        fetch.mockImplementationOnce(() =>
            Promise.reject(new Error(FETCH_REJECT_DATA))
        );

        await exercise12();

        expect(logSpy).toHaveBeenCalledWith(FETCH_REJECT_DATA);
    });
});
