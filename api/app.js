import express from 'express';
import cookieParser from 'cookie-parser';
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
const app = express();

app.use(express.json())
app.use(cookieParser())
app.listen(8800,()=>{
console.log("Server is running on 8800")
})

app.use('/api/test',postRoute)
app.use('/api/auth',authRoute)