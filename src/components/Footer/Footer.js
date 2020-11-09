import styles from './Footer.module.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Footer = ({ count }) => {
  Footer.propTypes = {
    count: PropTypes.number.isRequired
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
