import React from 'react';

import HomeIcon from '../../icons/home.svg';
import ProfileIcon from '../../icons/profile.svg';
import AgendaIcon from '../../icons/agenda.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__btn-list">
        <div className="btn-list__item">
          <AgendaIcon />
        </div>
        <div className="btn-list__item is-home">
          <HomeIcon />
        </div>
        <div className="btn-list__item">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
}
