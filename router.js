const router = require("express").Router();

const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');



router.use('/login', loginRouter);
router.use('/user', userRouter);





module.exports = router;