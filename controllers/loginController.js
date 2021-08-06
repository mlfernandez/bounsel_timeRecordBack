const userController = require('./userController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "Prueba tecnica bounsel";


class LoginController {
    async validate(emailCheck,passwordCheck){

            // Ver si el email esta registrado
        let user = await userController.findByEmail(emailCheck);

            // Si no existe, mostrar mensaje
        if (user == null) {
            throw new Error("El password o el email son incorrectos.");
          }

        let password = user.password;

        let check = await bcrypt.compare(passwordCheck, password);

 
        if(!check){
            throw new Error("El password o el email no coinciden");
            
        }

        let payload = {
            userId : user.id,
            createdAt: new Date(),
            admin: user.profile
        };


        return jwt.sign(payload,secret);

    }
}

let loginController = new LoginController();
module.exports = loginController;