const { Record } = require("../models");
const bcrypt = require('bcrypt');

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
    

}

let recordController = new Time();
module.exports = recordController;