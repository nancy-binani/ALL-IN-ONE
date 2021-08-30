import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './Cale.css'
let Cal = () => {
    let [value,newValue]=useState(new Date());

    return (
        <div>
           
            <Calendar
             className="cale"
            onChange={newValue}
            value={value}
            />
        </div>
    )
}

export default Cal;