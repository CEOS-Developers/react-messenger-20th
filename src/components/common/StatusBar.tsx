import React from 'react';

import Clock from '../Clock';
import statusIcon from '../../assets/status.svg';

export default function StatusBar() {
  return (
    <div className="flex justify-between mx-5  h-10">
      <Clock />
      <img
        alt="status"
        src={statusIcon}
      />
    </div>
  );
}
