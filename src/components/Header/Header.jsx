import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import styles from './Header.module.css';
import avatarImage from '../../assets/avatar.jpg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthcare.</div>
      
      <div className={styles.searchBar}>
        <Search size={20} className={styles.searchIcon} />
        <input type="text" placeholder="Search..." className={styles.searchInput} />
      </div>
      
      <div className={styles.headerRight}>
        <button className={styles.notificationButton}>
          <Bell size={20} />
        </button>
        <div className={styles.userProfile}>
          <img src={avatarImage} alt="Avatar profile" className= {styles.avatarImage} />
          <span className={styles.userName}>Manoj</span>
        </div>
        <button className={styles.addButton}>
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;