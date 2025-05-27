import React from 'react';
import { Check, Eye, Heart, Brain } from 'lucide-react';
import styles from './SimpleAppointmentCard.module.css';

function SimpleAppointmentCard({ title, time, type }) {
  const getIcon = () => {
    switch(type) {
      case 'checkup':
        return <Check size={16} />;
      case 'specialist':
        if (title.includes('Ophthalmologist')) return <Eye size={16} />;
        if (title.includes('Cardiologist')) return <Heart size={16} />;
        if (title.includes('Neurologist')) return <Brain size={16} />;
        return <Stethoscope size={16} />;
      default:
        return <Check size={16} />;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>
        {getIcon()}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardTime}>{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;