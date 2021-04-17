import { mathBasicOperations } from "../Utils/mathBasicOperations.util.js";

export const exerciseFour = (req, res, next) => {
  try {
    const { query } = req;
    const { num1, num2, operacion } = query;
    const number1 = Number(num1);
    const number2 = Number(num2);
    const operation = operacion.toLowerCase();
    let result = mathBasicOperations(number1, number2, operation);
    res.send({ valor1: number1, valor2: number2, resultado: result });
  } catch (error) {
    next(error);
  }
};
