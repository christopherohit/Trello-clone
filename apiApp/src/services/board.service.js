import BoardModel from '@/models/board.model'


const creatNew = async (data) => {
  try {
    const result = await BoardModel.creatNew(data)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const BoardService = { creatNew }