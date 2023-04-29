import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/connection.js';// in backend you need to add .js extension or you will get errors
// import router from './router/route.js';


// import express from 'express'
// import cors from 'cors'
// import morgan from 'morgan'
// import connect from './database/connection.js' 


const app = express();

// middlewares

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

const port = 8080;

// http get request
app.get( '/', (req, res) => {
    res.status(201).json("Home GET Request");
});


/**start Server */

connect().then(() => {
    try {
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})

// app.listen(port, () => {
//     console.log(`Server connected to http://localhost:${port}`);
// })