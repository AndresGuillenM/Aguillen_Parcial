import { Request, Response } from "express";
import { Mantenimiento } from "../models/mantenimiento";


export class MantenimientoController {
    public index(req: Request, res: Response) {
        
        Mantenimiento.findAll({})   //para traer todos los registros que tengan usuarios 
        .then((mantenimientos: Array<Mantenimiento>) => res.json(mantenimientos))
        .catch((err: Error) => res.status(500).json(err));
    }

    

    }

    
