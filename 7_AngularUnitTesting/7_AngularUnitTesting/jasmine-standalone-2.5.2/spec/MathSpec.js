describe("MathTests", function () {
    it("Must return sum of 2 integers", function () {
        expect(Add(2, 3)).toBe(5);
    });

    it("Must return sum of 2 floats", function () {
        expect(Add(2, 3)).toBe(5);
    });
});