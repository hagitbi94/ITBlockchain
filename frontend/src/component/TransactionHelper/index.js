import React, { useState } from 'react';



function TransactionHelper({item, index, updateItem}){

    const [itemUpdate, setItemUpdate] = useState(item)

    return (
        <div className="input-group">
            <div className="input-group-addon">
                <span className="input-group-text">$</span>
            </div>
            <input className="form-control" id={"block"+item.number+"value"+ index} type="text" value={itemUpdate.txs[index].value} 
            onChange={(e)=>{
                    itemUpdate.txs[index].value = e.target.value;
                    setItemUpdate({...itemUpdate});
                    updateItem(itemUpdate);
                }
            }
            />
            <div className="input-group-addon">
                <span className="input-group-text">From</span>
            </div>
            <input className="form-control" id={"block"+item.number+"from"+ index} type="text" value={itemUpdate.txs[index].from}
                onChange={(e)=>{
                    itemUpdate.txs[index].from = e.target.value;
                    setItemUpdate({...itemUpdate});
                    updateItem(itemUpdate);
                }}    
            />
            <div className="input-group-addon">
                <span className="input-group-text">-{">"}</span>
            </div>
            <input className="form-control" id={"block"+item.number+"to"+ index} type="text" value={itemUpdate.txs[index].to} 
                onChange={(e)=>{
                    itemUpdate.txs[index].to = e.target.value;
                    setItemUpdate({...itemUpdate});
                    updateItem(itemUpdate);
                }}   
            />
           
        </div>
        
    )
}

export default  TransactionHelper;