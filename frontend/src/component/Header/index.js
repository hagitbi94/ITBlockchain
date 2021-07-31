import{  Link } from "react-router-dom"
const Header= () =>{
    return (
        
        <div>
         <link rel="stylesheet" href="/../stylesheets/lib/bootstrap.min.css"></link>
        <link rel="stylesheet" href="/../stylesheets/lib/bootstrap-theme.min.css"></link>
        <link rel="stylesheet" href="/../stylesheets/lib/bootstrap-horizon.css"></link>
        <link rel="stylesheet" href="/../stylesheets/lib/ladda-themeless.min.css"></link>
        <link rel="stylesheet" href="/../stylesheets/lib/ie10-viewport-bug-workaround.css"></link>
        <link rel="stylesheet" href="/../stylesheets/blockchain.css"></link>
        <script src="/../javascripts/lib/jquery.min.js"></script>
        <script src="/../javascripts/lib/bootstrap.min.js"></script>
        <script src="/../javascripts/lib/spin.min.js"></script>
        <script src="/../javascripts/lib/ladda.min.js"></script>
        <script src="/../javascripts/lib/ie10-viewport-bug-workaround.js"></script>
        <script src="/../javascripts/lib/sha256.js"></script>
        <script src="/../javascripts/blockchain.js"></script>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">Blockchain Demo</a>
                </div>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                        <Link to="/hash" className="nav-link">Hash</Link>
                        </li>
                        <li>
                        <Link to="/block" className="nav-link">Block</Link>
                        </li>
                        <li>
                        <Link to="/blockchain" className="nav-link">Blockchain</Link>
                        </li>
                        <li>
                        <Link to="/distributed" className="nav-link">Distributed</Link>
                        </li>
                        <li>
                        <Link to="/tokens" className="nav-link">Tokens</Link>
                        </li>
                        <li>
                        <Link to="/coinbase" className="nav-link">Coinbase</Link>
                        </li>
                        <li>
                        <Link to="/keys" className="nav-link">Keys</Link>
                        </li>
                        <li>
                        <Link to="/signatures" className="nav-link">Signatures</Link>

                        </li>
                        <li>
                        <Link to="/transactions" className="nav-link">Transaction</Link>
                        
                        </li>
                        <li>
                        <Link to="/fullblockchain" className="nav-link">FullBlock</Link>
                        
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Header;