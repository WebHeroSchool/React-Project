import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div className={styles.input}>
  <TextField
    label="Text"
    id="outlined-margin-dense"
    defaultValue="Add task"
    helperText="Enter the task You need"
    margin="dense"
    variant="outlined"
  />
</div>);

export default InputItem;
