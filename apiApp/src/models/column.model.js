import Joi from 'joi'
import { getDB } from '@/config/mongodb'

const { ObjectID } = require('mongodb');
const columnCollectName = 'columns'
const columnCollectSchema = Joi.object({
  boardId : Joi.string().required(),
  title : Joi.string().required().min(3).max(20).trim(),
  cardOrder : Joi.array().items(Joi.string()).default([]),
  createAt : Joi.date().timestamp().default(Date.now()),
  updatedAt : Joi.date().timestamp().default(null),
  _destroy : Joi.boolean().default(false)
})

const validationSchema = async(data) => {
  return await columnCollectSchema.validateAsync(data, { abortEarly : false })
}

const createNew = async(data) => {
  try {
    const value = await validationSchema(data)
    const result = await getDB().collection(columnCollectName).insertOne(value)
    return value
  }
  catch (error) {
    throw new Error(error)
  }
}

const update = async(id, data) => {
  try {
    const result = await getDB().collection(columnCollectName).findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: data },
      { returnOriginal: false }
    )
    console.log(result)
    return result.value
  }
  catch (error) {
    throw new Error(error)
  }
}

export const ColumnModel = {
  createNew,
  update
}