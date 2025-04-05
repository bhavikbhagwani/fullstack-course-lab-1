import express from 'express'
import dishesController from '../controllers/dishesController.js'

export const router = express.Router()




router.get('/api/dishes', dishesController.getDishes)
router.post('/api/dishes', dishesController.createDish)
router.get('/api/dishes/:name', dishesController.getDishesByName)
router.put('/api/dishes/:id', dishesController.updateDish)
router.delete('/api/dishes/:id', dishesController.deleteDish)


