import { useState } from "react";
import Input from './Input';
import List from './List';
import './Notes.css'
let Notes = () => {
    let [taskData,setTaskData] = useState([]);
       
        let taskHandler = (value) => {
            let tempArr = taskData.map((e) => {
                return e;
            });
            tempArr.push(value);
            setTaskData(tempArr);
        }
    
    
    
    let removeTask = (task) => {
        let filteredArr = taskData.filter((el) => {
            return el!==task;
        })
        setTaskData(filteredArr);
    }

    return(
        <div className="notes">
            <Input taskHandlerFunc={taskHandler}/>
            <List className="lis" removeHandlerFunc={removeTask} tasks={taskData}/>
        </div>

    )
}
export default Notes;