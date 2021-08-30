import { useState } from "react";
import './Calc.css';
let Calculator = () => {
    let[val,setVal] = useState("");
    const handleClick=(e) => {
        setVal(val.concat(e.target.name))
    }
    const clear = () => {
        setVal("")
    }
    const backspace = () =>{
        setVal(val.slice(0,val.length-1))
    }
    const calc = () => {
        try{
            setVal(eval(val).toString())
        }
        catch{
            setVal("Error")
        }
        
    }
    return(
        <div>
            <div className="container">
            <input type="text" readOnly value={val}/>
                <div className="row1">
                    <button className="btn sym" name="AC" onClick={clear} >AC</button>
                    <button className="btn sym" name="C" onClick={backspace}>C</button>
                    <button className="btn sym" name="." onClick={handleClick}>.</button>
                    <button className="btn sym" name="/" onClick={handleClick}>/</button>
                </div>
                <div className="row2">
                    <button className="btn" name="7" onClick={handleClick}>7</button>
                    <button className="btn" name="8" onClick={handleClick}>8</button>
                    <button className="btn" name="9" onClick={handleClick}>9</button>
                    <button className="btn sym" name="*" onClick={handleClick}>*</button>
                </div>
                <div className="row3">
                    <button className="btn" name="4" onClick={handleClick}>4</button>
                    <button className="btn" name="5" onClick={handleClick}>5</button>
                    <button className="btn" name="6" onClick={handleClick}>6</button>
                    <button className="btn sym" name="-" onClick={handleClick}>-</button>
                </div>
                <div className="row4">
                    <button className="btn" name="1" onClick={handleClick}>1</button>
                    <button className="btn" name="2" onClick={handleClick}>2</button>
                    <button className="btn" name="3" onClick={handleClick}>3</button>
                    <button className="btn sym " name="+" onClick={handleClick}>+</button>
                </div>
                <div className="row5">
                    <button className="btn" name="0" onClick={handleClick}>0</button>
                    <button className="btn equal" onClick={calc} id="val">=</button>
                </div>
            </div>
        </div>
    )
}



export default Calculator;