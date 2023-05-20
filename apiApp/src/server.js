import express from 'express'
import { connectDB, getDB } from '@/config/mongodb'
import { env } from '@/config/enviroment'
import { apiV1 } from '@/routes/v1'


connectDB()
  .then(() => console.log('Connected Successfully to database server'))
  .then(() => bootServer())
  .catch(error => {
    console.error(error)
    process.exit(1)
  })


const bootServer = () => {
  const app = express()

  app.use(express.json())
  app.use('/v1', apiV1)


  app.listen(env.APP_PORT, env.APP_HOST_NAME, () => {
    console.log(`Hello Trung Quan Dev, I am running at ${ env.APP_HOST_NAME }:${ env.APP_PORT }/`)
  })
}