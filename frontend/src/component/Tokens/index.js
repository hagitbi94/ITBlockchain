import Block from './block';
import Block2 from './block2';
import Block3 from './block3';
import React, { useState } from 'react';
function Tokens(){
    var listBlock =[];
        // listBlock.push({number: "1", chain: 1, nonce: "16651", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [], prev: '0000000000000000000000000000000000000000000000000000000000000000'})
        listBlock.push({number: "1", chain: 1, nonce: "139358",   txs: [{value: '25.00', from: 'Darcy', to: 'Bingley'},{value: '4.27', from: 'Elizabeth', to: 'Jane'},{value: '19.22', from: 'Wickham', to: 'Lydia'},{value: '106.44', from: 'Lady Catherine de Bourgh', to: 'Collins'},{value: '6.42', from: 'Charlotte', to: 'Elizabeth'}], prev: '0000000000000000000000000000000000000000000000000000000000000000'})
        listBlock.push({number: "2", chain: 1, nonce: "39207",    txs: [{value: '97.67', from: 'Ripley', to: 'Lambert'},{value: '48.61', from: 'Kane', to: 'Ash'},{value: '6.15', from: 'Parker', to: 'Dallas'},{value: '10.44', from: 'Hicks', to: 'Newt'},{value: '88.32', from: 'Bishop', to: 'Burke'},{value: '45.00', from: 'Hudson', to: 'Gorman'},{value: '92.00', from: 'Vasquez', to: 'Apone'}], prev: '00000c52990ee86de55ec4b9b32beefd745d71675dc0eddfbc7b88336e2e296b'})
        listBlock.push({number: "3", chain: 1, nonce: "146", txs: [{value: '10.00', from: 'Emily', to: 'Jackson'},{value: '5.00', from: 'Madison', to: 'Jackson'},{value: '20.00', from: 'Lucas', to: 'Grace'}], prev: '0000baeab68c2a60f9a6fa56355438d97c672a15494fcea617064d9314f9ff63'})
        listBlock.push({number: "4", chain: 1, nonce: "18292",  txs: [{value: '15.00', from: 'Jackson', to: 'Ryan'},{value: '5.00', from: 'Emily', to: 'Madison'},{value: '8.00', from: 'Sophia', to: 'Jackson'}], prev: '0000df1d632b734f5a5fc126a0f0e8894fb4c8314ba7086b62980559af6771b9'})
        listBlock.push({number: "5", chain: 1, nonce: "108899", txs: [{value: '2.00', from: 'Jackson', to: 'Alexander'},{value: '6.00', from: 'Ryan', to: 'Carter'},{value: '4.00', from: 'Ryan', to: 'Riley'},{value: '9.95', from: 'Grace', to: 'Katherine'}], prev: '0000c694336f88129f3685bd3ba5d67c445dfd8d18bd22f5d87301dd560eb30e'})
   


        var listBlock2 =[];
        // listBlock.push({number: "1", chain: 1, nonce: "16651", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [], prev: '0000000000000000000000000000000000000000000000000000000000000000'})
        listBlock2.push({number: "1", chain: 1, nonce: "139358",   txs: [{value: '25.00', from: 'Darcy', to: 'Bingley'},{value: '4.27', from: 'Elizabeth', to: 'Jane'},{value: '19.22', from: 'Wickham', to: 'Lydia'},{value: '106.44', from: 'Lady Catherine de Bourgh', to: 'Collins'},{value: '6.42', from: 'Charlotte', to: 'Elizabeth'}], prev: '0000000000000000000000000000000000000000000000000000000000000000'})
        listBlock2.push({number: "2", chain: 1, nonce: "39207",    txs: [{value: '97.67', from: 'Ripley', to: 'Lambert'},{value: '48.61', from: 'Kane', to: 'Ash'},{value: '6.15', from: 'Parker', to: 'Dallas'},{value: '10.44', from: 'Hicks', to: 'Newt'},{value: '88.32', from: 'Bishop', to: 'Burke'},{value: '45.00', from: 'Hudson', to: 'Gorman'},{value: '92.00', from: 'Vasquez', to: 'Apone'}], prev: '00000c52990ee86de55ec4b9b32beefd745d71675dc0eddfbc7b88336e2e296b'})
        listBlock2.push({number: "3", chain: 1, nonce: "146", txs: [{value: '10.00', from: 'Emily', to: 'Jackson'},{value: '5.00', from: 'Madison', to: 'Jackson'},{value: '20.00', from: 'Lucas', to: 'Grace'}], prev: '0000baeab68c2a60f9a6fa56355438d97c672a15494fcea617064d9314f9ff63'})
        listBlock2.push({number: "4", chain: 1, nonce: "18292",  txs: [{value: '15.00', from: 'Jackson', to: 'Ryan'},{value: '5.00', from: 'Emily', to: 'Madison'},{value: '8.00', from: 'Sophia', to: 'Jackson'}], prev: '0000df1d632b734f5a5fc126a0f0e8894fb4c8314ba7086b62980559af6771b9'})
        listBlock2.push({number: "5", chain: 1, nonce: "108899", txs: [{value: '2.00', from: 'Jackson', to: 'Alexander'},{value: '6.00', from: 'Ryan', to: 'Carter'},{value: '4.00', from: 'Ryan', to: 'Riley'},{value: '9.95', from: 'Grace', to: 'Katherine'}], prev: '0000c694336f88129f3685bd3ba5d67c445dfd8d18bd22f5d87301dd560eb30e'})
        
        

        var listBlock3 =[];
        // listBlock.push({number: "1", chain: 1, nonce: "16651", coinbasevalue: '100.00', coinbaseto: 'Anders', txs: [], prev: '0000000000000000000000000000000000000000000000000000000000000000'})
        listBlock3.push({number: "1", chain: 1, nonce: "139358",   txs: [{value: '25.00', from: 'Darcy', to: 'Bingley'},{value: '4.27', from: 'Elizabeth', to: 'Jane'},{value: '19.22', from: 'Wickham', to: 'Lydia'},{value: '106.44', from: 'Lady Catherine de Bourgh', to: 'Collins'},{value: '6.42', from: 'Charlotte', to: 'Elizabeth'}], prev: '0000000000000000000000000000000000000000000000000000000000000000'})
        listBlock3.push({number: "2", chain: 1, nonce: "39207",    txs: [{value: '97.67', from: 'Ripley', to: 'Lambert'},{value: '48.61', from: 'Kane', to: 'Ash'},{value: '6.15', from: 'Parker', to: 'Dallas'},{value: '10.44', from: 'Hicks', to: 'Newt'},{value: '88.32', from: 'Bishop', to: 'Burke'},{value: '45.00', from: 'Hudson', to: 'Gorman'},{value: '92.00', from: 'Vasquez', to: 'Apone'}], prev: '00000c52990ee86de55ec4b9b32beefd745d71675dc0eddfbc7b88336e2e296b'})
        listBlock3.push({number: "3", chain: 1, nonce: "146", txs: [{value: '10.00', from: 'Emily', to: 'Jackson'},{value: '5.00', from: 'Madison', to: 'Jackson'},{value: '20.00', from: 'Lucas', to: 'Grace'}], prev: '0000baeab68c2a60f9a6fa56355438d97c672a15494fcea617064d9314f9ff63'})
        listBlock3.push({number: "4", chain: 1, nonce: "18292",  txs: [{value: '15.00', from: 'Jackson', to: 'Ryan'},{value: '5.00', from: 'Emily', to: 'Madison'},{value: '8.00', from: 'Sophia', to: 'Jackson'}], prev: '0000df1d632b734f5a5fc126a0f0e8894fb4c8314ba7086b62980559af6771b9'})
        listBlock3.push({number: "5", chain: 1, nonce: "108899", txs: [{value: '2.00', from: 'Jackson', to: 'Alexander'},{value: '6.00', from: 'Ryan', to: 'Carter'},{value: '4.00', from: 'Ryan', to: 'Riley'},{value: '9.95', from: 'Grace', to: 'Katherine'}], prev: '0000c694336f88129f3685bd3ba5d67c445dfd8d18bd22f5d87301dd560eb30e'})


        
    const [listBlocks, setListBlocks] = useState(listBlock);
    const [listBlocks2, setListBlocks2] = useState(listBlock2);
    const [listBlocks3, setListBlocks3] = useState(listBlock3);
    return (
        <>
         <body>
         <div class="container-fluid">
        
            <h1>Tokens</h1>
           
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


export default Tokens;