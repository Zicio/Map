export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[1, 'Переменная не объявлена'], [2, 'Переменная объявлена второй раз'], [3, 'SyntaxError']]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
