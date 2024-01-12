import { Router } from "express";
import { getRecords } from "./controller/records";
import validate from "./middleware/validator";
import { getUsers } from "./validation";

const routes = Router();

routes.get("/records", validate(getUsers), getRecords);

export default routes;
