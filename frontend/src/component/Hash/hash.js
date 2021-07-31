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




// function HashFunction(text) {
//       return SHA256(text).toString();
//   }

//   function HashDarling() {
//     $("#hash").val(HashFunction($("#data").val()));
//   }
  
//   $("#data").on("change keyup paste", function() {
//     HashDarling();
//   });
  
//   $("#function").on("change", function() {
//     HashDarling();
//   });
  
//   $(document).ready(function() {
//     HashDarling();
//   });

// function Hash(){


//     // const [hash, setHash] = useState(HashDarling)

//     // function changeHash(){
//     //     setHash(prevHash => hash)
//     // }
   
     
//     return(
//         <>
    //      <head>
    //     <title>Blockchain Demo</title>
    //     <link rel="stylesheet" href="/../stylesheets/lib/bootstrap.min.css"></link>
    //     <link rel="stylesheet" href="/../stylesheets/lib/bootstrap-theme.min.css"></link>
    //     <link rel="stylesheet" href="/../stylesheets/lib/bootstrap-horizon.css"></link>
    //     <link rel="stylesheet" href="/../stylesheets/lib/ladda-themeless.min.css"></link>
    //     <link rel="stylesheet" href="/../stylesheets/lib/ie10-viewport-bug-workaround.css"></link>
    //     <link rel="stylesheet" href="/../stylesheets/blockchain.css"></link>
    //     <script src="/../javascripts/lib/jquery.min.js"></script>
    //     <script src="/../javascripts/lib/bootstrap.min.js"></script>
    //     <script src="/../javascripts/lib/spin.min.js"></script>
    //     <script src="/../javascripts/lib/ladda.min.js"></script>
    //     <script src="/../javascripts/lib/ie10-viewport-bug-workaround.js"></script>
    //     <script src="/../javascripts/lib/sha256.js"></script>
    //     <script src="/../javascripts/blockchain.js"></script>
    // </head>
    // <body>
    //     <nav class="navbar navbar-inverse navbar-fixed-top">
    //         <div class="container">
    //             <div class="navbar-header">
    //                 <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
    //                     <span class="sr-only">Toggle navigation</span>
    //                     <span class="icon-bar"></span>
    //                     <span class="icon-bar"></span>
    //                     <span class="icon-bar"></span>
    //                 </button>
    //                 <a class="navbar-brand" href="/blockchain/">Blockchain Demo</a>
    //             </div>
    //             <div class="collapse navbar-collapse" id="navbar">
    //                 <ul class="nav navbar-nav navbar-right">
    //                     <li class="active">
    //                         <a href="/blockchain/hash">Hash</a>
    //                     </li>
    //                     <li>
    //                         <a href="/blockchain/block">Block</a>
    //                     </li>
    //                     <li>
    //                         <a href="/blockchain/blockchain">Blockchain</a>
    //                     </li>
    //                     <li>
    //                         <a href="/blockchain/distributed">Distributed</a>
    //                     </li>
    //                     <li>
    //                         <a href="/blockchain/tokens">Tokens</a>
    //                     </li>
    //                     <li>
    //                         <a href="/blockchain/coinbase">Coinbase</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>
// <div class="container">
//             <h1>SHA256 Hash</h1>
//             <div class="well" id="well1">
//                 <form class="form-horizontal">
//                     <div class="form-group">
//                         <label class="col-sm-2 control-label" for="data">Data:</label>
//                         <div class="col-sm-10">
//                             <textarea class="form-control" id='data' rows="10" onKeyUp={HashDarling}></textarea>
//                         </div>
//                     </div>
//                     <div class="form-group">
//                         <label class="col-sm-2 control-label" for="hash">Hash:</label>
//                         <div class="col-sm-10">
//                             <input class="form-control" id="hash" type="text" disabled></input>
//                         </div>
//                     </div>
//                 </form>
//             </div>
            
        // </div>
        // </body>

//         </>
         
        
//     )
 
// }
 

// export default Hash;