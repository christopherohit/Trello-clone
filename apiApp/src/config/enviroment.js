require ('dotenv').config()

export const env = {
  MONGODB_URI : process.env.MONGODB_URI,
  APP_HOST_NAME : process.env.APP_HOST_NAME,
  APP_PORT : process.env.APP_PORT,
  DATABASE_NAME : process.env.DATABASE_NAME
}