import express, {IRouter} from 'express'
import shopController from '../controllers/shopController'
import authController from '../controllers/authController'
import orgController from '../controllers/orgController'
const router:IRouter = express.Router()

router.use('/org',orgController)
router.use('/shop',shopController)
router.use('/auth',authController)

export default router