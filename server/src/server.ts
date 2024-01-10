import express from "express";
import routes from "./routes";

const app = express();

const PORT = 3001;

app.use(express.json());

app.use(routes);

app.listen(PORT, () => `server running on port ${PORT}`);
