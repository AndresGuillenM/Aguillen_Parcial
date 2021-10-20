import { Request, Response } from "express";
import { Equipo } from "../models/equipos";



export class EquipoController {
    public index(req: Request, res: Response) {
        
        Equipo.findAll({})   //para traer todos los registros que tengan usuarios 
        .then((equipos: Array<Equipo>) => res.json(equipos))
        .catch((err: Error) => res.status(500).json(err));
    }

    

    }
