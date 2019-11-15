import React from 'react';

import Header from '../presentational/Header';
import Footer from '../presentational/Footer';
import Ticket from '../presentational/Ticket';
import Spinner from '../presentational/Spinner';

import useGlobalStatus from '../../hooks/useGlobalStatus';

export default function Tickets() {
  const { getTicket } = useGlobalStatus();
  const ticket = getTicket();

  function renderView() {
    if (!ticket) {
      return <Spinner />;
    }

    return (
      <Ticket key={ticket.id} ticket={ticket} />
    );
  }

  return (
    <div className="layout">
      <Header title="Mi pasaje" previousUrl="/" />
      { renderView() }
      <Footer />
    </div>
  );
}
