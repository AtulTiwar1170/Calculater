import React, { useState } from "react"
import './App.css'
function App() {
  const [input, setInput] = useState('');

  const calculateResult = (val) => {

    try {
      const operators = ['+', '-', '/', '*'];
      let operator = null;
      let result;

      for (let i = 0; i < val.length; i++) {
        if (operators.includes(val[i])) {
          operator = val[i];
          break;
        }
      }


      if (!operator) {
        setInput(parseFloat(val).toString());
        return;
      } else {
        const [operand1, operand2] = val.split(operator).map(parseFloat);
        

        switch (operator) {
          case '+':
            result = operand1 + operand2;
            break;
          case '-':
            result = operand1 - operand2;
            break;
          case '*':
            result = operand1 * operand2;
            break;
          case '/':
            result = operand1 / operand2;
            break;
          default:
            setInput('Invalid')
        }
        setInput(result.toString());
      }

    } catch (error) {
      setInput('Error');
    }
  }

  const handleClick = (val) => {
    if (val === 'C') {
      setInput('');
    } else if (val === 'X') {
      setInput(input.slice(0, -1));
    } else if (val === '=') {
      calculateResult(input);
      // try {
      // this is onw way to calculate ans
      //   setInput(eval(input).toString())
      // } catch (error) {
      //   setInput('Error')
      // }
    } else {
      setInput((preVal) => preVal + val);
    }
  }

  return (
    <div className="container flex justify-center item-center h-screen w-full">
      <div className="p-10 mt-20 h-[33rem] space-y-3 border-[1px] border-zinc-200 rounded-lg ">
        <input className="text-2xl font-bold px-2 py-5 border-[1px] border-zinc-200 rounded-lg w-[27.7rem]" type="text" value={input} />
        <div className="space-x-5">
          <button className="py-3 px-8 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('AC')}>AC</button>
          <button className="py-3 px-9 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('X')}><i class="fa-solid fa-arrow-left"></i></button>
          <button className="py-3 px-9 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('%')}>%</button>
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('/')}>/</button>
        </div>
        <div className="space-x-5">
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('7')}>7</button>
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('8')}>8</button>
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('9')}>9</button>
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="space-x-5">
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('4')}>4</button>
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('5')}>5</button>
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('6')}>6</button>
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="space-x-5">
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('1')}>1</button>
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('2')}>2</button>
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('3')}>3</button>
          <button className="py-3 px-9 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="space-x-5">
          <button className="py-3 px-10 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('0')}>0</button>
          <button className="py-3 px-11 font-bold text-2xl border-[1px] border-zinic-200 rounded-lg bg-slate-50" onClick={() => handleClick('.')}>.</button>
          <button className="py-3 px-10 font-bold text-3xl border-[1px] border-zinic-200 rounded-lg bg-purple-500 w-52 text-white" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>

    </div>
  )
}

export default App
