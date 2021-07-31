const crypto = require("crypto");
var EC = require('elliptic').ec;
const Buffer = require('buffer').Buffer;
var ec = new EC('secp256k1');

/* global BigInt */

const Crypto = {
    createHash256Base64: function(str){
        return crypto.createHash("sha256").update(str).digest("base64");
    },
    createHash256BaseHex: function(str){
        return crypto.createHash("sha256").update(str).digest("hex");
    },
    getPulicKey: function(str){
        let keypair = ec.keyFromPrivate(BigInt(str).toString(16));
        return keypair.getPublic('hex');
    },
    genPairKey: function(){
        let keyPair = ec.genKeyPair();
        let privateKey = BigInt('0x'+keyPair.getPrivate('hex')).toString(10);
        let publicKey = keyPair.getPublic('hex');
        return [publicKey, privateKey];
    },
    signMsg: function(msg, prvK){
        let keypair = ec.keyFromPrivate(BigInt(prvK).toString(16));
        let binMsg = Buffer.from(crypto.createHash('SHA256').update(msg).digest('hex'));;
        return Buffer.from(keypair.sign(binMsg).toDER()).toString('hex');
    },
    verifyMsg: function(msg, pubK, sign){
        try{
            let keypair = ec.keyFromPublic(pubK, 'hex');
            let binMsg = Buffer.from(crypto.createHash('SHA256').update(msg).digest('hex'));
            return keypair.verify(binMsg,sign)
        }
        catch{
            return false;
        }
    }
}

export default Crypto;