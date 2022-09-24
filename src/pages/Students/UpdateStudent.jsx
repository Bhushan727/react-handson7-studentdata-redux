import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../Style.css';
import { store } from './config/StudentData';

const UpdateStudent = () => {

    const { studentId } = useParams();
    const [data] = useContext(store);
    const navigate = useNavigate();
    
    const current = data.filter((student) => student.id === parseInt(studentId))

    const [newNames,setnewNames] = useState(current[0].name);
    const [newAges,setNewAge] = useState(current[0].age);
    const [newCourses,setnewCourses] = useState(current[0].course);
    const [newBatches,setnewBatches] = useState(current[0].batch);
  

    const index = current[0].id;
    console.log(current);
    
    console.log(data[index]);

    const handleReset = () => {
        setnewNames("");
        setNewAge("");
        setnewCourses("");
        setnewBatches("");

    };
  

    const handleCancel = () => {
        setnewNames("");
        setNewAge("");
        setnewCourses("");
        setnewBatches("");

        navigate('/students');

    };
  
    const handleSubmit = (e) =>{

        data[index].name = newNames;
        data[index].age = newAges;
        data[index].course = newCourses;
        data[index].batch = newBatches;
 
      navigate('/students');
      e.preventDefault();
    }

  return (
    <div>
    <h1 className='newTitle'>Add New Details</h1>
      
      <form action="">

    <div className="inputContainer">

      <div className="formElem">
        <input type="text" className='input' placeholder=' ' name='name' value={newNames} onChange={(e) => {setnewNames(e.target.value)}}  required/>
        <label className='placeholder' htmlFor="name">Name </label>
      </div>

      <div className="formElem">
        <input type="number" className='input' placeholder=' ' name='age' value={newAges} onChange={(e) => {setNewAge(e.target.value)}}  required/>
        <label className='placeholder' htmlFor="age">Age </label>
      </div>
    </div>
    <div className="inputContainer">
      <div className="formElem">
        <input type="text" className='input' placeholder=' ' name='course' value={newCourses} onChange={(e) => {setnewCourses(e.target.value)}}  required/>
        <label className='placeholder' htmlFor="course">Course </label>
      </div>

      <div className="formElem">
        <input type="text" className='input' placeholder=' ' name='batch' value={newBatches} onChange={(e) => {setnewBatches(e.target.value)}}  required/>
        <label className='placeholder' htmlFor="">Batch </label>
      </div>

    </div>
    
    <div className="btns">
      <button type="reset" onClick={handleReset}>reset</button>
      <button type="submit" onClick={handleCancel} >Cancel</button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>

      </form>

  </div>
  )
}

export default UpdateStudent