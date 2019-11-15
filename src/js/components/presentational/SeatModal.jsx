// @flow

import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  onSeatClick: () => void,
  onCloseModal: () => void,
  show: boolean,
  seatList: Array<{ id: number, value: string }>
};

export default function Button(props: Props) {
  const {
    onSeatClick,
    show,
    onCloseModal,
    seatList,
  } = props;

  const chunk = (arr, size) => Array.from(
    { length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size),
  );

  const [firstBatch, secondBatch] = chunk(seatList, 11);

  const modal = (
    <div className={show ? 'modal modal--is-active' : 'modal'}>
      <button className="modal__close-btn" type="button" onClick={onCloseModal}>X</button>
      <div className={show ? 'modal-content modal-content--from-bottom' : 'modal-content modal-content--from-bottom2'}>
        <div className="bus">
          <div className="bus__row">
            {
              firstBatch.map((seat) => (
                <div key={seat.id} className="bus__seat">
                  <button type="button" onClick={() => onSeatClick()}>{seat.value}</button>
                </div>
              ))
            }
          </div>
          <div className="bus__row">
            {
              secondBatch.map((seat) => (
                <div key={seat.id} className="bus__seat">
                  <button type="button" onClick={() => onSeatClick()}>{seat.value}</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modal,
    document.getElementById('modal-root'),
  );
}
