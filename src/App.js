// import './App.css';
import FCTToken from './artifacts/contracts/FCTToken.sol/FCTToken.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Faucet from './components/Faucet.js'
import TokenSend from './components/TokenSend.js'
function App() {
  const Token = FCTToken;
  return (
  
    
       <TokenSend tokenContract={Token}/>
  
   
    
  );
 
}

export default App;