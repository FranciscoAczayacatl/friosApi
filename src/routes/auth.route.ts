import { Router } from 'express';
import { getPerfilUserHandler } from '../interfaces/auth/controllers/getPerfilUser.controller';
import { encryptPasswordMiddleware } from '../shared/middlewares/encryptPassword';
import { userInsertHandler } from '../interfaces/auth/controllers/userInsert.controller';
import { userLoginHandler } from '../interfaces/auth/controllers/userLogin.controller';
import { getUserNameByIdHandler } from '../interfaces/auth/controllers/userNameById.controller';

const router = Router()

router.get('/perfiles', getPerfilUserHandler );
router.post("/users/insert", encryptPasswordMiddleware, userInsertHandler);
router.post("/auth/login", userLoginHandler);
router.get("/users/name/:id", getUserNameByIdHandler);

// {
//     "IdUsuario":1,
//     "Nombre": "Francisco Aczayacatl Garcia Gomez",
//     "Usuario": "AdminSys",
//     "Contraseña": "Fr0nterra*",
//     "IdPerfil": 3,
//     "Activo": 1,
//     "Creador": "Admin"
// }
  

export default router;