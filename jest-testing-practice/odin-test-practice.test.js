const { sum, capitalize, reverse, calculator, caesarCipher, analyzeArray } = require('./odin-test-practice');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('Capitalize String', () => {
test('capitalize letter in word', () => {
  expect(capitalize('cat')).toBe('Cat');
});

test('capitalize letter in phrase', () => {
  expect(capitalize('this is hard')).toBe('This is hard');
});
})

describe('Reverse string', () => {
test('reverse word', () => {
  expect(reverse('cat')).toBe('tac');
})

test('reverse phrase', () => {
  expect(reverse('this phrase')).toBe('esarhp siht');
})

test('reverse numbers', () => {
  expect(reverse('01234')).toBe('43210')
})
})

describe('calculator', () => {
test('calculator add', () => {
  expect(calculator().add(1, 2)).toBe(3);
})

test('calculator subtract', () => {
  expect(calculator().subtract(5, 4)).toBe(1)
})

test('calculator multiply', () => {
  expect(calculator().multiply(5, 4)).toBe(20)
})

test('calculator divide', () => {
  expect(calculator().divide(20, 4)).toBe(5)
})

test('divide by zero', () => {
  expect(calculator().divide(4, 0)).toBe(NaN);
})
})


describe('caesarCipher', () => {
  test('wrap', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
  })

  test('caseSensitive', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
  })

  test('punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
  })

  test('shift 4', () => {
    expect(caesarCipher('abcd', 4)).toBe('efgh')
  })

})

test('analyzeArray', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
   average: 4,
   min: 1,
   max: 8,
   length: 6
})
})