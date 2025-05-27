import React from 'react';
import styles from './ActivityFeed.module.css';

function ActivityFeed() {
  return (
    <div className={styles.activityFeed}>
      <h2 className={styles.sectionTitle}>Activity</h2>
      <p className={styles.activitySummary}>3 appointments on this week</p>
      
      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          <div className={styles.chartBar} style={{ height: '40%' }}></div>
          <div className={styles.chartBar} style={{ height: '70%' }}></div>
          <div className={styles.chartBar} style={{ height: '30%' }}></div>
          <div className={styles.chartBar} style={{ height: '90%' }}></div>
          <div className={styles.chartBar} style={{ height: '50%' }}></div>
          <div className={styles.chartBar} style={{ height: '60%' }}></div>
          <div className={styles.chartBar} style={{ height: '80%' }}></div>
        </div>
        <div className={styles.chartLabels}>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;