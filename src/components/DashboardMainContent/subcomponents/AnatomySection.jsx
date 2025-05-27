import React from 'react';
import styles from './AnatomySection.module.css';
import anatomyImage from '../../../assets/Anatomy.jpg';

function AnatomySection() {
  return (
    <div className={styles.anatomySection}>
      <h2 className={styles.sectionTitle}>Anatomy</h2>
      <div className={styles.anatomyContainer}>
        <div className={styles.humanBody}>
          <img src={anatomyImage} alt="Human Anatomy" className={styles.anatomyImage} />
          
          <div className={`${styles.healthIndicator} ${styles.heartIndicator}`}>
            <span>❤️ Healthy Heart</span>
          </div>
          <div className={`${styles.healthIndicator} ${styles.boneIndicator}`}>
            <span>🦵 Healthy Leg</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;