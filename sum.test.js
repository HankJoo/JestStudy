const sum = require('./sum');

test('adds 1+ 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});


//Object 비교..toEqual
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

//0이 아닐 때, 성공으로..not.//그 외 toBeNull, toBeUndefined, toBeDefined, toBeTruthy toBeFalsy..등이 있음.
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
            //console.log(a,b)
        }
    }
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

//numbers
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);     //> 3
    expect(value).toBeGreaterThanOrEqual(3.5);  // >= 3.5
    expect(value).toBeLessThan(5); //<5
    expect(value).toBeLessThanOrEqual(4.5); // <=4.5

    // toBe and toEqual are equivalent for numbers //둘다 동일함
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

//float는 좀 다르게
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    console.log(value);
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.///****
});

//Strings  //regular expressions
test('there is no I in team', () => {
    expect('team').not.toMatch(/T/);
});

//Strings
test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stoph/);
});
