import './style.css';
import React, { useState } from 'react';
// import Crypto from '../../lib/Crypto';
import Block from './block';
import Block2 from './block2';
import Block3 from './block3';
function DistributedBlockChain(){

    var listBlock =[];
    listBlock.push({number: "1", chain: 1, nonce: "11316", data: "", prev: '0000000000000000000000000000000000000000000000000000000000000000'})
    listBlock.push({number: "2", chain: 1, nonce: "35230", data: "", prev: '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf'})
    listBlock.push({number: "3", chain: 1, nonce: "12937", data: "", prev: '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19'})
    listBlock.push({number: "4", chain: 1, nonce: "35990", data: "", prev: '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf'})
    listBlock.push({number: "5", chain: 1, nonce: "56265", data: "", prev: '0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83'})
    


    var listBlock2 =[];
    listBlock2.push({number: "1", chain: 1, nonce: "11316", data: "", prev: '0000000000000000000000000000000000000000000000000000000000000000'})
    listBlock2.push({number: "2", chain: 1, nonce: "35230", data: "", prev: '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf'})
    listBlock2.push({number: "3", chain: 1, nonce: "12937", data: "", prev: '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19'})
    listBlock2.push({number: "4", chain: 1, nonce: "35990", data: "", prev: '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf'})
    listBlock2.push({number: "5", chain: 1, nonce: "56265", data: "", prev: '0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83'})


    var listBlock3 =[];
    listBlock3.push({number: "1", chain: 1, nonce: "11316", data: "", prev: '0000000000000000000000000000000000000000000000000000000000000000'})
    listBlock3.push({number: "2", chain: 1, nonce: "35230", data: "", prev: '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf'})
    listBlock3.push({number: "3", chain: 1, nonce: "12937", data: "", prev: '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19'})
    listBlock3.push({number: "4", chain: 1, nonce: "35990", data: "", prev: '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf'})
    listBlock3.push({number: "5", chain: 1, nonce: "56265", data: "", prev: '0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83'})


    const [listBlocks, setListBlocks] = useState(listBlock);
    const [listBlocks2, setListBlocks2] = useState(listBlock2);
    const [listBlocks3, setListBlocks3] = useState(listBlock3);


    return (
        <>
       
        <body>
         <div class="container-fluid">
        
            <h1>Distributed Blockchain</h1>
            <h1>Peer A</h1>
            <div class="row row-horizon" >
            
            {
                
                listBlock.map((item, index) => {
                    return <Block key={listBlocks[index].prev} index={index} listBlocks ={listBlocks} onChange = {list => setListBlocks({...list})}  />
                })

                
            }
            </div>


            <h1>Peer B</h1>
            <div class="row row-horizon" >
            
            {
                
                listBlock2.map((item, index) => {
                    return <Block2 key={listBlocks2[index].prev} index={index} listBlocks2 ={listBlocks2} onChange = {list => setListBlocks2({...list})}  />
                })

                
            }
            </div>

            <h1>Peer C</h1>
            <div class="row row-horizon" >
            
            {
                
                listBlock3.map((item, index) => {
                    return <Block3 key={listBlocks3[index].prev} index={index} listBlocks3 ={listBlocks3} onChange = {list => setListBlocks3({...list})}  />
                })

                
            }
            </div>
            </div>
            
            </body>
        </>
    );
}

export default DistributedBlockChain;