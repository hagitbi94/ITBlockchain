import Block from './block';
import Block2 from './block2';
import Block3 from './block3';
import React, { useState } from 'react';
function FullBlock(){

    var listBlock =[];
        listBlock.push({number: "1", chain: 1, nonce: "16119", coinbasevalue: '100.00', coinbaseto: '04fe1be031bc7a54d900ff062911bc4f7ba0edb39e4280268e490b79e347e3b8b0019c252aad7536ef7caeb061d558cac2eaec43ff670d76a521bec77c35751310', txs: [], prev: '0000000000000000000000000000000000000000000000000000000000000000'})
        listBlock.push({number: "2", chain: 1, nonce: "215458", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '10.00', from: 'Anders', to: 'Sophia' },{value: '20.00', from: 'Anders', to: 'Lucas'},{value: '15.00', from: 'Anders', to: 'Emily'},{value: '15.00', from: 'Anders', to: 'Madison'}], prev: '0000438d7625b86a6f366545b1929975a0d3ff1f8847e56cc587cadddb0ab781'})
        listBlock.push({number: "3", chain: 1, nonce: "146", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '10.00', from: 'Emily', to: 'Jackson'},{value: '5.00', from: 'Madison', to: 'Jackson'},{value: '20.00', from: 'Lucas', to: 'Grace'}], prev: '0000baeab68c2a60f9a6fa56355438d97c672a15494fcea617064d9314f9ff63'})
        listBlock.push({number: "4", chain: 1, nonce: "18292", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '15.00', from: 'Jackson', to: 'Ryan'},{value: '5.00', from: 'Emily', to: 'Madison'},{value: '8.00', from: 'Sophia', to: 'Jackson'}], prev: '0000df1d632b734f5a5fc126a0f0e8894fb4c8314ba7086b62980559af6771b9'})
        listBlock.push({number: "5", chain: 1, nonce: "108899", coinbasevalue: '100.00', coinbaseto: 'Sophia', txs: [{value: '2.00', from: 'Jackson', to: 'Alexander'},{value: '6.00', from: 'Ryan', to: 'Carter'},{value: '4.00', from: 'Ryan', to: 'Riley'},{value: '9.95', from: 'Grace', to: 'Katherine'}], prev: '0000c694336f88129f3685bd3ba5d67c445dfd8d18bd22f5d87301dd560eb30e'})
   


        var listBlock2 =[];
        listBlock2.push({number: "1", chain: 1, nonce: "16651", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [], prev: '0000000000000000000000000000000000000000000000000000000000000000'})
        listBlock2.push({number: "2", chain: 1, nonce: "215458", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '10.00', from: 'Anders', to: 'Sophia'},{value: '20.00', from: 'Anders', to: 'Lucas'},{value: '15.00', from: 'Anders', to: 'Emily'},{value: '15.00', from: 'Anders', to: 'Madison'}], prev: '0000438d7625b86a6f366545b1929975a0d3ff1f8847e56cc587cadddb0ab781'})
        listBlock2.push({number: "3", chain: 1, nonce: "146", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '10.00', from: 'Emily', to: 'Jackson'},{value: '5.00', from: 'Madison', to: 'Jackson'},{value: '20.00', from: 'Lucas', to: 'Grace'}], prev: '0000baeab68c2a60f9a6fa56355438d97c672a15494fcea617064d9314f9ff63'})
        listBlock2.push({number: "4", chain: 1, nonce: "18292", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '15.00', from: 'Jackson', to: 'Ryan'},{value: '5.00', from: 'Emily', to: 'Madison'},{value: '8.00', from: 'Sophia', to: 'Jackson'}], prev: '0000df1d632b734f5a5fc126a0f0e8894fb4c8314ba7086b62980559af6771b9'})
        listBlock2.push({number: "5", chain: 1, nonce: "108899", coinbasevalue: '100.00', coinbaseto: 'Sophia', txs: [{value: '2.00', from: 'Jackson', to: 'Alexander'},{value: '6.00', from: 'Ryan', to: 'Carter'},{value: '4.00', from: 'Ryan', to: 'Riley'},{value: '9.95', from: 'Grace', to: 'Katherine'}], prev: '0000c694336f88129f3685bd3ba5d67c445dfd8d18bd22f5d87301dd560eb30e'})


        var listBlock3 =[];
        listBlock3.push({number: "1", chain: 1, nonce: "16651", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [], prev: '0000000000000000000000000000000000000000000000000000000000000000'})
        listBlock3.push({number: "2", chain: 1, nonce: "215458", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '10.00', from: 'Anders', to: 'Sophia'},{value: '20.00', from: 'Anders', to: 'Lucas'},{value: '15.00', from: 'Anders', to: 'Emily'},{value: '15.00', from: 'Anders', to: 'Madison'}], prev: '0000438d7625b86a6f366545b1929975a0d3ff1f8847e56cc587cadddb0ab781'})
        listBlock3.push({number: "3", chain: 1, nonce: "146", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '10.00', from: 'Emily', to: 'Jackson'},{value: '5.00', from: 'Madison', to: 'Jackson'},{value: '20.00', from: 'Lucas', to: 'Grace'}], prev: '0000baeab68c2a60f9a6fa56355438d97c672a15494fcea617064d9314f9ff63'})
        listBlock3.push({number: "4", chain: 1, nonce: "18292", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [{value: '15.00', from: 'Jackson', to: 'Ryan'},{value: '5.00', from: 'Emily', to: 'Madison'},{value: '8.00', from: 'Sophia', to: 'Jackson'}], prev: '0000df1d632b734f5a5fc126a0f0e8894fb4c8314ba7086b62980559af6771b9'})
        listBlock3.push({number: "5", chain: 1, nonce: "108899", coinbasevalue: '100.00', coinbaseto: 'Sophia', txs: [{value: '2.00', from: 'Jackson', to: 'Alexander'},{value: '6.00', from: 'Ryan', to: 'Carter'},{value: '4.00', from: 'Ryan', to: 'Riley'},{value: '9.95', from: 'Grace', to: 'Katherine'}], prev: '0000c694336f88129f3685bd3ba5d67c445dfd8d18bd22f5d87301dd560eb30e'})

    const [listBlocks, setListBlocks] = useState(listBlock);
    const [listBlocks2, setListBlocks2] = useState(listBlock2);
    const [listBlocks3, setListBlocks3] = useState(listBlock3);
    return (
        <>
         <body>
         <div class="container-fluid">
        
            <h1>Full Blockchain page</h1>
           
             <div class="row row-horizon" >
            {
                listBlock.map((item, index) => {
                    return <Block key={listBlocks[index].prev} index={index} listBlocks ={listBlocks} onChange = {list => setListBlocks({...list})} />
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


export default FullBlock;