import React,{useState} from 'react';
import TodoList from './TodoList';

const App = () => {
  const [task,SetTask]=useState("")
  const[todos,setTodos]=useState([])
  const changeHandler=e =>{
    SetTask([e.target.value])
  }
  const submitHandler=e =>{
    e.preventDefault();
    const newTodos=[...todos,task]
    setTodos(newTodos)
    SetTask("")
  }
  const deleteHandler=(indexValue) =>{
  const newTodos=todos.filter((todo,index) =>index!==indexValue);
  setTodos(newTodos);
  }
  return (
    <div>
      <center>
    <div className='card'>
      <div className='card-body'>
        <h1 className="card-title">
          Todo management application
        </h1>
        <form onSubmit={submitHandler}>
          <input type="text"  name="task" value={task} onChange={changeHandler}></input>&nbsp;&nbsp;
          <input type="submit"name='Add'value="Add"></input>
        </form>
        <TodoList todos={todos} deleteHandler={deleteHandler}/>

      </div>
      
    </div>
    </center>
    </div>
  );
}

export default App;
