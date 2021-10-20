
const Sequelize = require('sequelize');

import { database } from "../db.aGuillen/db";



export class Equipo extends Sequelize.Model {
    public marca!: string;
    public modelo!: string;
    

}

export interface EquipoI{

    marca: string;
     modelo: string;
 
}

Equipo.init (
    {
        
        marca: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },

        modelo: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
      
    },

    {
            tableName: "Equipos",
            sequelize: database, 
            timestamps: true
    }


);


