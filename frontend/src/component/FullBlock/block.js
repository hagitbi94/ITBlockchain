import './style.css';
import React, { useState } from 'react';
import Crypto from '../../lib/Crypto';
import TransactionHelper from "../TransactionHelper";

const MAX_LOOP = 500000;

function findNonce(item , difficult){
    console.log("Update nonce", item);
    for(let i=0; i< MAX_LOOP; i++){
        item.nonce = i;
        let hashValue = updateHash(item);
        if(checkValidBlock(hashValue, difficult)){
            console.log("Nonce", i);
            return i;
        }
    }

}

function checkValidBlock(hashText, difficult){
    return hashText.slice(0, difficult) === '0'.repeat(difficult)? true: false;
}

function updateHash(item){
    let stringHash = item.number + item.nonce + item.coinbasevalue + item.coinbaseto;

    item.txs.forEach((ele, index) => {stringHash += ele.value + ele.from + ele.to});
    stringHash += item.prev;
    return Crypto.createHash256BaseHex(stringHash);
}


function updateChain(blockChain, item, index){
    //update all prev hash after current block
    for(let i=index; i< 4;i++){
        let prevUpdate = updateHash(item);
        item = blockChain[i+1] ;
        blockChain[i+1].prev = prevUpdate;
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
    return (
        <div class="col-xs-7">
        
        <body>
        <div className="block" id="block"> 
            <form className="content-block" style={ checkValidBlock(updateHash(item), difficult)?style.success:style.failed}>
                <div className="form-group row">
                    <label htmlFor="block-id" className="col-sm-2 col-form-label"><b>Block:</b></label>
                    <div className="input-group col-sm-10">
                        <div className="input-group-prepend">
                            <div className="input-group-text">#</div>   
                        </div>
                        <input type="text" name="block-id" id={"block"+item.number} form="block" value={item.number} onChange={e => {
                            setItem({...item, number: e.target.value});  
                            props.onChange(updateChain(props.listBlocks, {...item, number: e.target.value }, props.index)) ;
                        }} />
                    </div>
                </div>
                
                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Nonce:</b></label>
                    <div className="col-sm-10">
                        <input name="textnounce" id={"nounce"+item.number} form="block" value={item.nonce} onChange={e => {
                            setItem({...item, nonce: e.target.value});  
                            props.onChange(updateChain(props.listBlocks, {...item, nonce: e.target.value }, props.index)) ;
                        }} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Coinbase:</b></label>
                    <div className="col-sm-10">
                        <div className="input-group">
                            <div className="input-group-addon">
                                <span className="input-group-text">$</span>
                            </div>
                            <input className="form-control" id={"coinbase"+item.number} type="text" value={item.coinbasevalue} 
                                onChange={e => {
                                    item.coinbasevalue = e.target.value;
                                    setItem({...item});  
                                    props.onChange(updateChain(props.listBlocks, {...item}, props.index)) ;
                                }}
                            />
                            <div className="input-group-addon">
                                <span className="input-group-text">-{">"}</span>
                            </div>
                            <input className="form-control" id={"coinbaseto"+item.number} type="text" value={item.coinbaseto} 
                                onChange={e => {
                                    item.coinbaseto = e.target.value;
                                    setItem({...item});  
                                    props.onChange(updateChain(props.listBlocks, {...item}, props.index)) ;
                                }}
                            />
                        </div>
                    </div>
                </div>



                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 control-label"><b>Tx:</b></label>
                    <div className="col-sm-10">
                    { 
                        props.listBlocks[props.index].txs.map( (ele, index)=>{
                            return <TransactionHelper  key={index} index={index} item={props.listBlocks[props.index]} 
                            updateItem={(item)=>{
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
                    <input type="text" className="form-control" id={"prev"+item.number} value={item.prev} disabled/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Hash:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id={"hash"+item.number} value={updateHash(item)} disabled/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-2"><i className="icon-spinner icon-spin icon-large"></i></div>
                    <div className="col-sm-10">
                    <input className="btn btn-primary" type="button" value="Mine" onClick={(e)=>{
                        e.preventDefault();
                        let nonceUpdate= findNonce(item, difficult);
                        setItem({...item, nonce: nonceUpdate});  
                        props.onChange(updateChain(props.listBlocks, {...item, nonce: nonceUpdate }, props.index)) ;
                    }}/>
                    </div>
                
                </div>

            </form>
        </div>
        </body>
        </div>
    );
}

export default Block;