import Joi from 'joi'
import { HttpStatusCode } from '@/utilities/constants'


const createNew = async(req, res, next) => {
  const Conditions = Joi.object({
    title : Joi.string().min(3).max(20).required()
  })

  try {
    await Conditions.validateAsync(req.body, { aborlyEarly : false })
    next()
  }
  catch (error) {
    res.status(HttpStatusCode.BAN_REQUEST).json({
      errors : new Error(error).message
    })
  }
}


export const BoardValidation = { createNew }