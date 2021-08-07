const { Record, sequelize } = require("../models");
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { QueryTypes } = require('sequelize');
const moment = require("moment");

class Time {

        // crear un registro nuevo

    async newRecord(record) {
        record = {
            startTime : record.startTime,
            endTime : record.endTime,
            idUser : record.idUser
          }

          let timeRecord = await Record.create(record);
      
          return timeRecord;    
      }
    
        // encontrar registros de un usuario

    async userRecord(idUser) {
        return Record.findAll({
            where: {idUser: idUser},
        });
    }

    async userRecordDateFilter(body) {

        let startTime = moment(body.startTime).format('YYYY/MM/DD');
        let endTime = moment(body.endTime).format('YYYY/MM/DD');
        let idUser = body.idUser;

        let consulta = "SELECT * ,  TIMESTAMPDIFF(minute, startTime, endTime) AS timeRecord FROM records where startTime >= CAST('" + startTime + "' AS DATE) AND endTime <= CAST('" + endTime + "' AS DATE) AND idUser ="+ idUser 

        const results = await sequelize.query(consulta, { type: QueryTypes.SELECT });
        console.log(results)
        return results


}
    

}

let recordController = new Time();
module.exports = recordController;