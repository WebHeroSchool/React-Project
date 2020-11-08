import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Read a book',
        isDone: true
      },
      {
        value: 'Cook a pie',
        isDone: false
      },
      {
        value: 'Go for a walk',
        isDone: true
      }
    ]
  };

  onClickDone = isDone => console.log(isDone);

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Important things to do:</h1>
        <InputItem />
        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
        <Footer count={3} />
      </div>
    );
  }
};

export default App;
