// @flow

import React from 'react';

import { Link } from 'react-router-dom';

import HomeIcon from '../../icons/home.svg';
import ProfileIcon from '../../icons/profile.svg';
import AgendaIcon from '../../icons/agenda.svg';

export default function Footer() {
  const links = [
    { icon: <AgendaIcon />, path: '/tickets' },
    { icon: <HomeIcon />, path: '/', modifier: 'is-home-nav' },
    { icon: <ProfileIcon />, path: '/profile' },
  ];

  return (
    <div className="footer">
      <div className="footer__btn-list">
        {
          links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={
                `btn-list__item ${link.modifier ? link.modifier : ''}
                ${window.location.pathname === link.path ? 'is-active' : ''}`
              }
            >
              {link.icon}
            </Link>
          ))
        }
      </div>
    </div>
  );
}
