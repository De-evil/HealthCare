import React from 'react';
import SimpleAppointmentCard from '../subcomponents/SimpleAppointmentCard/SimpleAppointmentCard';
import styles from './UpcomingSchedule.module.css';


function UpcomingSchedule() {
  const thursdayAppointments = [
    { title: 'Health checkup complete', time: '09:00 - 10:00', type: 'checkup' },
    { title: 'Ophthalmologist', time: '12:00 - 13:00', type: 'specialist' }
  ];

  const saturdayAppointments = [
    { title: 'Cardiologist', time: '10:00 - 11:00', type: 'specialist' },
    { title: 'Neurologist', time: '14:00 - 15:00', type: 'specialist' }
  ];

  return (
    <div className={styles.upcomingSchedule}>
      <h2 className={styles.sectionTitle}>The Upcoming Schedule</h2>
      
      <div className={styles.daySection}>
        <h3 className={styles.dayTitle}>On Thursday</h3>
        <div className={styles.appointments}>
          {thursdayAppointments.map((appointment, index) => (
            <SimpleAppointmentCard 
              key={`thu-${index}`}
              title={appointment.title}
              time={appointment.time}
              type={appointment.type}
            />
          ))}
        </div>
      </div>
      
      <div className={styles.daySection}>
        <h3 className={styles.dayTitle}>On Saturday</h3>
        <div className={styles.appointments}>
          {saturdayAppointments.map((appointment, index) => (
            <SimpleAppointmentCard 
              key={`sat-${index}`}
              title={appointment.title}
              time={appointment.time}
              type={appointment.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;