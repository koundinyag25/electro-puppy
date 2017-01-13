import Wallet from "ethers-wallet";
import { simpleEncode } from "ethereumjs-abi";

function calculateNonce(txCount, testnetOffset, internalOffset) {
  return txCount + testnetOffset + internalOffset;
}
function encodeDataPayload(functionSignature, functionParameters) {

  if(typeof functionSignature != "string") {
    throw new Error("Bad function signature: " + functionSignature);
  }

  if(typeof functionParameters != "string") {
    throw new Error("Bad function parameter: " + functionSignature);
  }

  // Construct function call data payload using ethereumjs-abi
  // https://github.com/ethereumjs/ethereumjs-abi
  const params = functionParameters.split(",").filter((x) => x.trim());
  const signatureArgs = [functionSignature].concat(params);
  return "0x" + simpleEncode.apply(this, signatureArgs).toString("hex");
}


function buildTx({contractAddress, privateKey, nonce, functionSignature, functionParameters, value, gasLimit, gasPrice}) {

  let wallet = new Wallet(privateKey);

  if (!gasLimit) {
    gasLimit = "0x300000";
  }

  if (!value) {
    value = "0x0";
  }

  if (!gasPrice) {
    // Ropsten testnet 2017-01
    gasPrice = "0x4a817c800"; // 20000000000
  }

  if (nonce === undefined) {
    throw new Error("Cannot send a transaction without a nonce.")
  }

  const data = encodeDataPayload(functionSignature, functionParameters);

  const txData = {
    nonce: nonce,
    to: contractAddress,
    gasLimit: gasLimit,
    gasPrice: gasPrice,
    value: value,
    data: data,
  };

  // console.log("Transaction parameters", txData);

  // Sign transactions
  let tx = wallet.sign(txData);
  return tx;
}

module.exports = {
  buildTx: buildTx
};
