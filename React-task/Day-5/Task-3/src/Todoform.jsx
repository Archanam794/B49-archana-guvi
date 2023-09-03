import React,{useEffect, useState} from 'react'
import Todolist from './Todolist';
import './Todoform.css';


function Todoform() {
  const [data,setData] = useState("");
  const [descriptn ,setDescriptn] = useState("");
  const [todos,setTodos]=useState([]);
  const [editButton,setEditButton]=useState(false);
  const [status,setStatus]=useState('Not Completed');
  const [editId,setEditId]=useState(null);
  const [filter,setFilter]=useState('All');

  
  const handleClick=()=>{
    if (data.trim() === '' || descriptn.trim() === '') {
      return;}
      // if button is ADD then this block is execute
      if(!editButton){
  
        let newTodoitem={ 
          id:todos.length+1,
          Name:data,
          Description:descriptn,
          status:'Not Completed'
        }
          setTodos([...todos,newTodoitem]);
           }   
       // if button is CHANGE then this block is execute 
       else if(editButton){
        const edTodo=todos.map((todo)=>{
          if(todo.id===editId){
           return{...todo,
            Name:data,
            Description:descriptn,
            status:'Not Completed' };
          }
          return todo;
        });
       // once data is updated editbutton is false and editid back to null
        setTodos(edTodo);
        setEditButton(false);
        setEditId(null);
      }
    // Everytime value is added and updated then input field is reset
    setData('');
    setDescriptn('');
    setStatus('Not Completed');
}
// This method is used to update the status of todo
const StatusUpdate = (id, newStatus) => {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, status: newStatus };
    }
    return todo;
  });
  setTodos(updatedTodos);
};
// This method is used to find the which todo want to edit and place its value in input field
const editTodo = (id) => {
  const todoToEdit = todos.find((todo) => todo.id === id);
  if (todoToEdit) {
    setData(todoToEdit.Name);
    setDescriptn(todoToEdit.Description);
    setStatus(todoToEdit.status);
    setEditButton(true);
    setEditId(id);
  }
};
// This method is used to delete which todo we want to delete
const deleteTodo = (id) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};
// This method is used to filter todo depends on thier status
const filterTodos = () => {
  switch (filter) {
    case 'Completed':
      return todos.filter((todo) => todo.status === 'Completed');
    case 'Not Completed':
      return todos.filter((todo) => todo.status === 'Not Completed');
    default:
      return todos;
  }
};

  return (
    <>
    <div className='heading'>Today Schedule</div>
    <div className='todo-form'>
      <div className='todo-input-item'>
        <label htmlFor='name'><b>Task Name : </b></label>
        <input id="name" type="text"  value={data} onChange={(e)=>setData(e.target.value)}
        placeholder="Task Name"></input> 
      </div>
      
      <div className='todo-input-item'>
        <label htmlFor='descp'><b>Task Description :</b></label>
        <input id='descp' type="text"  value={descriptn} onChange={(e)=>setDescriptn(e.target.value)} 
        placeholder="Task Description"></input>
      </div>
      <div className='todo-input-item'>
        <button type='button' onClick={handleClick} className='btn btn-primary btn-md'>
          {editButton ? 'Change' :'Add' }</button>
      </div>
    </div>
    <div className='list-status'>
    <h3 className='head'>
          <b>My To-Do List</b>
        </h3>
        <div className='dropdown'>
          <label htmlFor='filter'>
            <b>Status Filter : </b>
          </label>
          <select
            value={filter}
            name='filter'
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value='All' className='all bg-light'>
              All
            </option>
            <option
              value='Completed'
              className='complete bg-success text-white'
            >
              Completed
            </option>
            <option value='Not Completed' className='bg-danger text-white'>
              Not Completed
            </option>
          </select>
        </div>
      </div>
      <div className='container d-grid'>
        {filterTodos().map((todo) => (
          <div className='' key={todo.id}>
            <Todolist
              todo={todo}
              updateStatus={StatusUpdate}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        ))}
      </div>
      





    
    </>
  )
}

export default Todoform