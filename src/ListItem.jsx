import './Notes.css'
function ListItem(props){
    return(
        <li className="lis">
            <span className="task">{props.taskVal}</span>
            <button
                className="taskbtn"
                onClick={() => {
                    props.removeTask(props.taskVal);
                }}
            >
                X
            </button>
        </li>
    )
}
export default ListItem