import Joi from 'joi'
import { getDB } from '@/config/mongodb'


const cardCollectName = 'cards'
const cardCollectSchema = Joi.object({
  boardId : Joi.string().required(),
  columnId : Joi.string().required(),
  title : Joi.string().required().min(3).max(20),
  cover : Joi.string().default(null),
  createAt : Joi.date().timestamp().default(Date.now()),
  updatedAt : Joi.date().timestamp().default(null),
  _destroy : Joi.boolean().default(false)
})

const validationSchema = async(data) => {
  return await cardCollectSchema.validateAsync(data, { abortEarly : false })
}

const createNew = async(data) => {
  try {
    const value = await validationSchema(data)
    const result = await getDB().collection(cardCollectName).insertOne(value)
    return result
  }
  catch (error) {
    throw new Error(error)
  }
}

export const CardModel = { createNew }