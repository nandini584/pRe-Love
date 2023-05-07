import mongoose from "mongoose";

import ENV from '../config.js'

async function connect(){

    mongoose.set('strictQuery', true)
    
    mongoose.connect(ENV.ATLAS_URI,{
        useNewUrlParser :true,
        useUnifiedTopology: true,
        // useCreateIndex: true ---> why is it giving error this basically makes the loading and connection time less
    }).then((data)=>{
        console.log(`Database Connected with host: ${data.connection.host}`)
        return data;
    }).catch(error=>{
        console.log(error)
    })
}

export default connect;
