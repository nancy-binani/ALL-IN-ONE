import ListItem from './ListItem'
import './Notes.css'
function List(props){
    return (
        <ul>
            {props.tasks.map((el,index) => {
                return  <ListItem removeTask={props.removeHandlerFunc} key={index} taskVal={el}  /> 
            })}
        </ul>
    )
}

export default List