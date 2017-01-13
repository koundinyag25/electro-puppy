import express from 'express';
import web3 from 'web3';
import routes from './routes.js';
const app = express();

let router = express.Router();


app.use('/',routes);

app.listen(3000,()=>{
  console.log('etherum app running on port 3000');
});
