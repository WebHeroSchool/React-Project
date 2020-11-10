import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';


const Todo = () => {
  const [items, setItems] = useState ([
    {
      value: 'Read a book',
      isDone: false,
      id: 1
    },
    {
      value: 'Cook a pie',
      isDone: false,
      id: 2
    },
    {
      value: 'Go for a walk',
      isDone: false,
      id: 3
    }
  ]);

  useEffect(() => {
    console.log('create');
  });

  useEffect(() => {
    console.log('update');
  }, [items]);

  let tasksCount = items.length;

  const onClickDone = id => setItems(items.map(item => {
    let newItem = { ...item };

    if (item.id === id) {
      newItem.isDone = !item.isDone;
    }

    return newItem;
  }));

  const onClickDelete = id => setItems(items.filter(item => item.id !== id));

  const onClickAdd = value => {
    setItems([
      ...items,
      {
        value: value,
        isDone: false,
        id: tasksCount + 1
      }
    ])
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Important things to do:</h1>
      <InputItem onClickAdd={onClickAdd} />
      <ItemList
        items={items}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <Footer count={tasksCount} />
    </div>
  );
};

export default Todo;
