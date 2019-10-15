import React from 'react';

import Header from './header';
import Footer from './footer';
import Ticket from './ticket';

export default function Tickets() {
  const listTickets = [
    {
      from: 'Montevideo, Terminal Tres Cruces',
      to: 'Rivera, Terminal',
      date: 'Martes 15, Julio 2019',
      seat: 24,
      bus: 'Omnibus super cama, coche n 02',
      isCurrent: true,
    },
    {
      from: 'Montevideo, Terminal Tres Cruces',
      to: 'Tacuarembó, Terminal',
      date: 'Martes 24, Junio 2019',
      seat: 24,
      bus: 'Omnibus super cama, coche n 02',
      isCurrent: false,
    },
    {
      from: 'Montevideo, Terminal Tres Cruces',
      to: 'Colonia, Terminal',
      date: 'Miercoles 16, Julio 2019',
      seat: 24,
      bus: 'Omnibus super cama, coche n 02',
      isCurrent: false,
    },
  ];

  return (
    <div className="layout">
      <Header title="Mis pasajes" />
      {
        listTickets.map((ticket) => <Ticket ticket={ticket} />)
      }
      <Footer />
    </div>
  );
}
