const BlockchainModel= require('./model')


async function createBlock(block,nonce,data , previousHash,hash ){
    const block = new BlockchainModel({

        block: block,
        nonce: nonce,
        data:data,
        previousHash: previousHash,
        hash:hash

    })

    return await block.save();

}


async function getAllBlocks() {
    const allBlocks = await BlockchainModel.find();
    return allBlocks;

}

module.exports = {createBlock, getAllBlocks};




// async function createBlock(timestamp, previousHash, transactions,nonce ,hash){
//     const block = new BlockchainModel({

//         timestamp: timestamp,
//         previousHash: previousHash,
//         transactions: {
//             Object:{
//             fromAddress: fromAddress,
//             toAddress: toAddress,
//             amount: amount ,
//             timestamp: timestamp,
//             signature: signature,
//             }
//         },
//         nonce: nonce,
//         hash:hash

//     })

//     return await block.save();

// }