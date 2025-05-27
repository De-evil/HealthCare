import React from 'react';
import styles from './CalendarView.module.css';

function CalendarView() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  
  const appointments = {
    12: ['09:00', '11:00'],
    15: ['13:00'],
    20: ['15:00']
  };

  return (
    <div className={styles.calendarView}>
      <div className={styles.calendarHeader}>
        <h2 className={styles.sectionTitle}>October 2021</h2>
      </div>
      
      <div className={styles.daysRow}>
        {days.map(day => (
          <div key={day} className={styles.dayHeader}>{day}</div>
        ))}
      </div>
      
      <div className={styles.calendarGrid}>
        {dates.map(date => (
          <div 
            key={date} 
            className={`${styles.dateCell} ${date > 20 ? styles.nextMonth : ''}`}
          >
            <span className={styles.dateNumber}>{date}</span>
            {appointments[date] && (
              <div className={styles.appointmentTimes}>
                {appointments[date].map(time => (
                  <div key={time} className={styles.appointmentTime}>{time}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className={styles.appointmentCards}>
        <div className={styles.appointmentCard}>
          <h3 className={styles.cardTitle}>Dentist</h3>
          <p className={styles.cardTime}>09:00 - 10:00</p>
          <p className={styles.cardPerson}>Dr. Sarah Johnson</p>
        </div>
        
        <div className={styles.appointmentCard}>
          <h3 className={styles.cardTitle}>Physiotherapy Appointment</h3>
          <p className={styles.cardTime}>15:00 - 16:00</p>
          <p className={styles.cardPerson}>Dr. Michael Brown</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;