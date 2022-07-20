import { useState} from 'react';
import AddStudent from './components/student/AddStudent'; 
import Students from './components/student/Students'; 

const App = () => {
  const [studentsList, setStudentsList ] = useState([]);

  const addStudentHandler = (fullName, level) => {
    setStudentsList(prevList => {
      return [{
        fullName,
        level,
        id: Math.random().toString()
      },...prevList
    ]
    })
  }
  return (
  <>
    <AddStudent onAddStudent = {addStudentHandler} />

    <Students students={studentsList} /> 
  </>
  );
}

export default App;
