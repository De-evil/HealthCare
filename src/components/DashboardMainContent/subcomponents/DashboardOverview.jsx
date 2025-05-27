import React from 'react';
import styles from './DashboardOverview.module.css';

function DashboardOverview() {
  return (
    <div className={styles.overview}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <h3 className={styles.statLabel}>Patients Today</h3>
          <p className={styles.statValue}>24</p>
        </div>
        <div className={styles.statCard}>
          <h3 className={styles.statLabel}>Appointments</h3>
          <p className={styles.statValue}>16</p>
        </div>
        <div className={styles.statCard}>
          <h3 className={styles.statLabel}>New Patients</h3>
          <p className={styles.statValue}>8</p>
        </div>
        <div className={styles.statCard}>
          <h3 className={styles.statLabel}>Operations</h3>
          <p className={styles.statValue}>4</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;