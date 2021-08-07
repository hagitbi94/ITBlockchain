import React, { useState } from 'react';
import './style.css'
import Crypto from '../../lib/Crypto';

function getCookie(){
    let cookies = document.cookie.split("; ").map(item => {
        let [key, value] = item.split("=");
        return {[key]: value}
    })
    return Object.assign({}, ...cookies);
}


const style =(verify) => {
    if(verify === 'none') return;
    if(verify){
        return { backgroundColor: "#E0FFFF"}
    }
    return {backgroundColor: "#FFE4E1"}
}

function Transaction(){
    const [active, setActive] = useState(false);
    const cookies = getCookie();
    const [privateKey] = useState(cookies["privateKey"]);
    const [msg, setMsg] = useState("20.00")
    const [publicKey, setPublicKey] = useState(cookies["publicKey"]);
    const [signature, setSignature] = useState();
    const [verify, setVerify] = useState('none');
    const [sendTo, setSendTo] = useState("04cc955bf8e359cc7ebbb66f4c2dc616a93e8ba08e93d27996e20299ba92cba9cbd73c2ff46ed27a3727ba09486ba32b5ac35dd20c0adec020536996ca4d9f3d74")
    // setMsg("20.00")
    return (
        <>

        <body>
            <div class="container">
        <div className="content">
            <input class="btn-change-form" type="button" value="Sign" onClick={
                (e)=>{
                    e.preventDefault();
                    setActive(false);
                }
            }/>
            <input class="btn-change-form" type="button" value="Verify"   onClick={
                (e)=>{
                    e.preventDefault();
                    setVerify('none')
                    setActive(true);
                }
            }
            />
        </div>
        <div className="block" id="block" style={{marginTop:"0px"}}> 
            
            <form className={"content-block" + (active?" d-none":"")} id="sign">
                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Message:</b></label>
                    <div className="input-group">
                        <div class="input-group-addon">$</div>
                        <input class="form-control" id="sign-amount" value={msg} onChange={e =>{
                            setMsg(e.target.value);
                            // createCookie(e.target.value);

                        }


                        }
                        
                        
                        ></input>
                        <div class="input-group-addon">From:</div>
                        <input class="form-control" value={publicKey} id="sign-from" onChange={(e)=>{

                             setPublicKey(e.target.value)
                        }}
                        
                        
                        
                        ></input>
                        <div class="input-group-addon">-{'>'}</div>
                        <input class="form-control" id="sign-to" value={sendTo} onChange={(e) =>{

                            setSendTo(e.target.value)
                        }




                        }></input>


                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>privateKey:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="privateKey-sign" value={privateKey} disabled/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2"><i className="icon-spinner icon-spin icon-large"></i></div>
                    <div className="col-sm-10">
                    <input className="btn btn-primary" type="button" value="Sign" onClick={(e)=>{
                        setSignature(Crypto.signMsg(msg, privateKey));
                    }}/>
                    </div>
                </div>
                
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Sign msg:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="privateKey-sign" value={signature} disabled/>
                    </div>
                </div>

            </form>

            <form className={"content-block"+ (!active?" d-none":"")} id="verify" style={style(verify)} >
                <div className="form-group row">
                    <label htmlFor="data-row" className="col-sm-2 col-form-label"><b>Message:</b></label>
                    <div className="input-group">
                        <div class="input-group-addon">$</div>
                        <input class="form-control" id="sign-amount" value="20.00"></input>
                        <div class="input-group-addon">From:</div>
                        <input class="form-control" value={publicKey} id="sign-from"></input>
                        <div class="input-group-addon">-{'>'}</div>
                        <input class="form-control" id="sign-to" value="04cc955bf8e359cc7ebbb66f4c2dc616a93e8ba08e93d27996e20299ba92cba9cbd73c2ff46ed27a3727ba09486ba32b5ac35dd20c0adec020536996ca4d9f3d74"></input>


                    </div>
                </div>
               
            
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Signature:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="privateKey-verify" value={signature} onChange={
                        (e) => setSignature(e.target.value)
                    }/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-2"><i className="icon-spinner icon-spin icon-large"></i></div>
                    <div className="col-sm-10">
                    <input className="btn btn-primary" type="button" value="verify" onClick={(e)=>{
                        const regexNotHexForm = new RegExp('[^0-9a-fA-F]+');
                        if(regexNotHexForm.test(publicKey) || regexNotHexForm.test(signature)  ){
                            setVerify(false);
                        }
                        else{
                            setVerify(Crypto.verifyMsg(msg, publicKey, signature))
                        }
                        
                    }}/>
                    </div>
                </div>
            </form>
        </div>
        </div>
        </body>
    </>
    );
}

export default Transaction;