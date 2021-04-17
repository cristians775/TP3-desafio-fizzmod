export class ErrorMath extends Error {
  constructor(arg1, arg2, operation) {
    super();
    this.num1 = arg1;
    this.num2 = arg2;
    this.operation = operation;
    this.status = 400;
  }
  toJSON() {
    return {
      error: {
        num1: { valor: this.num1, tipo: typeof this.num1 },
        num2: { valor: this.num2, tipo: typeof this.num2 },
        operacion: { valor: this.operation, tipo: typeof this.operation },
      },
    };
  }
}
