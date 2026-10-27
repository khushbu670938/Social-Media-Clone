//all import of tools and routes done here {
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';


import connectMongoDb from './db/connectMongoDb.js';

//}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({path: path.resolve(__dirname, '.env')})

const app = express(); // the server app has been created
const PORT = process.env.PORT || 5000;
app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({extended:true}));




// server is started here.
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
    console.log (`http://localhost:${PORT}`);
    connectMongoDb();
})
