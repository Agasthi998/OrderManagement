import express from 'express'
const  router = express.Router()
import { getProductbyID } from '../controllers/productController.js'



router.get('/:id', getProductbyID)



export default router 