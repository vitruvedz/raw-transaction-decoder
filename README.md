# Raw Transaction Decoder

This library's methods return information of a transaction, given this transaction `HEX` as input.

## Supported coins

- 3DCoin
- Ethereum
- Bitcoin

## Usage

- `npm install raw-transaction-decoder


### 3DCoin Raw Tx

```javascript
const txHexDecoder = require("raw-transaction-decoder");

// Transaction https://3dcstats.net/tx/d6aa85dfb4942228923fda101a250c0f57a3bb1a7bf771fb26547848eb41ab5b -> Tool/utilities to check rawTx
const EncodedRawTx3DCoin = "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0603932a0c0109ffffffff020000000000000000232103c352f85d0525f52de32d757a709fa9c9cd756c96e9db1a017e5fde5189562cd8ac00b08ef01b0000001976a914f221eff78d9bc0199408f18c60bd4698c4e3a0d488ac00000000";
const decode3dcRawTx = txHexDecoder.decodeEthRawTx(EncodedRawTx3DCoin);
console.log("Decoded Transaction : "+JSON.stringify(decode3dcRawTx));
/* OUTPUT Example:
{
  "txid": "d6aa85dfb4942228923fda101a250c0f57a3bb1a7bf771fb26547848eb41ab5b",
  "size": 135,
  "version": 1,
  "locktime": 0,
  "Vin": [
    {
      "coinbase": "03932a0c0109",
      "sequence": 4294967295
    }
  ],
  "Vout": [
    {
      "value": "0.0000000000",
      "valueSat": 0,
      "n": 0,
      "scriptPubKey": {
        "asm": "03c352f85d0525f52de32d757a709fa9c9cd756c96e9db1a017e5fde5189562cd8 OP_CHECKSIG",
        "hex": "2103c352f85d0525f52de32d757a709fa9c9cd756c96e9db1a017e5fde5189562cd8ac",
        "type": "Pay to public key",
        "addresses": [
          "AGeE5Z8JoP4B5z46HiHdhtLigAz6qxApwo"
        ]
      }
    },
    {
      "value": "12.0000000000",
      "valueSat": 120000000000,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 f221eff78d9bc0199408f18c60bd4698c4e3a0d4 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914f221eff78d9bc0199408f18c60bd4698c4e3a0d488ac",
        "type": "Pay to public key hash",
        "addresses": [
          "Adr9pvxibaQ7WvVFMt4o9u3ANB2VbMgbZ6"
        ]
      }
    }
  ]
}
*/
```

### 3DCoin Raw Block

```javascript
const txHexDecoder = require("raw-transaction-decoder");

// Transaction https://3dcstats.net/block/0000002676e5dfe029b61ca3b4e0e24ccdb4a2baf391ac94eab8d0c0a98ae917 -> Tool/utilities to check rawTx
const EncodedRawBlock3DCoin = "000000203d0e83a99b9188d8622146495dbd1b346c844e8f5e472e7d650df52d0500000044fbf8a902e03968093e1520bc697bc77a673d789491d279bf569a1b98602f29e5a4c35df3e66d1dbfe067040101000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0603922a0c0101ffffffff020000000000000000232103409b22be667815da661beb29e27c1d87367dc20935bb01596776b83512f115f0ac00b08ef01b0000001976a91451c455c060d11792b1647a661e4befc9097614a588ac00000000";
const decode3dcRawBlock = txHexDecoder.decodeEthRawTx(EncodedRawBlock3DCoin);
console.log("Decoded Transaction : "+JSON.stringify(decode3dcRawBlock));
/* OUTPUT Example:
{ header:
     { hash:
        '0000002676e5dfe029b61ca3b4e0e24ccdb4a2baf391ac94eab8d0c0a98ae917',
       version: 536870912,
       prevHash:
        '000000052df50d657d2e475e8f4e846c341bbd5d49462162d888919ba9830e3d',
       merkleRoot:
        '292f60981b9a56bf79d29194783d677ac77b69bc20153e096839e002a9f8fb44',
       time: 1573102821,
       bits: '1d6de6f3',
       nonce: 73916607,
       difficulty: 9098.86 },
    transactions: [ [Object] ] }*/
```

### Ethereum Raw Tx

```javascript
const txHexDecoder = require("raw-transaction-decoder");

// Transaction https://etherscan.io/tx/0x09b092b86ffc8f425b405d3ac0ef1ec51269fa024e64b4b5778961a4d588c982 -> Tool/utilities to check rawTx
const ethEncodedRawTx = "0xf86e82cd70850bdfd63e00827918943c601b93eaad76d2f66f71a0b8c22dbbf2e71db688287bb23d4c9350008025a09f3842a8fd9d6228d4ee226524e249c81eba22c53a87855f2244b2064c8036d6a073c767ae047bce30dee587e5233649acbae36b10d97b39d11fb9b2ccabf9b925";
const ethDecodedRawTx = txHexDecoder.decodeEthRawTx(ethEncodedRawTx);
console.log("Decoded Transaction : "+JSON.stringify(ethDecodedRawTx));
/* OUTPUT Example:
{
   "nonce":52592,
   "gasPrice":51000000000,
   "startGas":31000,
   "to":"0x3c601b93eaad76d2f66f71a0b8c22dbbf2e71db6",
   "valueInWei":2917121160000000000,
   "valueInEther":2.91712116,
   "inputData":"0x",
   "v":"0x25",
   "r":"0x9f3842a8fd9d6228d4ee226524e249c81eba22c53a87855f2244b2064c8036d6",
   "s":"0x73c767ae047bce30dee587e5233649acbae36b10d97b39d11fb9b2ccabf9b925"
}*/
```

### Bitcoin Raw Tx

```javascript
const txHexDecoder = require("raw-transaction-decoder");

const btcEncodedRawTx = "0100000001d144583347ebdb81263ea30c731fa44725f23692918c0bc495df53b26ec3d7920000000000ffffffff01983a0000000000001976a914406f4066bb99985efe9d36b0ac7c4c96c799104888ac00000000";
const btcDecodedRawTx = txHexDecoder.decodeBtcRawTx(btcEncodedRawTx);
console.log("Decoded transaction : "+JSON.stringify(btcDecodedRawTx));
/* OUTPUT Example:
{
   "version":1,
   "locktime":0,
   "ins":[
      {
         "hash":{
            "type":"Buffer",
            "data":[]
         },
         "index":0,
         "script":{
            "type":"Buffer",
            "data":[

            ]
         },
         "sequence":4294967295,
         "witness":[

         ]
      }
   ],
   "outs":[
      {
         "value":15000,
         "script":{
            "type":"Buffer",
            "data":[]
         }
      }
   ],
   "totalValue":15000
}
*/

```