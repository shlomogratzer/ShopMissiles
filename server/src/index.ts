import express,{ Express } from 'express'
import 'dotenv/config'
import router from '../src/routers/router'
import connectDB from './config/db'
import loadInitialData from './config/initioaldata'

const app = express()
app.use(express.json())
connectDB();
loadInitialData()
app.use(router)
app.listen(process.env.PORT || 4000,()=>{
    console.log(`server is up end listen ${process.env.PORT || 4000}`);
    
})