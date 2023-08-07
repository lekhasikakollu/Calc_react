import { useState } from 'react';
import './App.css';
import Button from './components/Button'
import Input from './components/Input'

var stringMath = require('string-math');

function App() {
  const [text,setText] = useState("")
  function clearInput(){
    setText("");
  }
  function addText(newText){
    setText(text => [...text,newText+" "])
  }
  function evaluateText(){
    const result = eval(text.join(""))

    clearInput()
    setText(text => result)

  }
  return (
    <div className="app" >
      <div className="calc--wrapper">
      <Input value={text} />
      </div>
      <div className="calc--buttonwrap">
        <div className="row">
          <Button symbol="C" color="#3b3b3c" handleClick={clearInput} />
          <Button symbol="+" color="#3b3b3c" handleClick={addText} />
          <Button symbol="%" color="#3b3b3c" handleClick={addText}/>
          <Button symbol="/" color="#f89f0e" handleClick={addText}/>
        </div>
        <div className="row">
          <Button symbol="7"  handleClick={addText}/>
          <Button symbol="8" handleClick={addText} />
          <Button symbol="9"  handleClick={addText}/>
          <Button symbol="*" color="#f89f0e" handleClick={addText}/>
        </div>
        <div className="row">
          <Button symbol="4"  handleClick={addText} />
          <Button symbol="5"  handleClick={addText}/>
          <Button symbol="6"  handleClick={addText}/>
          <Button symbol="-" color="#f89f0e" handleClick={addText}/>
        </div>
        <div className="row">
          <Button symbol="1"  handleClick={addText}/>
          <Button symbol="2" handleClick={addText} />
          <Button symbol="3"  handleClick={addText}/>
          <Button symbol="+" color="#f89f0e" handleClick={addText}/>
        </div>
        <div className="row">
          <Button symbol="0"  handleClick={addText}/>
          <Button symbol="."  handleClick={addText}/>
          <Button symbol="=" color="#f89f0e" handleClick={evaluateText}/>
        </div>

      </div>
    </div>
  );
}

export default App;
