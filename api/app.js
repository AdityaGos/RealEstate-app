import express from 'express';
import cookieParser from 'cookie-parser';
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
import testRoute from './routes/test.route.js'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cookieParser())
// cors allow browser/client to communicate with the server even if the origin path,port is not same as the server

//    (allowed URL ,allowing server to send cookie to client side    
app.use(cors({origin:process.env.CLIENT_URL , credentials:true}))

app.listen(8800,()=>{
console.log("Server is running on 8800")
})

// app.use('/api/test',postRoute)
app.use('/api/auth',authRoute)
app.use('/api/test',testRoute)