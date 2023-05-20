import express from 'express'
import { HttpStatusCode } from '@/utilities/constants'
import { BoardRoute } from './board.route'
import { ColumnRoute } from './column.route'

const router = express.Router()


router.get('/status', (req, res) => res.status(HttpStatusCode.OK).json({
  status:  'OK!'
}))

router.use('/boards', BoardRoute)
router.use('/columns', ColumnRoute)

export const apiV1 = router
