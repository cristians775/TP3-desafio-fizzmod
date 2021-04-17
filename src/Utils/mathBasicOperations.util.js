import { ErrorMath } from "../errors/errorMath.js";

export const mathBasicOperations = (number1, number2, operation) => {
  let result;
  switch (operation) {
    case "suma":
      result = number1 + number2;
      break;
    case "resta":
      result = number1 - number2;
      break;
    case "multiplicacion":
      result = number1 * number2;
      break;
    case "division":
      if (number2 === 0) {
        throw new ErrorMath(number1, number2, operation);
      }
      result = number1 / number2;
      break;
    default:
      result = null;
  }
  return result;
};
