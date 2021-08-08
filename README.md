<a name="top"></a>

<h1>Backend timeRecord</h1>



:speech_balloon: [About](#id1)   

:hammer: [Tools](#id2)

:eye_speech_bubble: [Backend](#id3)

---

<a name="id1"></a>
## **About**

Backend correspondiente a una prueba técnica de Bounsel.

Agregar la funcionalidad nueva a una aplicación para que registre el tiempo de conexión de un usuario, desde el login hasta el logout o el cierre del browser.

Condiciones:

* Solo una llamada a la API para obtener los registros.
* Los registros de un usuario se deben buscar entre dos fechas.
* Se deben ver los registros en el Frontend.


---
**Start date:** 06 / 08 /2021
**Deadline:** 08 / 08 / 2021


**Contributors:**
* [Mariana Fernández Sacristán](https://github.com/mlfernandez)

---

<a name="id2"></a>

## **Tools**

Se utilizaron las siguientes tecnologías:

| <img src="img/logovisual.png" alt="Visual" width="30"/> | Visual Studio Code |

| <img src="img/javascript2.png" alt="JavaScript" width="30"/> | JavaScript | 

| <img src="img/nodejs.png" alt="NodeExpress" width="30"/> | NODE JS & EXPRESS |

| <img src="img/axios.png" alt="Axios" width="30"/> | AXIOS | 

| <img src="img/git.png" alt="Git" width="30"/> | Git |

| <img src="img/github2.png" alt="GitHub" width="30"/> | GitHub | 

| <img src="img/postman.png" alt="Postman" width="30"/> | Postman |



<a name="id3"></a>

## **Backend**

<img src="img/modeloER.JPG" alt="ModeloER"/>

Se definieron los siguientes modelos:

Se establecieron que serían necesarios los siguientes modelos:


**Modelo user:**
Los atributos fueron definidos pensando en los datos que necesita un sistema bancario. 

* name // string, // Nombre del usuario
* lastName / lastName2 // string //  Apellidos del usuario
* email // string // email del usuario, verifica que sea único, si se hace el registro..
* password // string // a modo de dato dummy se utiliza uno que no cumple los requisitos de seguridad.
* profile // string // "admin" o "user"


**Modelo record:** 

* stratTime // date // fecha de comienzo de registro
* endTime // date // fecha de fin de registro
* user_id // integer // id del usuario

**Colección em Postman:**

[Ver documentación de Postman](https://documenter.getpostman.com/view/15824691/TzskENcX)