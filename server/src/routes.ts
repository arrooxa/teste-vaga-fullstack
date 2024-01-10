import { Router } from "express";
import { getHistories } from "./controller/history";

const routes = Router();

routes.get("/history", getHistories);

export default routes;
