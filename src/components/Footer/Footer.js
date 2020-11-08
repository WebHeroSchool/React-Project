import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Footer = ({ count }) => (<div className={styles.footer}>
  <span className={styles.tasks}>{count} items left</span>
  <ButtonGroup className={styles.buttons}>
    <Button className={styles.inside}>All</Button>
    <Button className={styles.inside}>Active</Button>
    <Button className={styles.inside}>Complete</Button>
  </ButtonGroup>
  <Button className={styles.outside} size="small">
    Clear Completed
  </Button>
</div>);

export default Footer;
