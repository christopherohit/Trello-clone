import express from 'express'
import { ColumnController } from '@/controllers/column.controller'
import { ColumnValidation } from '@/validations/column.validation'


const router = express.Router()

router.route('/')
  // .get((req, res) => console.log('GET Columns'))
  .post(ColumnValidation.createNew, ColumnController.createNew)

export const ColumnRoute = router