import Math from './Math';

const math = new Math();

test('add two numbers', () => {
  const result = math.add(2, 4);

  expect(result).toEqual(6);
});

test('substract one number from another', () => {
  const result = math.subtract(3, 6);

  expect(result).toEqual(-3);
});

test('failing test', () => {
  const result = math.add(1, 1);

  expect(result).toEqual(3);
});
