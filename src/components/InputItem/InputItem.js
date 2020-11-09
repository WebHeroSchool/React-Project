import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState ({
      inputValue: ''
    });

    this.props.onClickAdd(this.state.inputValue);
  }

  render () {
    const { onClickAdd } = this.props;

    return (<div className={styles.input}>
      <div>
        <TextField
          label="Text"
          id="outlined-margin-dense"
          defaultValue="Add task"
          helperText="Enter the task You need"
          margin="dense"
          variant="outlined"
          value={this.state.inputValue}
          onChange={event => this.setState({ inputValue: event.target.value })}
        />
      </div>
      <div>
        <Button
          size="large"
          onClick={this.onButtonClick}
        >
          Add
        </Button>
      </div>
    </div>);
  }
}

export default InputItem;
