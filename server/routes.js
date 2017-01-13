import express from 'express';
import Web3 from 'web3';
import 'es6-promise';
import when from 'when';

import  constants from './serverCong.js';
const routes = express.Router();
let es = require('etherscan-api').init(constants.apiKey);
import { buildTx } from './utils.js';

function getPayload(theNonce){
  console.log('the nocnce in the getpayload',theNonce);

return {
  contractAddress :constants.contractAddress,
  privateKey: '0x4fe8deb1d5e5908bd05bf8b8aad6f3a5fbce70a95e3f65fe85cbe6d3f4e44f77',
  functionSignature:'addCarbonCredit(uint)',
  functionParameters:'3000',
  address: constants.address,
  balance: "",
  rawTx: "",
  nonce: theNonce,
  sendStatus: false,
  sendError: null, //
  sentTxHash: null // Point to etherscan.io t
};
}

function getTransaction(data) {
  return new Promise((fulfilled, rejected) => {
    // console.log(data.result[data.result.length-1].nonce);
      console.log('the nonce in getTransaction',data);
      console.log('inthe get transactions',getPayload(data));
      let transaction = buildTx(getPayload(data));
      return fulfilled(transaction);
  });
}

routes.get('/api/home',(req,res)=>{
    function boop(){
      es.proxy.eth_getTransactionCount(constants.address,'latest')
      .then((data)=>{
        console.log('the trana count',parseInt(data.result,16));
        if(parseInt(data.result,16)>= 0){
          let boop = parseInt(data.result)+1;
          console.log('the transaction count',boop);
         return getTransaction(parseInt(boop));
       }
      }).then((transaction)=>{
        console.log('the palyoad',transaction);
          return es.proxy.eth_sendRawTransaction(transaction);
        })
        .then(data => res.send(data).end())
        .catch(err => res.error(err).end());

    }

  boop();
    // es.account.txlist(constants.address1, 1, 'latest', 'asc')
    // .then((data) => {
    //   console.log(data);
    //   return getTransaction(data.result);
    // })
    // .then(transaction => {
    //   console.log('the palyoad',transaction);
    //   return es.proxy.eth_sendRawTransaction(transaction);
    // })
    // .then(data => res.send(data).end())
    // .catch(err => res.error(err).end());
});


export default routes;
