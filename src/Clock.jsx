import './Clk.css'
import { useState } from "react";

let Clock = () => {
    let time=new Date().toLocaleTimeString();
    let [currentTime,setTime] = useState(time);
    function handleTime(){
        time=new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(handleTime,1000);
    return(
        <div>
        <div className="time">
            <h1 className="h1">{currentTime}</h1>
        </div>
       
        </div>

    )
}

export default Clock;