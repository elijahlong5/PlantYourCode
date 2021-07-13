const translatePlantLatin = require('../Level 1/translatePlantLatin2')

test('test translatePlantLatin', () => {
    expect(translatePlantLatin("I love water!")).toBe("Imus lophylumvellia wativatelliar!");
});

test('test translatePlantLatin2', () => {
    expect(translatePlantLatin("YoU")).toBe("YophylumUrea");
});

// import test from 'jest'
//
//
// function sum (a, b) {return a + b};
// test('sum func', () => {
//     sum(1,2).toBe(3)
// })
