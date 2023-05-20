import { ColumnModel } from '@/models/column.model'


const creatNew = async (data) => {
  try {
    const result = await ColumnModel.creatNew(data)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const ColumnService = { creatNew }