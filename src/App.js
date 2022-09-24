
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Contact from './pages/Contact';
import Home from './pages/Homepage';
import Students from './pages/Students';
import AddStudent from './pages/Students/AddStudent';
import StudentData from './pages/Students/config/StudentData';
import UpdateStudent from './pages/Students/UpdateStudent';

function App() {
  return (
    <div className="App">
      
     <Navbar />
     <StudentData>
      <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/students' element={<Students />} />
          <Route path='/students/addstudent' element={<AddStudent />} />
          <Route path='/students/:studentId' element={<UpdateStudent />} />
          <Route path='/contact' element={<Contact />} />

      </Routes>
     </StudentData>

    </div>
  );
}

export default App;
