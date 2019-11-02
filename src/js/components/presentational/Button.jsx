// @flow

import React from 'react';

import TicketIcon from '../../../icons/ticket.svg';

type Props = {
  text: string,
  onBtnClick: () => void,
};

export default function Button(props: Props) {
  const { text, onBtnClick } = props;

  return (
    <div className="time-container">
      <div className="select-icon">
        <TicketIcon />
      </div>
      <button type="button" className="btn btn--seat" onClick={() => onBtnClick()}>{text}</button>
    </div>
  );
}
