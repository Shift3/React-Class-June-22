import classes from './errorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        
        <main className={classes.content}>
          {props.message}
        </main>

        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;