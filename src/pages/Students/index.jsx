import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../Style.css'
import { store } from './config/StudentData';

const Students = () => {
  const [data] = useContext(store);
  return (
    <div className='tableContainer'>
    <h1 className="title">Student Details</h1>
    <Link to='/students/addstudent' className="newStudent"><li>Add New Student</li></Link>

    <table className='tableMain'>
      <thead>
        <tr>
          <th> Name</th>
          <th> Age</th>
          <th> Course</th>
          <th> Batch</th>
          <th> Change</th>
        </tr>
      </thead>


      <tbody>
            {
              data.map((details) => {
                return(

                    <tr key={details.id}>
                      <td>{details.name}</td>
                      <td>{details.age}</td>
                      <td>{details.course}</td>
                      <td>{details.batch}</td>
                      <td ><Link className='editList' to={`/students/${details.id}`}>Edit</Link></td>                      
                    </tr>
                  )
              })
            }
      </tbody>

    </table>

  </div>
  )
}

export default Students