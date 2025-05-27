import React from 'react';
import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  Clock, 
  BarChart2, 
  Stethoscope, 
  MessageSquare,
  LifeBuoy,
  Settings
} from 'lucide-react';
import styles from './Sidebar.module.css';

function Sidebar() {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { icon: <History size={20} />, label: 'History' },
    { icon: <Calendar size={20} />, label: 'Calendar' },
    { icon: <Clock size={20} />, label: 'Appointments' },
    { icon: <BarChart2 size={20} />, label: 'Statistics' },
    { icon: <Stethoscope size={20} />, label: 'Tests' },
    { icon: <MessageSquare size={20} />, label: 'Chat' },
    { icon: <LifeBuoy size={20} />, label: 'Support' },
    { icon: <Settings size={20} />, label: 'Setting' }
  ];

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.sidebarTitle}>General</h3>
      <nav>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;