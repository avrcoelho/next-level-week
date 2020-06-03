import express from "express";
import path from "path";
import cors from "cors";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.listen(3333);
