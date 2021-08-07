import './style.css';
import React, {useEffect, useState } from 'react';
import { SHA256 } from 'crypto-js';
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import Crypto from '../../lib/Crypto';


function checkValidBlock(hashText, difficult){
    return hashText.slice(0, difficult) === '0'.repeat(difficult)? true: false;
}

function updateHash(number, nonce, data, prev){

    return Crypto.createHash256BaseHex(number + nonce  + data+ prev);
}

function updateChain(blockChain, item, index){
    blockChain[index] = item;
    //update all prev hash after current block
    for(let i=index+1; i< 4;i++){
        let prevBlock = blockChain[i-1];
        let prevUpdate = updateHash(prevBlock.index, prevBlock.nonce, prevBlock.data, prevBlock.previousHash);
        blockChain[i].previousHash = prevUpdate;
    }
    return blockChain;
}

const style = {
    success:{ backgroundColor:"#E0FFFF"},
    failed:{backgroundColor: "#FFE4E1"}
}
function Block(props){

    const difficult = 4;
    const checkItem = props.listBlocks[props.index];
    console.log(checkItem)
    const [item, setItem] = useState(checkItem);
    console.log(item)
    const [blockNumber, setBlockNumber] = useState(
      item.index ? parseInt(item.index) :1
     );
     console.log(blockNumber)
   const [nonce, setNonce] = useState(item.nonce ?parseInt(item.nonce) : 88483);
   const [blockData, setBlockData] = useState(item.data ? item.data : "");
   const [prevHash] = useState(item.previousHash ? item.previousHash : "");
   console.log(item.previousHash)
   const [loading, setLoading] = useState(false);
   const [hash, setHash] = useState(item.hash ? item.hash : "");

   useEffect(()=>{
    setHash(SHA256(blockNumber + nonce+ blockData + prevHash).toString())
    
},[blockNumber ,nonce, blockData , prevHash])


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


        <>

<div class="col-xs-7">
    <body>
  
         
        <div className="block" id="block"  > 
        
            <form className="content-block" style={ checkValidBlock(updateHash(blockNumber, nonce, blockData,prevHash), difficult)?style.success:style.failed} onSubmit={handleSubmit}>
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
                        <input name="textnounce" id="nonceId" form="block" value={nonce} onChange={e => {
                             
                            setNonce(e.target.value ? parseInt(e.target.value) : 1);
                            setItem({...item, nonce: e.target.value})
                            props.onChange(updateChain(props.listBlocks, {...item, nonce: e.target.value }, props.index)) ;
                        }} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Data:</b></label>
                    <div className="col-sm-10">
                    <textarea name="textData" id="textData" form="block" value={blockData} onChange={(e) => {
                           setBlockData(e.target.value ?e.target.value : "");
                            setItem({...item,data: e.target.value})
                            
                            props.onChange(updateChain(props.listBlocks, {...item, data: e.target.value }, props.index)) ;             
                            }} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Prev:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="valuePrev" value={prevHash} disabled 
                    />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Hash:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="valueHash" value={hash} disabled/>
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
    </>
    
    );
}

export default Block;
