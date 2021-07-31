const SHA256=require("crypto-js/sha256")

class Transaction{
    constructor(amount, from, to) {
        this.amount = amount;

        if (typeof from !== "string") {
            this.fromPublic = from.getPublic("hex");
            this.fromPrivate = from.getPrivate("hex");
            this.toPublic = to.getPublic("hex");
            this.toPrivate = to.getPrivate("hex");
            this.signature = to.sign(this.amount).toDER('hex');

        } else {
            this.from = from;
            this.to = to;
        }
    }

}


class Coinbase {
    constructor(amount, to) {
        this.amount = amount;
        this.to = to;
    }
}




class Block{
 constructor(index,timestamp,transactions,previousHash=''){
    this.index=index
    this.previousHash=previousHash
    this.timestamp=timestamp
    this.transactions=transactions
    this.hash=this.calculateHash();
    this.nonce=0


 }

 calculateHash(){
    return SHA256(this.index+this.previousHash+ this.nonce + this.timestamp+JSON.stringify(this.transactions)).toString()
 }



 mineBlock(difficulty){
     while(this.hash.substring(0,difficulty)!== Array(difficulty+1).join(0)){
        this.nonce++
        this.hash=this.calculateHash()

     }
     console.log("Block Mined: " + this.hash)
 }
}



class BlockChain{
    constructor(){
      this.chain=[this.createGenesisBlock()]
      this.difficulty=4
    }

    createGenesisBlock(){
        return new Block(0,"20/07/2021","Genesis Block","0")
    }


    getLatestBlock(){
        return this.chain[this.chain.length-1]

    }

    addBlock(newBlock){
        newBlock.previousHash=this.getLatestBlock().hash
        newBlock.mineBlock(this.difficulty)
        this.chain.push(newBlock)

    }





}

module.exports.BlockChain=BlockChain
module.exports.Block=Block
