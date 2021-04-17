import { ErrorMath } from "../errorMath.js";

export const mathBasicOperation = (arg1, arg2, op) => (req, res, next) => {
  try {
    const { query } = req;
    const numb1 = Number(query[arg1]);
    const numb2 = Number(query[arg2]);
    const operation = query[op]?.toLowerCase();
    if (numb1 && !(typeof numb1 === "number")) {
      next(new ErrorMath(numb1, numb2, operation));
    } else if (numb2 && !(typeof numb1 === "number")) {
      next(new ErrorMath(numb1, numb2, operation));
    } else if (
      operation &&
      !["suma", "resta", "multiplicacion", "division"].includes(operation)
    ) {
      next(new ErrorMath(numb1, numb2, operation));
    }
    if (!operation && !numb1 && !numb2) {
      next(new ErrorMath(numb1, numb2, operation));
    }
    next();
  } catch (error) {
    next(new Error(error.message));
  }
};
