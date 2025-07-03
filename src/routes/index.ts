import { Router } from 'express';
import  friosRoutes from './frios.route'
import authRoutes from './auth.route'
import calidadRoutes from './calida.route'


const router = Router();

router.use('/Frios/v1', friosRoutes);
router.use('/Auth/v1', authRoutes);
router.use('/Calidad/v1', calidadRoutes);


export default router;