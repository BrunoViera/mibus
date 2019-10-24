// @flow

import React from 'react';

import { Link } from 'react-router-dom';

import HomeIcon from '../../../icons/home.svg';
import ProfileIcon from '../../../icons/profile.svg';
import AgendaIcon from '../../../icons/agenda.svg';

export default function Footer() {
  const path = window.location.pathname;
  const links = [
    { icon: <AgendaIcon />, path: '/tickets' },
    { icon: <HomeIcon />, path: '/' },
    { icon: <ProfileIcon />, path: '/profile' },
  ];

  return (
    <div className="footer">
      <div className="footer__btn-list">
        {
          links.map((link) => (
            <Link key={link.path} to={link.path}>
              <div className={`btn-list__item ${link.path === path ? 'is-home' : ''}`}>
                {link.icon}
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
