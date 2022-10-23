import React from 'react';
import TankExperience from './components/TanksExperience';
import styles from './App.module.scss';
import Description from './components/Description';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.tanks}>
        <Description />
        <TankExperience />
      </div>
    </div>
  );
}

export default App;
