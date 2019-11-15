import React from 'react';

import Header from '../presentational/Header';
import Footer from '../presentational/Footer';
import Ticket from '../presentational/Ticket';
import useGlobalStatus from '../../hooks/useGlobalStatus';

export default function Tickets() {
  const { getTickets } = useGlobalStatus();

  return (
    <div className="layout">
      <Header title="Mis pasajes" />
      {
        getTickets().map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)
      }
      <Footer />
    </div>
  );
}
