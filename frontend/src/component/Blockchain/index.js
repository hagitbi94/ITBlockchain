import './style.css';
import React, { useState } from 'react';
// import Crypto from '../../lib/Crypto';
import Block from './block';
function BlockChain(){

    var listBlock =[];
    listBlock.push({number: "1", chain: 1, nonce: "11316", data: "", prev: '0000000000000000000000000000000000000000000000000000000000000000'})
    listBlock.push({number: "2", chain: 1, nonce: "35230", data: "", prev: '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf'})
    listBlock.push({number: "3", chain: 1, nonce: "12937", data: "", prev: '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19'})
    listBlock.push({number: "4", chain: 1, nonce: "35990", data: "", prev: '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf'})
    listBlock.push({number: "5", chain: 1, nonce: "56265", data: "", prev: '0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83'})
    
    const [listBlocks, setListBlocks] = useState(listBlock);
    return (
        <>
       
        <body>
         <div class="container-fluid">
        
            <h1>BlockChain page</h1>
            <div class="row row-horizon" >
            {
                
                listBlock.map((item, index) => {
                    return <Block key={listBlocks[index].prev} index={index} listBlocks ={listBlocks} onChange = {list => setListBlocks({...list})}  />
                })

                
            }
            </div>
            </div>
            
            </body>
        </>
    );
}

export default BlockChain;