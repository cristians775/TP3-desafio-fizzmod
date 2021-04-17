import { Router } from "express";
import { exerciseOne } from "../resolvers/exercise-one.resolver.js";
import { exerciseTwo } from "../resolvers/exercise-two.resolver.js";
import { exerciseThree } from "../resolvers/exercise-three.resolver.js";
import { exerciseFour } from "../resolvers/exercise-four.resolver.js";
import { mathBasicOperation } from "../errors/validations/mathBasicOperation.validation.js";
const indexRoute = Router();

indexRoute.get("/", exerciseOne);

indexRoute.get("/random", exerciseTwo);

indexRoute.get("/info", exerciseThree);

indexRoute.get(
  "/operaciones",
  mathBasicOperation("num1", "num2", "operacion"),
  exerciseFour
);

export default indexRoute;
