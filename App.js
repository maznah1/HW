
import React,{useState} from 'react'
import './App.css';

const App = () => {
  const [input,setInput] = useState("");
  const [result,setResult] = useState(0);
  const handler = e =>{
    setInput(e.target.value);
  }
  return (
    <div className="App">
    
    <input type="text" value={input} name="input" onChange={handler} />
        <br />
        <button onClick={() => setResult(eval(input))}>Result</button>
        <h4>Result is : {result}</h4>
        <button onClick={() => setInput(input+'+')}>+</button>
        <button onClick={() => setInput(input+'-')}>-</button>
        <button onClick={() => setInput(input+'*')}>*</button>
        <button onClick={() => setInput(input+'/')}>/</button>
        <button onClick={() => {setInput('');setResult(0)}}>clr</button><br /> 

    </div>
  );
}

export default App;
