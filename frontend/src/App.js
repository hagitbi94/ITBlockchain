import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header';
import Hash from './component/Hash/hash';
import Coinbase from './component/Coinbase';
import Keys from './component/Keys';
import Block from './component/Block';
import Blockchain from './component/Blockchain';
import Signatures from './component/Signatures';
import DistributedBlockChain from './component/Distributed';
import Tokens from './component/Tokens';
import Transaction from './component/Transaction';
import FullBlock from './component/FullBlock';




function App(){
  
     
    return(

      <Router>
      <Header/>
        <Switch>
          <Route path="/hash">
            <Hash />
          </Route>
          <Route path="/block">
            <Block />
          </Route>

          <Route path="/blockchain">
            <Blockchain />
          </Route>
          <Route path="/coinbase">
            <Coinbase />
          </Route>
          <Route path="/keys">
            <Keys />
          </Route>
          <Route path="/signatures">
            <Signatures/>
          </Route>
          <Route path="/distributed">
            <DistributedBlockChain/>
          </Route>
          <Route path="/tokens">
            <Tokens/>
          </Route>
          <Route path="/transactions">
            <Transaction/>
          </Route>

          <Route path="/fullblockchain">
            <FullBlock/>
          </Route>

        </Switch>
    </Router>
    )
}


export default App;