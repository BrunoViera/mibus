// @flow

import React from 'react';

import Header from './header';
import Ticket from './ticket';
import useGlobalStatus from '../hooks/useGlobaStatus';

export default function Tickets() {
  const { getTickets } = useGlobalStatus();

  return (
    <div className="layout">
      <Header title="Mis pasajes" />
      {
        getTickets().map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)
      }
    </div>
  );
}
