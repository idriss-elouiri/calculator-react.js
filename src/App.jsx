import { useState } from 'react'
import './App.css'

function App() {
  const [number , setNumber] = useState("");
  const [result , setResult] = useState("");
  const obs = ["/", "*", "-", "+" , "."];
  //showOperation
  const showOperation = (value) =>{
   
    if(obs.includes(value) && number === "" ||
      obs.includes(value) && obs.includes(number.slice(-1))
    )
    return;
  
     setNumber(number + value);

     if(!obs.includes(value)){
      setResult(eval(number + value).toString())
     }
    }


  //MakeWritingNumbersEasier
  const MakeWritingNumbersEasier = () =>{
    const numbers = []; 
    for(let i = 1 ; i < 10 ; i++){
      numbers.push(
        <button key={i} onClick={() => showOperation(i.toString())}>{i}</button>
      )
    }

    return numbers ;
  }
  // function remove
  const remove = ()=>{
    if(number == '') return
    setNumber(number.slice(0 , -1))
  }
  // calc result
  const calcResult = ()=>{
    setNumber(eval(number).toString())
  }
  return (
    <div className="App">
      <div className='container'>
        <div className="output">
          <div className="result">{ result ? <span>{result}</span> : "(0)"}</div>
          <div className="Write-The-Process"><span>{number || "0"}</span></div>          
        </div>
        <div className="operation">
          <button onClick={()=> showOperation("/")}>/</button>
          <button onClick={()=> showOperation("*")}>*</button>
          <button onClick={()=> showOperation("-")}>-</button>
          <button onClick={()=> showOperation("+")}>+</button>
          <button onClick={()=> remove()}>DEL</button>
        </div>
        <div className="numbers">
          {MakeWritingNumbersEasier()}
          <button onClick={()=> showOperation("0")}>0</button>
          <button onClick={()=> showOperation(".")}>.</button>
          <button onClick={()=> calcResult()}>=</button>
        </div>
      </div>
    </div>
  )
}
export default App
