const router = require("express").Router();


const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const recordRouter = require('./routes/recordRouter');





router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use("/record", recordRouter);






module.exports = router;