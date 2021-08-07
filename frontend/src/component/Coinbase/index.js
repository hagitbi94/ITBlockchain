import Block from './block';
import Block2 from './block2';
import Block3 from './block3';
import React, { useEffect, useState } from 'react';
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import axios from "axios";
const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
  `;

function Coinbase(){


    const [listBlocks, setListBlocks] = useState("");
    const [listBlocks2, setListBlocks2] = useState("");
    const [listBlocks3, setListBlocks3] = useState("");

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(false);
        axios.get("http://localhost:3001/getblockchainwithtransandcoins").then((res) => {
            
            setListBlocks(res.data.listBlocks)
        //   setListBlocks(res.data.listBlocks);
  
        });

        axios.get("http://localhost:3001/getblockchainwithtransandcoins").then((res) => {
            // setLoading(false);
            setListBlocks2(res.data.listBlocks)
        //   setListBlocks(res.data.listBlocks);
  
        });

        axios.get("http://localhost:3001/getblockchainwithtransandcoins").then((res) => {
            // setLoading(false);
            setListBlocks3(res.data.listBlocks)
        //   setListBlocks(res.data.listBlocks);
  
        });
       


      }, []);


    
    return (
        <>
         { 
          
          
          loading === false && listBlocks !==""  && listBlocks2 !=="" && listBlocks3 !=="" ? (



            <body>
            <div class="container-fluid">
           
               <h1>Coinbase page</h1>
               <h1>Peer A</h1>
               <div class="row row-horizon" >
               
               {
                   
                  Object.values(listBlocks).map((item, i) => {
                       return <Block key={listBlocks[i].previousHash} index={i} listBlocks ={listBlocks} onChange = {list => setListBlocks({...list})}  />
                   })
   
                   
               }
               </div>
   
   
               <h1>Peer B</h1>
               <div class="row row-horizon" >
               
               {
                   
                   Object.values(listBlocks2).map((item, i) => {
                       return <Block2 key={listBlocks2[i].previousHash} index={i} listBlocks2 ={listBlocks2} onChange = {list => setListBlocks2({...list})}  />
                   })
   
                   
               }
               </div>
   
               <h1>Peer C</h1>
               <div class="row row-horizon" >
               
               {
                   
                   Object.values(listBlocks3).map((item, i) => {
                       return <Block3 key={listBlocks3[i].previousHash} index={i} listBlocks3 ={listBlocks3} onChange = {list => setListBlocks3({...list})}  />
                   })
   
                   
               }
               </div>
               </div>
               
               </body>
                     ):(
                      <div className="spinner">
                <BeatLoader css={loaderCSS} size={72} color="pink" loading />
                  </div>
                  )
                 
                  
      }
        </>
    );

}


export default Coinbase;