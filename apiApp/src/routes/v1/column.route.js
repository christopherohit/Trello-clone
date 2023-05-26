import express from 'express'
import { ColumnController } from '@/controllers/column.controller'
import { ColumnValidation } from '@/validations/column.validation'


const router = express.Router()

router.route('/')
  .post(ColumnValidation.createNew, ColumnController.createNew)

router.route('/:id')
  .put(ColumnValidation.update, ColumnController.update)

export const ColumnRoutes = router