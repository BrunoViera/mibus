import React from 'react';

import CalendarIcon from '../../../icons/calendar.svg';
import DownArrowIcon from '../../../icons/down_arrow.svg';

export default function Date() {
  return (
    <div className="date-container">
      <div className="select-icon">
        <CalendarIcon />
      </div>
      <input className="date" type="date" id="travelDate" name="travelDate" />
      <div className="select-icon select-icon--arrow select-icon--pull-right">
        <DownArrowIcon />
      </div>
    </div>
  );
}
