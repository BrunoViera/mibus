import React from 'react';

import { Link } from 'react-router-dom';

import HomeIcon from '../../icons/home.svg';
import ProfileIcon from '../../icons/profile.svg';
import AgendaIcon from '../../icons/agenda.svg';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__btn-list">
        <Link to="/tickets">
          <div className="btn-list__item">
            <AgendaIcon />
          </div>
        </Link>
        <Link to="/">
          <div className="btn-list__item is-home">
            <HomeIcon />
          </div>
        </Link>
        <Link to="/tickets">
          <div className="btn-list__item">
            <ProfileIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}
