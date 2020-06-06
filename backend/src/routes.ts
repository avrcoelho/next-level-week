import express from "express";
import multer from "multer";
import { celebrate } from "celebrate";
import Joi from "@hapi/joi";

import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.post(
  "/points",
  upload.single("image"),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
      whatsapp: Joi.string().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      items: Joi.number().required(),
    }),
  }),
  pointsController.create
);
routes.get("/points/:id", pointsController.show);
routes.get("/points", pointsController.index);

export default routes;
