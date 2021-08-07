const { BlockChain, Block, Transaction, Coinbase,Keys} = require("./blockchain");
const {BlockchainModel,BlockModel,BlockchainWithTransModel,BlockchainWithTransAndCoinsModel,BlockchainWithTransAndCoinsSingdModel} = require("./db/model")
// const {Keys} = require("./keygenerator");


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Blockchain");





const { randomBytes } = require('crypto')
const secp256k1 = require('secp256k1')


var EC = require("elliptic").ec;
var ec = new EC("secp256k1");



const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;






app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post("/addblockchainwithtransandcoinssignd", (req, res) => {
   

    
  let blockc = new BlockchainWithTransAndCoinsSingdModel(createSignedBlockchain())

  
  
  blockc.save()
    .then(item => {
      res.send(blockc);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  
});



app.get("/getblockchainwithtransandcoinssignd", async (req, res) => {
   
  let blockchain = await BlockchainWithTransAndCoinsSingdModel.findOne().select("-_id");
  
  res.json(blockchain)
 
  
 
});



// var Blockchainm = mongoose.model("Blockchain",BlockchainModel);


app.get("/getensignedblockchain", (req, res) => {
  let bChain = createSignedBlockchain();
  console.log("\n" + JSON.stringify(bChain));

  res.send(JSON.stringify(bChain));
});

const createSignedBlockchain = () => {
  let bChain = new BlockChain();

  let keyPair = ec.genKeyPair();
  privateKey = keyPair.getPrivate("hex")
  publicKey = keyPair.getPublic("hex")

  let keys = [
      ec.genKeyPair(), ec.genKeyPair(), ec.genKeyPair(), ec.genKeyPair(),
      ec.genKeyPair(), ec.genKeyPair(), ec.genKeyPair(), ec.genKeyPair(),
      ec.genKeyPair(), ec.genKeyPair(), ec.genKeyPair(), ec.genKeyPair()
  ]

  let trans1 = [];

  let trans2 = [
      new Transaction("7", keyPair, keys[0]),
      new Transaction("50", keyPair, keys[1]),
      new Transaction("32", keyPair, keys[2]),
      new Transaction("68", keyPair, keys[3]),
  ];

  let trans3 = [
      new Transaction("35", keys[0], keys[4]),
      new Transaction("110", keys[1], keys[5]),
      new Transaction("25", keys[2], keys[6]),
      new Transaction("45", keys[3], keys[7])
  ];

  let trans4 = [
      new Transaction("100", keys[4], keys[8]),
      new Transaction("19", keys[5], keys[9]),
      new Transaction("46", keys[6], keys[10]),
      new Transaction("26", keys[7], keys[11])
  ];

  // bChain.chain[0].setCoinbase(new Coinbase("100", publicKey));
  // bChain.chain[0].setTransactions(trans1);

  bChain.listBlocks[0] = new Block(1, 0, trans1, "0000000000000000000000000000000000000000000000000000000000000000", new Coinbase("100", publicKey));
  bChain.listBlocks[0].mineBlock(4);
  bChain.addBlock(new Block(2, 0, trans2, "", new Coinbase("100", publicKey), keyPair));
  bChain.addBlock(new Block(3, 0, trans3, "", new Coinbase("100", publicKey), keyPair));
  bChain.addBlock(new Block(4, 0, trans4, "", new Coinbase("100", publicKey), keyPair));

  return bChain;
};





app.post("/addblockchainwithtransandcoins", (req, res) => {
   

    
  let blockc = new BlockchainWithTransAndCoinsModel(createCoinbaseBlockchainData())

  
  
  blockc.save()
    .then(item => {
      res.send(blockc);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  
});


app.get("/getblockchainwithtransandcoins", async (req, res) => {
   
  let blockchain = await BlockchainWithTransAndCoinsModel.findOne().select("-_id");
  
  res.json(blockchain)
 
  
 
});




app.get("/getcoinbaseblockchain", (req, res) => {
  let bChain = createCoinbaseBlockchainData();

  res.send(JSON.stringify(bChain));
});


const createCoinbaseBlockchainData = () => {
  let bChain = new BlockChain();

  let trans1 = [];

  let trans2 = [
      new Transaction("7", "path", "nativ"),
      new Transaction("50", "yuzoninio", "ronaldinio"),
      new Transaction("32", "messi", "avi"),
      new Transaction("68", "tami", "avi"),
  ];
  let trans3 = [
      new Transaction("35", "batya", "adam"),
      new Transaction("110", "yafa", "yuzon"),
      new Transaction("25", "sapir", "avi"),
      new Transaction("45", "alon", "shalom"),
  ];
  let trans4 = [
      new Transaction("100", "eylon", "alon"),
      new Transaction("19", "sami", "bob"),
      new Transaction("46", "yosef", "moses"),
      new Transaction("26", "adam", "avi"),
  ];

  bChain.listBlocks[0].setTransactions(trans1);
  bChain.listBlocks[0].setCoinbase(new Coinbase("100", "Adam"));
  bChain.addBlock(new Block(2, 0, trans2, "", new Coinbase("100", "Adam")));
  bChain.addBlock(new Block(3, 0, trans3, "", new Coinbase("100", "Adam")));
  bChain.addBlock(new Block(4, 0, trans4, "", new Coinbase("100", "Adam")));

  return bChain;
};



app.post("/addblockchain", (req, res) => {
   

    
    let blockc = new BlockchainModel(createBlockchainData())
  
    
    
    blockc.save()
      .then(item => {
        res.send(blockc);
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
    
  });


  app.post("/addblockchainwithtrans", (req, res) => {
   

    
    let blockc = new BlockchainWithTransModel(createTokenBlockchainData())
  
    
    
    blockc.save()
      .then(item => {
        res.send(blockc);
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
    
  });



  app.get("/getblockchainwithtrans", async (req, res) => {
   
    let blockchain = await BlockchainWithTransModel.findOne().select("-_id");
    
    res.json(blockchain)
   
    
   
  });


  app.get("/gettokenblockchain", (req, res) => {
    let blockchainJson = createTokenBlockchainData();

    res.send(JSON.stringify(blockchainJson));
});
  

  const createTokenBlockchainData = () => {
    let bChain = new BlockChain();

    let trans1 = [
        new Transaction("10", "adam", "avi"),
        new Transaction("15", "darcy", "bingly"),
        new Transaction("51", "yuzon", "david"),
        new Transaction("57", "tomer", "shlomi"),
    ];
    let trans2 = [
        new Transaction("7", "path", "nativ"),
        new Transaction("50", "yuzoninio", "ronaldinio"),
        new Transaction("32", "messi", "avi"),
        new Transaction("68", "tami", "avi"),
    ];
    let trans3 = [
        new Transaction("35", "batya", "adam"),
        new Transaction("110", "yafa", "yuzon"),
        new Transaction("25", "sapir", "avi"),
        new Transaction("45", "alon", "shalom"),
    ];
    let trans4 = [
        new Transaction("100", "eylon", "alon"),
        new Transaction("19", "sami", "bob"),
        new Transaction("46", "yosef", "moses"),
        new Transaction("26", "adam", "avi"),
    ];

    bChain.listBlocks[0].setTransactions(trans1);

    bChain.addBlock(new Block(2, 0, trans2, ""));
    bChain.addBlock(new Block(3, 0, trans3, ""));
    bChain.addBlock(new Block(4, 0, trans4, ""));

    return bChain;
};







  app.get("/getblockchain", async (req, res) => {
   
    let blockchain = await BlockchainModel.findOne().select("-_id");
    
    res.json(blockchain)
   
    
   
  });


// app.post("/addBlockcahin", (req,res)=>{
//     let bChain = new BlockChain();

//     bChain.addBlock(new Block(2 , 0, "", ""));
//     bChain.addBlock(new Block(3 , 0, "", ""));
//     bChain.addBlock(new Block(4, 0, "", ""));
//     bChain.save().then(item => {
//         res.send("item saved to database")
//     }).catch(err => {
//         res.status(400).send("unable to save to database");
//       });

// })


app.get("/getblockchainn", (req, res) => {

    let blockchainJson = createBlockchainData();
    

    
    // res.send(JSON.stringify(blockchainJson));
    res.send(JSON.stringify(blockchainJson));

});




app.get("/getblock", (req, res) => {
    let blockJson = createOneBlockData();

    res.send(JSON.stringify(blockJson));
});



app.get("/mineblock", (req, res) => {
    let block = new Block(
        parseInt(req.query.index),
        parseInt(req.query.nonce),
        req.query.data,
        req.query.prevHash
    );


    block.mineBlock(4);
  

    res.send(JSON.stringify(block));
});





const createBlockchainData = () => {
    let bChain = new BlockChain();

    bChain.addBlock(new Block(2 , 0, "", ""));
    bChain.addBlock(new Block(3 , 0, "", ""));
    bChain.addBlock(new Block(4, 0, "", ""));
    // bChain.addBlock(new Block(5 , 0, "", ""));
    return bChain;
};


const createOneBlockData = () => {
    // let blockone = new Block("1","","72608","2e5d45592ed89109bd3a9c19f2e8a5701d8c26b2eed2d8d8129cdfa2ae9c12e4");
    let blockone = new Block(1,88483,"","");

    return blockone;
};


