import express from "express";

import  ClassesController from "./controllers/ClassesController"
import ConnectionsController from "./controllers/ConnectionsController"

const routes = express.Router();
const classesControllers = new ClassesController()
const connectionsController = new ConnectionsController()

//criando aulas
routes.get('/classes',classesControllers.index);
//listagem das aulas
routes.post('/classes',classesControllers.create); 

//conexões
routes.get('/connections',connectionsController.index )
routes.post('/connections',connectionsController.create )

export default routes;
