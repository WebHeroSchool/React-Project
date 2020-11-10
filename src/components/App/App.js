import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';
import {MenuItem, MenuList} from '@material-ui/core';

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <MenuList>
          <Link to='/' className={styles.link}>
            <MenuItem>About</MenuItem>
          </Link>
          <Link to='/todo' className={styles.link}>
            <MenuItem>Todo</MenuItem>
          </Link>
          <Link to='/contacts' className={styles.link}>
            <MenuItem>Contacts</MenuItem>
          </Link>
        </MenuList>
      </div>
      <div>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </div>
    </Router>
  )
}

export default App;