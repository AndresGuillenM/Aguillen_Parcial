
const Sequelize = require('sequelize');

import { database } from "../db.aGuillen/db";
import { Equipo } from "./equipos";

export class Mantenimiento extends Sequelize.Model {
    public fecha!: string;
    public descripcion!: string;
    public resultado!: string;
   

}

export interface MantenimientoI{

    fecha: string;
    descripcion: string;
    resultado: string;
     
}

Mantenimiento.init (
    {
        
        fecha: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },

        descripcion: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        resultado: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        


    },

    {
            tableName: "MantenimientoI",
            sequelize: database, 
            timestamps: true
    }


);

Equipo.hasMany(Mantenimiento);
Mantenimiento.belongsTo(Equipo);

