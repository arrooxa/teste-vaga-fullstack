import { Router } from "express";
import { getRecords } from "./controller/records";

const routes = Router();

routes.get("/records", getRecords);

export default routes;
