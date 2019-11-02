import React from 'react';

import ClockIcon from '../../../icons/clock.svg';
import DownArrowIcon from '../../../icons/down_arrow.svg';

export default function Time() {
  return (
    <div className="time-container">
      <div className="select-icon">
        <ClockIcon />
      </div>
      <input className="time" type="time" id="travelHour" name="travelHour" />
      <div className="select-icon select-icon--arrow select-icon--pull-right">
        <DownArrowIcon />
      </div>
    </div>
  );
}
