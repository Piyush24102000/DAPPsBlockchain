import './App.css';
import Web3 from "web3";
import {useState,useEffect} from 'react';

function App() {
  const abi =   [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_data",
          "type": "string"
        }
      ],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    }
  ]
  const address = "0x544CC2e804266a88231c922bf1f1605848AB8D0A"
  const web3 = new Web3(Web3.givenProvider||'http://127.0.0.1:8545');
  const contractcall = new web3.eth.Contract(abi,address);
  
  ///// Calling the snart contract //////////
  const[call,setcall] = useState();
  useEffect(()=>{
    const calling = async() => {
      //const y = document.getElementById("demo").innerHTML;
     const x = await contractcall.methods.hello("Piyush Raju Tale").call();
    setcall(x);
  }
  calling();
  },[contractcall.methods])
  
  return (
    <>
    <div className="container">
      <div className="row">
        
        <div className="col-sm-12">
          <h1 id="demo">Hello World</h1>
        <span>Data:{call}</span>
        </div>
      </div>
    </div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

    </>
  )
  }  
export default App;
