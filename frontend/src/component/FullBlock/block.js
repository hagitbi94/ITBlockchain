import './style.css';
import React, {useEffect, useState } from 'react';
import Crypto from '../../lib/Crypto';
import TransactionSignHelper from '../TranasctionSigndHelper';
import axios from "axios";
import CoinbaseHelper from '../coinbasehelp';
import ClipLoader from "react-spinners/ClipLoader";


function checkValidBlock(hashText, difficult){
    return hashText.slice(0, difficult) === '0'.repeat(difficult)? true: false;
}

function updateHash(item){
    let stringHash = item.index + item.nonce + item.coinbase.amount + item.coinbase.to;

    item.data.forEach((ele, index) => {stringHash += ele.amount + ele.fromPublic + ele.toPublic + ele.signature});
    stringHash += item.previousHash;
    return Crypto.createHash256BaseHex(stringHash);
}


function updateChain(blockChain, item, index){
    blockChain[index] = item;
    //update all prev hash after current block

    for(let i=index+1; i< 4;i++){
        let prevBlock = blockChain[i-1];
        item = prevBlock;
        let prevUpdate = updateHash(item);
        
        blockChain[i].previousHash= prevUpdate;
    }
    return blockChain;
}

const style = {
    success:{ backgroundColor: "#E0FFFF"},
    failed:{backgroundColor: "#FFE4E1"}
}

function Block(props){

    const difficult = 4;
    const checkItem = props.listBlocks[props.index];

    const [item, setItem] = useState(checkItem);

    const [blockNumber, setBlockNumber] = useState(
        item.index ? parseInt(item.index) :1
       );
    
     const [nonce, setNonce] = useState(item.nonce ?parseInt(item.nonce) : 88483);
     const [blockData, setBlockData] = useState(item.stringData ? item.stringData : "");
     const [prevHash] = useState(item.previousHash ? item.previousHash : "");
     const [loading, setLoading] = useState(false);
     const [hash, setHash] = useState(item.hash ? item.hash : "");

     const [tokens] = useState(item.data ? item.data : "");
  

     useEffect(() => {

        setHash(updateHash(item));
    
      }, [item]);



      useEffect(()=>{

                
        let str ="";
        str = item.coinbase.amount + item.coinbase.to;
        for (let i = 0; i < tokens.length; i++) {
            
            
        str += tokens[i].amount + tokens[i].fromPublic + tokens[i].toPublic +tokens[i].signature;
          
        }
        setBlockData(str);
        



},[tokens,item])


      const handleSubmit = (e) => {
        if (e !== false) {
          e.preventDefault();
          setLoading(true);
        }
        axios
          .get("http://localhost:3001/mineblock", {
            params: {
              index: blockNumber,
              nonce: nonce,
              data: blockData,
              prevHash: prevHash,
            },
          })
          .then((res) => {
            if (e !== false) {
      
              setNonce(res.data.nonce);
      
              let nonceUpdate= res.data.nonce;
      
              
              setItem({...item, nonce: nonceUpdate});  
              
              props.onChange(updateChain(props.listBlocks, {...item, nonce: nonceUpdate }, props.index)) ;
              setLoading(false);
            }
          });
      };





    return (
        <div class="col-xs-7">
        
        <body>
        <div className="block" id="block"> 
            <form className="content-block" style={ checkValidBlock(updateHash(item), difficult)?style.success:style.failed} onSubmit={handleSubmit}>
            <div className="form-group row">
                    <label htmlFor="block-id" className="col-sm-2 col-form-label"><b>Block:</b></label>
                    <div className="input-group col-sm-5">
                     
                            <span className="input-group-addon">#</span>   
                     
                        <input class="form-control" type="text" name="block-id" id="blockNumberID" form="block" value={blockNumber} onChange={e => {
                           setBlockNumber(e.target.value ? parseInt(e.target.value) : 1)
                           setItem({...item, index: e.target.value})  
                            props.onChange(updateChain(props.listBlocks, {...item, index: e.target.value }, props.index)) ;
                        }} />
                    </div>
                </div>
                
                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Nonce:</b></label>
                    <div className="col-sm-10">
                        <input name="textnounce" id={"nounce"+item.index} form="block" value={nonce} onChange={e => {
                            setNonce(e.target.value ? parseInt(e.target.value) : 1);
                            setItem({...item, nonce: e.target.value});  
                            props.onChange(updateChain(props.listBlocks, {...item, nonce: e.target.value }, props.index)) ;
                        }} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Coinbase:</b></label>
                    <div className="col-sm-10">
             
             {


                          
                        <CoinbaseHelper key={props.index} index={props.index} item={props.listBlocks[props.index]}
                        
                        updateItem={(item)=>{
                            let str ="";
                            str = item.coinbase.amount + item.coinbase.to;
                            for (let i = 0; i < tokens.length; i++) {
                                
                                
                            str += tokens[i].amount + tokens[i].fromPublic + tokens[i].toPublic +tokens[i].signature;
                              
                            }
                            setBlockData(str);
                            setItem({...item});
                            
                            props.onChange(updateChain(props.listBlocks, {...item}, props.index)) ;
                            
                        }
                        
                    }/>
                   
             }
                    </div>
                </div>



                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 control-label"><b>Tx:</b></label>
                    <div className="col-sm-10">
                     
                         { 
                    
                    
                    Object.values(tokens).map( (ele, index)=>{

                         
                       
                      let str ="";
                      str = item.coinbase.amount + item.coinbase.to;
                            return <TransactionSignHelper  key={index} index={index} item={props.listBlocks[props.index]} 
                          
                            updateItem={(item)=>{
                                
                                for (let i = 0; i < tokens.length; i++) {
                                    
                                    
                                    str += tokens[i].amount + tokens[i].fromPublic + tokens[i].toPublic + tokens[i].signature ;
                                  
                                }

                                setBlockData(str);
                                setItem({...item});
                                
                                props.onChange(updateChain(props.listBlocks, {...item}, props.index)) ;
                                
                            }
                            
                        }/>
                        })
                        
                    }
                 
                    
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Prev:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id={"prev"+item.index} value={prevHash} disabled/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Hash:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id={"hash"+item.index} value={hash} disabled/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-2"><i className="icon-spinner icon-spin icon-large"></i></div>
                    <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">

{loading ? "" : "Mine"}
<ClipLoader color={"#25373b"} loading={loading} size={25} />
</button>
                    </div>
                
                </div>

            </form>
        </div>
        </body>
        </div>
    );
}

export default Block;