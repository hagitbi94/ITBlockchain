import React, { useState } from 'react';



function TransactionSignHelper({item, index, updateItem}){

    const [itemUpdate, setItemUpdate] = useState(item)


    
    return (
        <div class="col-sm">
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
            <input className="form-control" id={"block"+item.index+"from"+ index} type="text" value={itemUpdate.data[index].fromPublic}
                onChange={(e)=>{
                    itemUpdate.data[index].fromPublic = e.target.value;
                    setItemUpdate({...itemUpdate});
                    updateItem(itemUpdate);
                }}    
            />
            <div className="input-group-addon">
                <span className="input-group-text">-{">"}</span>
            </div>
            <input className="form-control" id={"block"+item.index+"to"+ index} type="text" value={itemUpdate.data[index].toPublic} 
                onChange={(e)=>{
                    itemUpdate.data[index].toPublic = e.target.value;
                    setItemUpdate({...itemUpdate});
                    updateItem(itemUpdate);
                }}   
            />
          
         
         
        
         
          
               
                
        </div>
        <div className="input-group">
          
          <div className="input-group-addon">

               <div className="input-group-text">Sig</div>
           </div>
           
           
           
                       <input className="form-control" id={"block"+item.index} type="text" value={itemUpdate.data[index].signature}
                        onChange={e => {
                           itemUpdate.data[index].signature = e.target.value;
                           setItemUpdate({...itemUpdate});
                           updateItem(itemUpdate);
                      
                      
                      }} />
               
                
               </div>
        </div>
    )
}

export default  TransactionSignHelper;