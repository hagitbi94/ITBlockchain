
import './style.css';
import React, { useState } from 'react';
import Crypto from '../../lib/Crypto';
const MAX_LOOP = 500000;

function findNounce(number, time, data, difficult){
    for(let i=0; i< MAX_LOOP; i++){
        let hashValue = updateHash(number, i, time, data);
        if(checkValidBlock(hashValue, difficult)){
            return [i , hashValue];
        }
    }
}

function checkValidBlock(hashText, difficult){
    return hashText.slice(0, difficult) === '0'.repeat(difficult)? true: false;
}

function updateHash(number, nonce, time,  data){
    return Crypto.createHash256BaseHex(number + nonce + time + data);
}

const style = {
    success:{ backgroundColor: "#E0FFFF"},
    failed:{backgroundColor: "#FFE4E1"}
}
function Block(){
    
    const difficult = 4;
    // none set time default
    const [time, setTime] = useState("");
    const [number, setNumber] = useState("1");
    const [nonce, setNonce] = useState("72608");
    const [data, setData] = useState("");
    const [hash, setHash] = useState(updateHash(number, nonce, time, data));


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
                        <input type="text" name="block-id" id="blockId" form="block" value={number} onChange={e => {
                            setNumber(e.target.value);
                            setHash(updateHash(e.target.value, nonce, data));
                        }} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Nounce:</b></label>
                    <div className="col-sm-10">
                        <input name="textnounce" id="nounce" form="block" value={nonce} onChange={e => {setNonce(e.target.value); setHash(updateHash(number, e.target.value, data));}} />
                    </div>
                </div>
                
                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Timestamp:</b></label>
                    <div className="col-sm-10">
                        <input name="textTime" id="textTime" form="block" value={time} disabled />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Data:</b></label>
                    <div className="col-sm-10">
                    <textarea name="textData" id="textData" form="block" value={data} onChange={e => {setData(e.target.value); setHash(updateHash(number, nonce, e.target.value));}} />
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
                        const timeUpdate = new Date().getTime();
                        let [nonceUpdate, hashUpdate] = findNounce(number, timeUpdate, data, difficult);
                        setTime(timeUpdate);
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