import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 8000
const app = express()
import connectDb from './db/db.js'
import apiRoute from './routes/api.js'

app.use(cors())
app.use(express.json())
app.use('/api/banks', apiRoute)

connectDb()

app.get('/', (req,res)=>{
    res.send('Hello')
})


app.listen(PORT, ()=>{
    console.log(`Server startd at port ${PORT}`)
})
