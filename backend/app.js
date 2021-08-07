const { BlockChain, Block, Transaction, Coinbase,Keys} = require("./blockchain");
const {BlockchainModel,BlockchainWithTransModel,BlockchainWithTransAndCoinsModel,BlockchainWithTransAndCoinsSingdModel} = require("./db/model")



var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://OrPinhas:NGqtWgLWAHX8j0Rl@finalproject.niscx.mongodb.net/Blockchain?retryWrites=true&w=majority`");

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
      new Transaction("8", keyPair, keys[0]),
      new Transaction("20", keyPair, keys[1]),
      new Transaction("24", keyPair, keys[2]),
      new Transaction("86", keyPair, keys[3]),
  ];

  let trans3 = [
      new Transaction("50", keys[0], keys[4]),
      new Transaction("20", keys[1], keys[5]),
      new Transaction("73", keys[2], keys[6]),
      new Transaction("67", keys[3], keys[7])
  ];

  let trans4 = [
      new Transaction("90", keys[4], keys[8]),
      new Transaction("57", keys[5], keys[9]),
      new Transaction("83", keys[6], keys[10]),
      new Transaction("35", keys[7], keys[11])
  ];

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
      new Transaction("84", "or", "meytal"),
      new Transaction("29", "ronni", "ronen"),
      new Transaction("54", "moran", "noam"),
      new Transaction("76", "noam", "shelly"),
  ];
  let trans3 = [
      new Transaction("44", "meyrav", "rom"),
      new Transaction("292", "gonen", "menashe"),
      new Transaction("37", "raheli", "gonni"),
      new Transaction("93", "shon", "lea"),
  ];
  let trans4 = [
      new Transaction("94", "ronen", "gonen"),
      new Transaction("44", "ofer", "snob"),
      new Transaction("32", "moshik", "rahel"),
      new Transaction("47", "eden", "noam"),
  ];

  bChain.listBlocks[0].setTransactions(trans1);
  bChain.listBlocks[0].setCoinbase(new Coinbase("100", "Hagit"));
  bChain.addBlock(new Block(2, 0, trans2, "", new Coinbase("100", "Hagit")));
  bChain.addBlock(new Block(3, 0, trans3, "", new Coinbase("100", "Hagit")));
  bChain.addBlock(new Block(4, 0, trans4, "", new Coinbase("100", "Hagit")));

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
        new Transaction("10", "gonni", "mary"),
        new Transaction("15", "shon", "lea"),
        new Transaction("51", "tomer", "sarel"),
        new Transaction("57", "tomer", "shlomi"),
    ];
    let trans2 = [
        new Transaction("7", "shahar", "tom"),
        new Transaction("50", "yaniv", "lior"),
        new Transaction("32", "shaked", "ziv"),
        new Transaction("68", "avi", "limor"),
    ];
    let trans3 = [
        new Transaction("35", "avi", "omer"),
        new Transaction("110", "chen", "limor"),
        new Transaction("25", "keily", "mor"),
        new Transaction("45", "rom", "ron"),
    ];
    let trans4 = [
        new Transaction("100", "moran", "noam"),
        new Transaction("19", "tom", "alon"),
        new Transaction("46", "omer", "omry"),
        new Transaction("26", "gonen", "ronen"),
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



app.get("/getblockchainn", (req, res) => {

    let blockchainJson = createBlockchainData();
    
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
   
    return bChain;
};


const createOneBlockData = () => {
    let blockone = new Block(1,88483,"","");

    return blockone;
};