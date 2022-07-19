import Web3 from "web3";
import { useState, useEffect } from 'react';
export default function Home() {
  const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "arr",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "add",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "i",
          "type": "uint256"
        }
      ],
      "name": "get",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getAll",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "length",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]
  const address = '0xdbf8AD4c2D87441DC6f8DcA846Fe5158E8101910';
  const web3 = new Web3('http://127.0.0.1:8545');
  const callContract = new web3.eth.Contract(abi, address);

  const [connect, setconnect] = useState();
  const walletconnect = async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    setconnect(account);
  }
  walletconnect()

  ////////Solidity add function///////////
  const [getinput, setinput] = useState();  ///getinput will be an input parameter
  const input = event => {
    setinput(event.target.value);
  }
  const append = async () => {
    await callContract.methods.add(getinput).send({
      from: connect,
    })
  }
  ///////////Get function///////////////////
  const [getindex, setindex] = useState(); ///get index as input to parameter
  const index = event => {
    setindex(event.target.value);
  }
  const [fetch, setfetch] = useState();
  const getId = async () => {
    const y = await callContract.methods.get(getindex).call();
    setfetch(y);
  }
  //////////////Get All function////////////
  const [getarr, setarr] = useState();
  const getarray = async () => {
    const z = await callContract.methods.getAll().call();
    setarr('' + z) //Use simply ' '+ z
  }

  /////////////Length function//////////////
  const[len,setlen] = useState();
  const getlen = async() => {
    const x = await callContract.methods.length().call();
    setlen(x)
  }
  ///////////////////////////////////////////
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Array storage </h1>
            <label for="addDataInput">Add Number to array</label>
            <input onChange={input} id="addDataInput" type="number" className="form-control"></input>

            <div>&nbsp;</div>

            <label for="addDataInput">Get Number by index</label>
            <input onChange={index} id="addDataInput" type="number" className="form-control"></input>
            &nbsp;
          </div>

          <button onClick={append} type="submit" className="btn btn-primary">Add Number</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={getId} type="submit" className="btn btn-secondary">Get Number</button>

        </div>

        &nbsp;

        <div><h3>Result:{fetch} <span id="data"></span></h3></div>
        <button onClick={getarray} type="submit" className="btn btn-success">Get all Elements</button>

        &nbsp;&nbsp;&nbsp;

        <button onClick={getlen} type="submit" className="btn btn-danger">Get length of Elements</button>

      </div>
      &nbsp;
      <div className="ml-5" ><h3>Array is:[{getarr}]<span id="data"></span></h3></div>
      &nbsp;
      <div className="ml-5"><h3>Length :{len}<span id="data"></span></h3></div>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    </>

  )
}