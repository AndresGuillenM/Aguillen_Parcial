import { request, Response,Application } from "express";
import {MantenimientoController } from "../controllers/mantenimiento.controlles";
import{EquipoController} from "../controllers/equipo.controller"


export class EquipoRoutes {
    public equipoController: EquipoController = new EquipoController();
    public routes(app: Application): void {
        app.route('/equipo').get(this.equipoController.index); 
    }
}



