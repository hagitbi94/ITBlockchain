const Crypto = require("./Crypto");

const Func = {
    checkValidBlock: function(hashText, difficult){
        return hashText.slice(0, difficult) === '0'.repeat(difficult)? true: false;
    },
    findNounce: function(number, time, data, previous, difficult){
        for(let i=0; i< MAX_LOOP; i++){
            let hashValue = updateHash(number, i, time, data, previous);
            if(checkValidBlock(hashValue, difficult)){
                return [i , hashValue];
            }
        }
        return "";
    },
    updateHash: function(number, nonce, time,  data="", previous = ""){
        return Crypto.createHash256BaseHex(number + nonce + time + data + previous);
    }
}

export default Func;