import React from 'react';
import styles from './Contacts.module.css';
import './Icons/envelope.svg';
import './Icons/paper-plane.svg';
import './Icons/phone-call.svg';
import './Icons/placeholder.svg';

const Contacts = () => (<div className={styles.container}>
  <h1 className={styles.title}>Contancts</h1>
  <div className={styles.wrap}>
    <div className={styles.item}>
      <img src='./Icons/placeholder.svg' alt='place' className={styles.picture} />
      <p>Moscow, Russia</p>
    </div>
    <div className={styles.item}>
      <img src='./Icons/phone-call.svg' alt='phone' className={styles.picture} />
      <p className={styles.text}>8 (977) 338 55 98</p>
    </div>
    <div className={styles.item}>
      <img src='./Icons/paper-plane.svg' alt='telegram' className={styles.picture} />
      <p className={styles.text}>8 (977) 338 55 98</p>
    </div>
    <div className={styles.item}>
      <img src='./Icons/envelope.svg' alt='mail' className={styles.picture} />
      <a className={styles.link} href='mailto:evelinfimova@gmail.com'>evelinfimova@gmail.com</a>
    </div>
  </div>
</div>)

export default Contacts;