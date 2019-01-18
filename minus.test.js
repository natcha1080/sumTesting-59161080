const minus = require('./minus');
//test case 5 test case
//1. 9 - 5 เท่ากับ 4
test('9 - 5 เท่ากับ 4', () => {
    expect(minus(9,5)).toBe(4);
});

//2. 97 - 7 เท่ากับ ?
test('97 - 7 เท่ากับ ?', () => {
    expect(minus(97,7)).toBe(97-7);
});

//3. 65 - 35 เท่ากับ 30
test('65 - 35 เท่ากับ 30', () => {
    expect(minus(65,35)).toBe(30);
});

//4. 2 - 1 เท่ากับ ?
test('2 - 1 เท่ากับ ?', () => {
    expect(minus(2,1)).toBe(2-1);
});

//5. 86 - 10 เท่ากับ 76
test('86 - 10 เท่ากับ 76', () => {
    expect(minus(86,10)).toBe(76);
});