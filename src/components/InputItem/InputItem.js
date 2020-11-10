import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    inputError: false
  };

  onButtonClick = () => {
    if (this.state.inputValue === '') {
      this.setState({ inputError: true})
    } else {
      this.props.onClickAdd(this.state.inputValue);
    }

    this.setState ({
      inputValue: ''
    });
  }

  render () {
    const { onClickAdd } = this.props;

    return (<div className={styles.input}>
      <div>
        <TextField
          error={this.state.inputError}
          helperText="Empty space"
          label="Text"
          defaultValue="Add task"
          helperText="Enter the task You need"
          margin="dense"
          variant="outlined"
          value={this.state.inputValue}
          onChange={event => {
            this.setState({ inputError: false })
            this.setState({ inputValue: event.target.value })}
          }
        />
      </div>
      <div className={styles.adding}>
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
