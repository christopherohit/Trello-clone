import Joi from 'joi'
import { getDB } from '@/config/mongodb'


const BoardCollectionName = 'boards'
const BoardCollectionSchema = Joi.object({
  title : Joi.string().required().min(3).max(20),
  columnOrder : Joi.array().items(Joi.string()).default([]),
  createAt : Joi.date().timestamp().default(Date.now()),
  updateAt : Joi.date().timestamp().default(null),
  _destroy : Joi.boolean().default(false)
})


const validatedSchema = async(data) => {
  return await BoardCollectionSchema.validateAsync(data, { abortEarly: false })
}

const createNew = async(data) => {
  try {
    const value = await validatedSchema(data)
    const result = await getDB().collection(BoardCollectionName).insertOne(value)
    return value
  }
  catch (error) {
    throw new Error(error)
  }
}


export const BoardModel = { createNew }