// const config = require('config');
const mongoose = require('mongoose');

 
var BlockchainSchema =   new mongoose.Schema({
    listBlocks:[new mongoose.Schema({
     index: Number,
     nonce: Number,
     data: String,
     previousHash: String,
     hash:String
 },{ _id: false, id: false })]
 });
 

 var BlockchainWithTransSchema =   new mongoose.Schema({
    listBlocks:[new mongoose.Schema({
     index: Number,
     nonce: Number,
     data:[ {
        amount: String,
        from:String,
        to: String
     }],
     previousHash: String,
     hash:String
 },{ _id: false, id: false })]
 });
 

 var BlockchainWithTransAndCoinsSchema =   new mongoose.Schema({
    listBlocks:[new mongoose.Schema({
     index: Number,
     nonce: Number,
     data:[ {
        amount: String,
        from:String,
        to: String
     }],
     coinbase:{
         amount: String,
         to: String
     },
     previousHash: String,
     hash:String
 },{ _id: false, id: false })]
 });


 var BlockchainWithTransAndCoinsSingdSchema =   new mongoose.Schema({
    listBlocks:[new mongoose.Schema({
     index: Number,
     nonce: Number,
     data:[ {
        amount: String,
        fromPublic:String,
        toPublic: String,
        signature: String

     }],
     coinbase:{
         amount: String,
         to: String
     },
     previousHash: String,
     hash:String
 },{ _id: false, id: false })]
 });


 var BlockSchema =   new mongoose.Schema({
     
     index: Number,
     nonce: Number,
     data: String,
     previousHash: String,
     hash:String
     
 },{ _id: false, id: false });




 var BlockchainWithTransAndCoinsSingdModel = mongoose.model("BlockchainWithTransAndCoinsSingd",BlockchainWithTransAndCoinsSingdSchema );

 var BlockchainWithTransAndCoinsModel = mongoose.model("BlockchainWithTransAndCoins",BlockchainWithTransAndCoinsSchema );


 var BlockchainWithTransModel = mongoose.model("BlockchainWithTrans",BlockchainWithTransSchema );
 
 var BlockchainModel = mongoose.model("Blockchain", BlockchainSchema);

 var BlockModel = mongoose.model("Block", BlockSchema);
 
module.exports = {BlockchainModel, BlockModel,BlockchainWithTransModel, BlockchainWithTransAndCoinsModel, BlockchainWithTransAndCoinsSingdModel};



// const BlockchainModel = mongoose.model('Blockchain',
//     new mongoose.Schema({
//         timestamp: String,
//         previousHash: String,
//         transactions: {
//             Object:{
//             fromAddress: String,
//             toAddress: String,
//             amount: String,
//             timestamp: String,
//             signature: String,
//             }
//         },
//         nonce: String,
//         hash:String
//     })
//     );