import React, { useState } from 'react';



function TransactionHelper({item, index, updateItem}){

    const [itemUpdate, setItemUpdate] = useState(item)


    
    return (
        <div className="input-group">
            <div className="input-group-addon">
                <span className="input-group-text">$</span>
            </div>
            <input className="form-control" id={"block"+item.index+"value"+ index} type="text" value={itemUpdate.data[index].amount} 
            onChange={(e)=>{
                    itemUpdate.data[index].amount = e.target.value;
                    setItemUpdate({...itemUpdate});
                    updateItem(itemUpdate);
                }
            }
            />
            <div className="input-group-addon">
                <span className="input-group-text">From</span>
            </div>
            <input className="form-control" id={"block"+item.index+"from"+ index} type="text" value={itemUpdate.data[index].from}
                onChange={(e)=>{
                    itemUpdate.data[index].from = e.target.value;
                    setItemUpdate({...itemUpdate});
                    updateItem(itemUpdate);
                }}    
            />
            <div className="input-group-addon">
                <span className="input-group-text">-{">"}</span>
            </div>
            <input className="form-control" id={"block"+item.index+"to"+ index} type="text" value={itemUpdate.data[index].to} 
                onChange={(e)=>{
                    itemUpdate.data[index].to = e.target.value;
                    setItemUpdate({...itemUpdate});
                    updateItem(itemUpdate);
                }}   
            />
           
        </div>
        
    )
}

export default  TransactionHelper;