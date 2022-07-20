import classes from './students.module.css';
import Card from '../ui/Card';

const Students = (props) => {
  return (
    <Card className={classes.students}>
      <ul>
        {
          props.students.map(student => (
            <li key={student.id}>
              {student.fullName} - Level: {student.level} 
            </li>
          ))
        }
      </ul>
    </Card>
  );
}

export default Students;