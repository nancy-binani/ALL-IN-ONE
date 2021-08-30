import { useState } from "react"
import './Notes.css'
function Input(props)
 {
    let [task,setTask] = useState("");
    return (
        <div>
            <input 
            className="inp"
                type="text"
                value={task}
                onChange={(e) => {
                    setTask(e.currentTarget.value);
                }}
            />
            <button 
            className="sub"
                onClick={() => {
                    props.taskHandlerFunc(task);
                    setTask("")
                }}
            >
                Add
            </button>
        </div>
    )
}

export default Input