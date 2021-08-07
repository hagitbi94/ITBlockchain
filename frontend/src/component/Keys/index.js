import {useCookies} from "react-cookie";
import React, { useState } from 'react';
import Crypto from '../../lib/Crypto';



const [publicK, privateK] = Crypto.genPairKey();





function Keys(){
    

    
    
    const [privateKey, setPrivateKey] = useState(privateK);
    const [publicKey, setPublicKey] = useState(publicK);
    const [cookies, setCookie] = useCookies(['privateKey', 'publicKey']);



    function createCookie(prv, pub){
        setCookie('privateKey', prv, {path:'/', maxAge:"86400"})
        setCookie('publicKey', pub, {path:'/', maxAge:"86400"})
    }

    
   createCookie(privateKey, publicKey);
   console.log("after first create");
   console.log(cookies);
    return (
<>

<body>
        <div class="container">
        <div className="block" id="block"> 
            <form className="content-block">
            <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>private Key:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="privateKey" value={privateKey} onChange={(e)=>{
                            const regexNotNumber = new RegExp('[^0-9]+');
                            if(!regexNotNumber.test(e.target.value)){
                                setPrivateKey(e.target.value)
                                if(e.target.value ===""){
                                    setPublicKey("");
                                }
                                else{
                                    setPublicKey(Crypto.getPulicKey(e.target.value))
                                }
                            }
                            createCookie(privateKey, publicKey);
                       
                        }
                    }
                    />
                    </div>

                   
                    <div className="col-sm-2"><i className="icon-spinner icon-spin icon-large"></i></div>
                    <div className="col-sm-10">
                    <input className="btn btn-primary" type="button" value="Random" onClick={(e)=>{
                      
                      e.preventDefault();
                        let [publicK, privateK] = Crypto.genPairKey();
                        setPublicKey(publicK);
                        setPrivateKey(privateK);
                       createCookie(privateKey, publicKey);
                        console.log("after random");
                        console.log(cookies);
                    }}/>
                    </div>
              
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Public Key:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="publicKey" value={publicKey} disabled/>
                    </div>
                </div>
              

            </form>
        </div>

</div>
        </body>

        </>
    );
}

export default Keys;