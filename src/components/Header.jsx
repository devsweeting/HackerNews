import React from 'react';
import styles from './App.css';

function Header () {
  return (
    <div className={styles.navHeader}>
      <h3 className={styles.logo}>Hacker News</h3>
      <p>new | past | comments | ask | show | jobs | submit </p>
    </div>
  )
}

export default Header
