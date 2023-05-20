import { MongoClient } from 'mongodb'
import { env } from '@/config/enviroment'

let dbInstances = null


export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  await client.connect()
  dbInstances = client.db(env.DATABASE_NAME)
}


export const getDB = () => {
  if (!dbInstances) throw new Error('Must be connect to database first')
  return dbInstances
}
// const listDataBase = async (client) => {
//   const databaseList = await client.db().admin().listDatabases()
//   console.log(databaseList)
//   console.log('Your database')
//   databaseList.databases.forEach(db => console.log(` - ${db.name}`))
// }
