import React, { useState } from 'react';



function CoinbaseHelper({item, index, updateItem}){

    const [itemUpdate, setItemUpdate] = useState(item)


    return (



        <div className="input-group">
        <div className="input-group-addon">
            <span className="input-group-text">$</span>
        </div>
        <input className="form-control" id={"block"+item.index} type="text" value={itemUpdate.coinbase.amount} 
            onChange={e => {
                itemUpdate.coinbase.amount = e.target.value;
                    setItemUpdate({...itemUpdate});
                    updateItem(itemUpdate);
            }}
        />
        <div className="input-group-addon">
            <span className="input-group-text">-{">"}</span>
        </div>
        <input className="form-control" id={"block"+item.index} type="text" value={itemUpdate.coinbase.to} 
            onChange={e => {
                itemUpdate.coinbase.to = e.target.value;
                setItemUpdate({...itemUpdate});
                updateItem(itemUpdate);
            }}
        />
    </div>


      
        
    )
}

export default  CoinbaseHelper;