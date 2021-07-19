import ErrorRepository from '../app';

test.each([
  [1, 'Переменная не объявлена'],
  [2, 'Переменная объявлена второй раз'],
  [3, 'SyntaxError'],
  [4, 'Unknown error'],
])(
  ('should show correct desription of error'),
  (code, description) => {
    expect(new ErrorRepository().translate(code)).toBe(description);
  },
);
