import './style.css';
import React, {useEffect, useState } from 'react';
import Crypto from '../../lib/Crypto';
import axios from "axios";
const MAX_LOOP = 500000;


function findNounce(index, data, difficult){
    for(let i=0; i< MAX_LOOP; i++){
        let hashValue = updateHash(index, i, data);
        if(checkValidBlock(hashValue, difficult)){
            return [i , hashValue];
        }
    }
}

function checkValidBlock(hashText, difficult){
    return hashText.slice(0, difficult) === '0'.repeat(difficult)? true: false;
}

function updateHash(index, nonce,  data){
    return Crypto.createHash256BaseHex(index + nonce  + data);
}

const style = {
    success:{ backgroundColor: "#E0FFFF"},
    failed:{backgroundColor: "#FFE4E1"}
}



function Block(){
    
    const difficult = 4;
    const [index, setIndex] = useState("");
    const [nonce, setNonce] = useState("");
    const [data, setData] = useState("");
    const [hash, setHash] = useState("");

    useEffect(() => {

        axios.get("http://localhost:3001/getblock").then((res) => {
        console.log(res.data.data);
        console.log(res.data.hash);
        console.log(res.data.nonce);
        console.log(res.data.index);
        console.log(res.data);
        setIndex(res.data.index)
        setNonce(res.data.nonce)
        setData(res.data.data)

        setHash(updateHash(res.data.index, res.data.nonce, res.data.data))
        // setListBlocks(res.data.listBlocks);
  
        });
    },[])
    
    // 



    return (
        <>
        <body>
         <div class="container">
        <div className="block" id="block"> 
            <form className="content-block" style={ checkValidBlock(hash, difficult)?style.success:style.failed}>
                <div className="form-group row">
                    <label htmlFor="block-id" className="col-sm-2 col-form-label"><b>Block:</b></label>
                    <div className="input-group col-sm-10">
                        <div className="input-group-prepend">
                            <div className="input-group-text">#</div>   
                        </div>
                        <input type="text" name="block-id" id="blockId" form="block" value={index} onChange={e => {
                            setIndex(e.target.value);
                            setHash(updateHash(e.target.value, nonce, data));
                        }} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Nounce:</b></label>
                    <div className="col-sm-10">
                        <input name="textnounce" id="nounce" form="block" value={nonce} onChange={e => {setNonce(e.target.value); setHash(updateHash(index, e.target.value, data));}} />
                    </div>
                </div>
            

                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Data:</b></label>
                    <div className="col-sm-10">
                    <textarea name="textData" id="textData" form="block" value={data} onChange={e => {setData(e.target.value); setHash(updateHash(index, nonce, e.target.value));}} />
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
                    <input className="btn btn-primary" type="button" value="Mine" onClick={()=>{
                      
                        let [nonceUpdate, hashUpdate] = findNounce(index, data, difficult);
        
                        setNonce(nonceUpdate);
                        setHash(hashUpdate);
                    }}/>
                    </div>
                
                </div>
            </form>
        </div>
        </div>
        </body>
        </>
    );
}

export default Block;