import React from 'react';
import styles from './HealthStatusCards.module.css';

function HealthStatusCards() {
  const cards = [
    { 
      title: ' 🫁 Lungs', 
      status: 'Critical', 
      date: '12 Oct 2021', 
      critical: true 
    },
    { 
      title: '🦷 Teeth', 
      status: 'Warning', 
      date: '14 Oct 2021', 
      warning: true 
    },
    { 
      title: '🦴 Bone', 
      status: 'Normal', 
      date: '16 Oct 2021', 
      normal: true 
    }
  ];

  return (
    <div className={styles.healthStatusCards}>
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`${styles.card} ${
            card.critical ? styles.critical : 
            card.warning ? styles.warning : 
            styles.normal
          }`}
        >
          <h3 className={styles.cardTitle}>{card.title}</h3>
          <p className={styles.cardStatus}>{card.status}</p>
          <p className={styles.cardDate}>{card.date}</p>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;