import express, {IRouter} from 'express'
// import dataController from '../controllers/dataController'
import authController from '../controllers/authController'
const router:IRouter = express.Router()

// router.use('/data',dataController)
router.use('/auth',authController)

export default router