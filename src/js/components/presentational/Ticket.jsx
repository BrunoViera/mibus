// @flow

import React from 'react';

type Props = {
  ticket: {
    from: string,
    to: string,
    date: string,
    seat: number,
    bus: string,
    isCurrent: boolean,
  },
};

export default function Ticket(props: Props) {
  const { ticket } = props;

  return (
    <div className={ticket.isCurrent ? 'ticket ticket--current' : 'ticket'}>
      <div className="ticket__route">
        <div className="dots">
          <span className="dots__item is-limit" />
          <span className="dots__item" />
          <span className="dots__item" />
          <span className="dots__item" />
          <span className="dots__item" />
          <span className="dots__item" />
          <span className="dots__item" />
          <span className="dots__item is-limit" />
        </div>
        <div className="route__description">
          <div className="route__from">
            <p className="route__pretitle">Desde</p>
            <p className="route__title">{ticket.from}</p>
          </div>
          <div className="route__to">
            <p className="route__pretitle">Hasta</p>
            <p className="route__title">{ticket.to}</p>
          </div>
        </div>
      </div>
      <div className="ticket__description">
        <p className="ticket__date">{ticket.date}</p>
        <p className="ticket__seat">{ticket.seat}</p>
        <p className="ticket__bus">{ticket.bus}</p>
      </div>
    </div>
  );
}
