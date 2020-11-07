import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Item.module.css';
import classnames from 'classnames';

const Item = ({ value, isDone }) => (
  <div className={styles.wrap}>
    <Checkbox
      color="default"
    />
    <span className={
    classnames({
      [styles.item]: true,
      [styles.done]: isDone
    })
    }> 
    {value}
  </span>
  <IconButton className={styles.button} aria-label="delete">
    <DeleteIcon />
  </IconButton>
</div>);

export default Item;
