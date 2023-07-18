const sum = require('./sum')

test("add 1 + 2 + 1 to be equal 4", () => {
    expect(sum(1,2)).toBe(4);
});