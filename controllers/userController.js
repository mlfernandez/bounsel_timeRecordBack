const { User } = require("../models");
const bcrypt = require('bcrypt');

class Person {

        // crear un usuario nuevo

    async newUser(user) {
        user.password = await bcrypt.hash(user.password, 10);
        user.password2 = await bcrypt.hash(user.password2, 10);
            
    
        user = {
            name : user.name,
            lastName : user.lastName,
            lastName2 : user.lastName2,
            email: user.email,
            password: user.password,
          }
          
    
          // Ver si el email esta registrado
        let checkUser = await userController.findByEmail(user.email);

          // Si no existe, mostrar mensaje
        if (checkUser === null) {

          let usuario = await User.create(user);
      
          return usuario;
          
        } else {

          throw new Error("El usuario ya existe.");
        }
        
    
      }
    

    // encontrar todos los usuarios
  async findAllUsers() {
    return User.findAll();
  }

    // encontrar usuarios por email
  async findByEmail(email) {
    return User.findOne({
      where: { email },
    });
  }

    // encontrar usuarios por id
  async findByUserId(data) {
    return User.findByPk(data);

}
    // modificar datos usuario
  async modifyUser(cuerpoDeDatos) {
    console.log(cuerpoDeDatos)
    await User.update(

      //datos que cambiamos
      {
        name: cuerpoDeDatos.name,
        lastName: cuerpoDeDatos.lastName,
        lastName2: cuerpoDeDatos.lastName2,
        email: cuerpoDeDatos.email,
        password: cuerpoDeDatos.password,

      },
      //donde
      { where: { id: cuerpoDeDatos.idUser } }
   
    )

    let resultado = this.findByUserId(cuerpoDeDatos.idUser);

    return resultado;
  }

    // eliminar usuario
  async deleteUser(id) {
    return User.destroy({ where: { id: id } });
  }

}

let userController = new Person();
module.exports = userController;
