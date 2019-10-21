import React from 'react';

import Header from './Header';
import Ticket from './Ticket';

export default function Tickets() {
  const listTickets = [
    {
      id: 1,
      from: 'Montevideo, Terminal Tres Cruces',
      to: 'Rivera, Terminal',
      date: 'Martes 15, Julio 2019',
      seat: 24,
      bus: 'Omnibus super cama, coche n 02',
      isCurrent: true,
    },
    {
      id: 2,
      from: 'Montevideo, Terminal Tres Cruces',
      to: 'Tacuarembó, Terminal',
      date: 'Martes 24, Junio 2019',
      seat: 24,
      bus: 'Omnibus super cama, coche n 02',
      isCurrent: false,
    },
    {
      id: 3,
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
        listTickets.map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)
      }
    </div>
  );
}
