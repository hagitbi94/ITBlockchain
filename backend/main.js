const { BlockChain, Block } = require('./blockchain');

let hagitCoin = new BlockChain()

hagitCoin.addBlock(new Block(1,"20/07/2021",{amount: 4}))
hagitCoin.addBlock(new Block(1,"20/08/2021",{amount: 8}))
let hagitBlock = new Block(1,"20/07/2021",{amount: 4})
console.log(JSON.stringify(hagitBlock,null,4))