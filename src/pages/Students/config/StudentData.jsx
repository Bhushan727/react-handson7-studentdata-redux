import React, { useState } from 'react'
import { createContext } from 'react'


export const store = createContext();
const StudentData = (props) => {

    const [data, setData] = useState([
        {
            id: 0,
            name : "Shashi",
            age : "23",
            course : "MERN" ,
            batch : "May"
        },
        {
            id: 1,
            name : "Ronit",
            age : "24",
            course : "MEAN" ,
            batch : "May"
        },
    ])

  return (
    <div>
        <store.Provider value={[data,setData]}>
            {
                props.children
            }
        </store.Provider>
        
    </div>
  )
}

export default StudentData;