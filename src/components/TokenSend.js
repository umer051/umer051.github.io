
import { useState } from 'react';
import { ethers } from 'ethers'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const tokenAddress = "0xad6d458402f60fd3bd25163575031acdce07538d"

const TokenSend = (props) => {

  const [userAccount, setUserAccount] = useState()
  const [amount, setAmount] = useState()

  const [balance, setBalance] = useState()
  const [showBalance, setShowBalance] = useState(false)
  const [add, setadd] = useState(false)

  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, props.tokenContract.abi, provider)
      const balance = await contract.balanceOf(account);
      console.log("Balance: ", balance.toString());
      setBalance(balance.toString());
      setadd(account.toString());
      setShowBalance(true);
    }
  }
  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function sendCoins() {
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(tokenAddress, props.tokenContract.abi, signer);
    const transation = await contract.transfer(userAccount, (amount* (10**18)).toString());
    await transation.wait();
    console.log(`${amount} Coins successfully sent to ${userAccount}`);
  }
}
    return (
        // <Card style={{background: "skyblue", width:"200%", marginLeft: "-40%"}}>
        // <Card.Body>
          
        // <Card.Subtitle> Send DAI Token 
        // </Card.Subtitle>
        // <br></br>
        // <div className="d-grid gap-2">
        // <input onChange={e => setUserAccount(e.target.value)} placeholder="Payee 0x address" /><br>
        // </br><br></br>
        // <input onChange={e => setAmount(e.target.value)} placeholder="Amount" /><br>
        // </br>
        // <br></br>
        // <Button onClick={sendCoins} variant="info">Send </Button>
        // </div>
        // </Card.Body>
        // </Card>
        <html>
        <head>
          <meta charset="UTF-8" />
          <title>E2E Test Dapp</title>
          <link rel="icon" type="image/svg" href="metamask-fox.svg" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.14.1/css/mdb.min.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="index.css" type="text/css" />
        </head>
      
        <body>
          <main class="container-fluid">
            <header>
              <div id="logo-container">
                <h1 id="logo-text" class="text-center">
                  BCC-PT
                </h1>
      
       
              </div>
            </header>
            <section>
            
      
              <div class="row">
                <div class="col-xl-2 col-lg-6 col-md-12 col-sm-12 col-12">
                  
                </div>
                <div class="col-xl-2 col-lg-6 col-md-12 col-sm-12 col-12">
                  
                </div>
                <div class="col-xl-2 col-lg-6 col-md-12 col-sm-12 col-12">
                 
                </div>
                <div class="col-xl-2 col-lg-6 col-md-12 col-sm-12 col-12">
                  
                </div>
                <div class="col-xl-2 col-lg-6 col-md-12 col-sm-12 col-12">
                
                </div>
              
      
                <div class="col-xl-2 col-lg-6 col-md-12 col-sm-12 col-12">
                <button class="info-text alert alert-primary" onClick={getBalance}>
                    Connect Wallet: <span id="network"></span>
                  </button>
                </div>
              </div>
            </section>
            <section>
            
      
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <p class="info-text alert alert-primary">
                    Account: <span id="network">{add}</span>
                  </p>
                </div>
      
              
      
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <p class="info-text alert alert-success">
                    Balance: <span id="accounts">{balance}</span>
                  </p>
                </div>
              </div>
            </section>
      
           
      
       
      
            <section>
              <div class="row">
                
      
                <div
                  class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 "
                >
                  <div class="card full-width">
                    <div class="card-body">
                      <h4 class="card-title">
                        Send DAI
                      </h4>
      
                      <input
                          class="form-control"
                          type="text"
                          placeholder="Message to encrypt"
                          id="encryptMessageInput"
                          onChange={e => setUserAccount(e.target.value)}
                        />
                        <br></br>
                  
                         <input
                          class="form-control"
                          type="text"
                          placeholder="Message to encrypt"
                          id="encryptMessageInput"
                          onChange={e => setAmount(e.target.value)}
                        />
      
                 
      <br></br>
                      <button
                        class="btn btn-primary btn-lg btn-block mb-3"
                        id="transferTokens"
                        onClick={sendCoins}
                      >
                        Transfer Tokens
                      </button>
      
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
           
          </main>
      
          <script src="bundle.js" defer></script>
        </body>
      </html>
      
    )
}

export default TokenSend