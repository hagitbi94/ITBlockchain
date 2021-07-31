import './style.css';
import React, { useState } from 'react';
import Crypto from '../../lib/Crypto';
const MAX_LOOP = 500000;

function findNounce(number, data, prev , difficult){
    for(let i=0; i< MAX_LOOP; i++){
        let hashValue = updateHash(number, i, data, prev);
        if(checkValidBlock(hashValue, difficult)){
            return i;
        }
    }
}

function checkValidBlock(hashText, difficult){
    return hashText.slice(0, difficult) === '0'.repeat(difficult)? true: false;
}

function updateHash(number, nonce, data, prev = ""){

    return Crypto.createHash256BaseHex(number + nonce  + data+ prev);
}


function updateChain(blockChain, item, index){
    blockChain[index] = item;
    //update all prev hash after current block
    for(let i=index+1; i< 5;i++){
        let prevBlock = blockChain[i-1];
        let prevUpdate = updateHash(prevBlock.number, prevBlock.nonce, prevBlock.data, prevBlock.prev);
        blockChain[i].prev = prevUpdate;
    }
    return blockChain;
}


const style = {
    success:{ backgroundColor:"#E0FFFF"},
    failed:{backgroundColor: "#FFE4E1"}
}
function Block3(props){

    const difficult = 4;
    const checkItem = props.listBlocks3[props.index];
  


    const [item, setItem] = useState(checkItem);
 
    return (



        <>

<div class="col-xs-7">
    <body>
  
         
        <div className="block" id="block"  > 
        
            <form className="content-block" style={ checkValidBlock(updateHash(item.number, item.nonce, item.data, item.prev), difficult)?style.success:style.failed}>
                {console.log("item blabla", item)}
                <div className="form-group row">
                    <label htmlFor="block-id" className="col-sm-2 col-form-label"><b>Block:</b></label>
                    <div className="input-group col-sm-10">
                        <div className="input-group-prepend">
                            <div className="input-group-text">#</div>   
                        </div>
                        <input type="text" name="block-id" id="blockId" form="block" value={item.number} onChange={e => {
                            setItem({...item, number: e.target.value});  
                            props.onChange(updateChain(props.listBlocks3, {...item, number: e.target.value }, props.index)) ;
                        }} />
                    </div>
                </div>
                
                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Nonce:</b></label>
                    <div className="col-sm-10">
                        <input name="textnounce" id="nounce" form="block" value={item.nonce} onChange={e => {
                            setItem({...item, nonce: e.target.value});  
                            props.onChange(updateChain(props.listBlocks3, {...item, nonce: e.target.value }, props.index)) ;
                        }} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Data:</b></label>
                    <div className="col-sm-10">
                    <textarea name="textData" id="textData" form="block" value={item.data} onChange={(e) => {
                            setItem({...item, data: e.target.value});  
                            props.onChange(updateChain(props.listBlocks3, {...item, data: e.target.value }, props.index)) ;             
                            }} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Prev:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="valuePrev" value={item.prev} disabled/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Hash:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="valueHash" value={updateHash(item.number, item.nonce, item.data, item.prev)} disabled/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-2"><i className="icon-spinner icon-spin icon-large"></i></div>
                    <div className="col-sm-10">
                    <input className="btn btn-primary" type="button" value="Mine" onClick={(e)=>{
                        e.preventDefault();
                        let nonceUpdate= findNounce(item.number, item.data, item.prev , difficult).toString();
                        setItem({...item, nonce: nonceUpdate});  
                        props.onChange(updateChain(props.listBlocks3, {...item, nonce: nonceUpdate }, props.index)) ;
                    }}/>
                    </div>
                
                </div>

            </form>
        </div>

        </body>
        </div>









    </>
    
    );
}

export default Block3;