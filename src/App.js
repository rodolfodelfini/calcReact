//import Head from 'next/head'
import React, { useState } from 'react';
import Tilt from 'react-tilt'

import './App.css';


function App() {

  const [equation, setEquation] = useState(0);

  function calculator(item){
    if(typeof item === 'number') {
      if(equation === 0) {
        setEquation(item)
      }else {
        setEquation(''+equation+item)
      }
    }

    if(item === '*' ||  item === '/' ||  item === '-'  ||  item === '+' || item === '%') {
      setEquation(equation+item)
    }

    //clean screen
    if(item === 'C') {
      setEquation(0)
    }

    if(item === '=') {
      setEquation(eval(equation))
    }
  }

  return (
      <div className='container'>
            <Tilt className="Tilt" options={{ max : 25 }}>
          <div className='box'>

            <div className='calc'>
              <input className='display' type='text' value={equation} />
              <div  className='buttons'>
                <span onClick={() => calculator('%')} >%</span>
                <span onClick={() => calculator('C')} >C</span>
                <span onClick={() => calculator('<-')} >{`<-`}</span>
                <span onClick={() => calculator('+')} >+</span>

                <span onClick={() => calculator(7)} >7</span>
                <span onClick={() => calculator(8)} >8</span>
                <span onClick={() => calculator(9)} >9</span>
                <span onClick={() => calculator('-')} >-</span>

                <span onClick={() => calculator(4)} >4</span>
                <span onClick={() => calculator(5)} >5</span>
                <span onClick={() => calculator(6)} >6</span>
                <span onClick={() => calculator('*')} >x</span>

                <span onClick={() => calculator(1)} >1</span>
                <span onClick={() => calculator(2)} >2</span>
                <span onClick={() => calculator(3)} >3</span>
                <span onClick={() => calculator('/')} >/</span>

                <span onClick={() => calculator('.')} >.</span>
                <span onClick={() => calculator(0)} >0</span>
                <span onClick={() => calculator('=')}  className='equal'>=</span>
              </div>
            </div>
          </div>
          </Tilt>
      </div>
  );
}

export default App;
