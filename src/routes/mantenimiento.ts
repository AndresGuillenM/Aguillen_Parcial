import { request, Response,Application } from "express";
import {MantenimientoController } from "../controllers/mantenimiento.controlles";


export class MantenimientoRoutes {
    public mantenimientoController: MantenimientoController = new MantenimientoController();
    public routes(app: Application): void {
        app.route('/mantenimiento').get(this.mantenimientoController.index); 
    }
}
