const router = require("express").Router();
const recordController = require("../controllers/recordController");
const admin = require("../middleware/admin");
const authenticate = require("../middleware/authenticate");



// Crear un registro nuevo
router.post("/", async (req, res) => {
    try {
      const body = req.body;
  
      res.json(await recordController.newRecord(body));
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  });


  // encuentra los registros de un usuario
router.post('/records', async (req, res) => {
    try{
        const idUser = req.body.idUser;
        res.json(await recordController.userRecord(idUser));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

  // encuentra los registros de un usuario en una fecha
  router.post('/records/filter', async (req, res) => {
    try{
        const body = req.body;
        res.json(await recordController.userRecordDateFilter(body));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})


module.exports = router;