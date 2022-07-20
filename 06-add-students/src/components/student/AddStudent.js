import {useState} from 'react';
import classes from './addStudent.module.css';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ErrorModal from '../ui/ErrorModal';

const AddStudent = (props) => {
  const [fullName, setFullName] = useState('');
  const [level, setLevel] = useState(0);
  const [error, setError] = useState(null);

  const addStudentHandler = (e) => {
    e.preventDefault();
    if(fullName.trim().length === 0 || level === 0){
      setError(() => ({
        title: 'Invalid inputs',
        message: 'Name and level are required'
      }));
      return;
    }

    if(level > 10){
      setError(() => ({
        title: 'Invalid level',
        message: 'Enter a valid level between 1 & 10'
      }));
      return;
    }

    props.onAddStudent(fullName, level);
    setFullName('');
    setLevel(0);
  };

  const errorHandler = ()=> {
    setError(null);
  }

  return (
    <>
    { error && (<ErrorModal 
                  title={error.title} 
                  message={error.message}
                  onConfirm={errorHandler}
                />)}

    <Card className={classes.input}>
      <form onSubmit={addStudentHandler}>
        <label htmlFor="fullName">
          Full Name:
          <input  
            id="fullName"
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}/>
        </label>

        <label htmlFor="level">
          Student's Level:
          <input  
            id="level"
            type="number"
            value={level}
            onChange={e => setLevel(e.target.value)}/>
        </label>

        <Button type="submit">Add Student</Button>
        
      </form>
    </Card>
    </>
  );
}

export default AddStudent;