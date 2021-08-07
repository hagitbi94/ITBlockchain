import './style.css';
import React, {useEffect, useState } from 'react';
// import Crypto from '../../lib/Crypto';
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import axios from "axios";
import Block from './block';
function BlockChain(){

  const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
  `;

  
    const [listBlocks, setListBlocks] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        
        axios.get("http://localhost:3001/getblockchain").then(async(res) => {
            setLoading(false);
            setListBlocks(res.data.listBlocks)
       
  
        });
      }, []);

    return (
        <>
       
       { 
          
          
          loading === false && listBlocks !=="" ? (



        <body>
         <div class="container-fluid">
        
            <h1>BlockChain page</h1>
            <div class="row row-horizon" >
            {
                
                Object.values(listBlocks).map((item, i) => {
                    return <Block key={listBlocks[i].previousHash} index={i} listBlocks ={listBlocks}  onChange = {list => setListBlocks({...list})}  />
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

export default BlockChain;

