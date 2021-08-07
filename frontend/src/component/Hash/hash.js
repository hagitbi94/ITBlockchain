import React, { useState } from 'react';
const SHA256=require("crypto-js/sha256")


function HashFunction(text) {
      return SHA256(text).toString();
  }



function Hash(){
    const [hash256, setHash256] = useState(() => HashFunction());
    
    return (
<>
  
    <body>
     
        
        <div class="container">
            <h1>SHA256 Hash</h1>
            <div class="well" id="well1">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="data">Data:</label>
                        <div class="col-sm-10">
                   
                    <textarea class="form-control" name="textData" id="textData"  rows="10"  onChange={e => {setHash256(SHA256(e.target.value))}}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label"><b>Hash:</b></label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="valueHash" value={hash256} disabled/>
                    </div>
                </div>
            </form>
        </div>
        </div>
        </body>
        </>
    );
}

export default Hash;

