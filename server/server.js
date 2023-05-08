import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/connection.js';// in backend you need to add .js extension or you will get errors
import router from './router/route.js';
import orderRouter from './router/orderRoute.js'
import productRouter from './router/productRoute.js';
import  errorMiddleware from './middlewares/Error.js';
import userRouter from  './router/userRoute.js'
import cookieParser from 'cookie-parser';
const app = express();//
const port = process.env.PORT || 8080 ;
// middlewares

app.use(express.json());
app.use(cookieParser());
app.use(cors()); // i am not adding configurartions as of now lets see what happens 
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack


process.on("uncaughtException",err=>{
    console.log(`Error : ${err.message}`)
    console.log("shutting down the server due to unhandled promise rejection")
    process.exit(1)
})

// http get request
app.get( '/', (req, res) => {
    res.status(201).json("Home GET Request");
});


/**api request */
app.use('/api',router); //self login
app.use('/api/v2',userRouter)
app.use('/store', productRouter)
app.use('/order',orderRouter)
app.use(errorMiddleware)
/**start Server */

connect().then(() => {
    try {
        var server = app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log( error,'Cannot connect to the server' )
    }
}).catch(error => {
    console.log(error,"Invalid database connection...!");
})

// unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error : ${err.message}`)
    console.log("shutting down the server due to unhandled promise rejection")
    server.close()
})
