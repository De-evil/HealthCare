import React from 'react';
import DashboardOverview from './subcomponents/DashboardOverview';
import AnatomySection from './subcomponents/AnatomySection';
import HealthStatusCards from './subcomponents/HealthStatusCards';
import CalendarView from './subcomponents/CalendarView';
import UpcomingSchedule from './subcomponents/UpcomingSchedule';
import ActivityFeed from './subcomponents/ActivityFeed';
import styles from './DashboardMainContent.module.css';

function DashboardMainContent() {
  return (
    <main className={styles.dashboardMain}>
      <DashboardOverview />
      
      <div className={styles.contentGrid}>
        <div className={styles.leftColumn}>
          <AnatomySection />
          <HealthStatusCards />
        </div>
        
        <div className={styles.rightColumn}>
          <CalendarView />
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;