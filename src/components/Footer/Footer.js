import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Footer = ({ count }) => {
  Footer.defaultProps = {
    count: 0
  }
  
  return (<div className={styles.footer}>
    <span className={styles.tasks}>{count} items left</span>
    <ButtonGroup className={styles.buttons}>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Complete</Button>
    </ButtonGroup>
    <Button size="small">
      Clear Completed
    </Button>
  </div>)
};

export default Footer;
