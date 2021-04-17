import { numbersRandom } from "../Utils/numbersRandom.util.js";
export const exerciseTwo = (req, res, next) => {
  const arrayValues = [];
  for (let i = 0; i <= 20; i++) arrayValues.push(0);
  for (let i = 0; i <= 10000; i++) {
    arrayValues[numbersRandom(1, 20)]++;
  }
  const { 0: zero, ...dataResult } = { ...arrayValues };
  res.send(dataResult);
};
