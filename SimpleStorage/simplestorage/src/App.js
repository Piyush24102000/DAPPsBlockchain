import './App.css';
import Web3 from "web3";
import { useState, useEffect } from "react";

function App() {
  const abi = [
    {
      "inputs": [],
      "name": "data",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_data",
          "type": "string"
        }
      ],
      "name": "setting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getting",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]
  const address = "0x873145DdE27B97D873b7303f19799C86661185d3";
  const web3 = new Web3("http://127.0.0.1:8545");
  const callContract = new web3.eth.Contract(abi, address);

  const [account, setaccount] = useState();
  useEffect(() => {
    const loadacc = async () => {
      const data = await window.ethereum.request({ method: 'eth_requestAccounts' });

      setaccount(data[0]);
    }
    loadacc();
  }, [])
////////////////////////////
 const[input,setinput] = useState(); //input will store the data inputted
 
 const changeData = event => {
  setinput(event.target.value); 
}

  const getInput = async() => {
    const data = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const xy = data[0]
      await callContract.methods.setting(input).send({
        from:xy,
      })
  }
///////////////////////////
  const [output, setoutput] = useState();
  useEffect(() => {
    const load1 = async () => {
      const y = await callContract.methods.getting().call();
      setoutput(y);
    }
    load1();
  })

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Simple storage</h1>
            <label for="setDataInput">Set data</label>
           
            <input id="setDataInput" onChange={changeData} className="form-control"></input>
            
            <button onClick={getInput} type="submit" className="btn btn-primary" >Submit</button>
            <div>Data: <span id="data">{output}</span></div>
          
          </div>
        </div>


        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />



      </div>
    </>
  );
}

export default App;
