import styles from './Footer.module.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Footer = ({ count, onClickFilter, filter, onClickDeleteComplited }) => {

  return (<div className={styles.footer}>
    <span className={styles.tasks}>{count} items left</span>
    <ButtonGroup 
      className={styles.buttons}
      value={filter}
    >
      <Button onClick={() => onClickFilter('all')}>All</Button>
      <Button onClick={() => onClickFilter('active')}>Active</Button>
      <Button onClick={() => onClickFilter('done')}>Complete</Button>
    </ButtonGroup>
    <Button
      size="small"
      onClick={() => onClickDeleteComplited()}
    >
      Clear Completed
    </Button>
  </div>)
};

export default Footer;
