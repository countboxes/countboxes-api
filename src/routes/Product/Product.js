import { Router } from 'express'
import ProductController from '../../controllers/Product'

const productRoutes = new Router()

console.log("blabla")
productRoutes.post('/', ProductController.create)

// productRoutes.get('/', ProductController.getAll)

// userRoutes.put('/:id', UserController.update)

export default productRoutes
