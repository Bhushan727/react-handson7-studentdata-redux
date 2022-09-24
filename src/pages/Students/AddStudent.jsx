import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Style.css';
import { store } from './config/StudentData';

const AddStudent = () => {

  const [data] = useContext(store);
  const [newName,setNewName] = useState("");
  const [newAge,setNewAge] = useState("");
  const [newCourse,setNewCourse] = useState("");
  const [newBatch,setNewBatch] = useState("");

  console.log(newName,newAge,newCourse,newBatch);

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    const addList = data;
    console.log({addList});
    addList.push({
      id: addList.length,
      name : newName,
      age : newAge,
      course : newCourse,
      batch : newBatch
    })

    navigate(-1);
    e.preventDefault();
  }

  return (

    <div>
      <h1 className='newTitle'>Add New Details</h1>
        
        <form action="">

      <div className="inputContainer">

        <div className="formElem">
          <input type="text" className='input' placeholder=' ' name='name' onChange={(e) => {setNewName(e.target.value)}}  required/>
          <label className='placeholder' htmlFor="name">Name </label>
        </div>

        <div className="formElem">
          <input type="number" className='input' placeholder=' ' name='age' onChange={(e) => {setNewAge(e.target.value)}}  required/>
          <label className='placeholder' htmlFor="age">Age </label>
        </div>
      </div>
      <div className="inputContainer">
        <div className="formElem">
          <input type="text" className='input' placeholder=' ' name='course' onChange={(e) => {setNewCourse(e.target.value)}}  required/>
          <label className='placeholder' htmlFor="course">Course </label>
        </div>

        <div className="formElem">
          <input type="text" className='input' placeholder=' ' name='batch' onChange={(e) => {setNewBatch(e.target.value)}}  required/>
          <label className='placeholder' htmlFor="">Batch </label>
        </div>

      </div>
      
      <div className="btns">
        <button type="reset" >reset</button>
        <button type="reset" >Cancel</button>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>

        </form>

    </div>
  )
}

export default AddStudent