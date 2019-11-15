import React, { useState } from 'react';

import Header from '../presentational/Header';
import Footer from '../presentational/Footer';

import SelectInput from '../presentational/Select';
import DateInput from '../presentational/Date';
import TimeInput from '../presentational/Time';
import ButtonInput from '../presentational/Button';
import SeatModal from '../presentational/SeatModal';

export default function BuyTicket() {
  const [showModal, setShowModal] = useState(false);

  const itemsFrom = [
    { id: 1, value: 'volvo', text: 'Volvo' },
    { id: 2, value: 'saab', text: 'Saab' },
    { id: 3, value: 'mercedes', text: 'Mercedes' },
    { id: 4, value: 'audi', text: 'Audi' },
  ];

  const itemsTo = [
    { id: 1, value: 'volvo', text: 'Volvo' },
    { id: 2, value: 'saab', text: 'Saab' },
    { id: 3, value: 'mercedes', text: 'Mercedes' },
    { id: 4, value: 'audi', text: 'Audi' },
  ];

  const listSeats = [
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: '4' },
    { id: 5, value: '5' },
    { id: 6, value: '6' },
    { id: 7, value: '7' },
    { id: 8, value: '8' },
    { id: 9, value: '9' },
    { id: 10, value: '10' },
    { id: 11, value: '11' },
    { id: 12, value: '12' },
    { id: 13, value: '13' },
    { id: 14, value: '14' },
    { id: 15, value: '15' },
    { id: 16, value: '16' },
    { id: 17, value: '17' },
    { id: 18, value: '18' },
    { id: 19, value: '19' },
    { id: 20, value: '20' },
    { id: 21, value: '21' },
    { id: 22, value: '22' },
  ];

  const openSeatModal = () => setShowModal(true);
  const closeSeatModal = () => setShowModal(false);

  return (
    <div className="layout">
      <Header title="Comprar Pasaje" />
      <SelectInput text="Origen" items={itemsFrom} />
      <SelectInput text="Destino" items={itemsTo} />
      <DateInput />
      <TimeInput />
      <ButtonInput text="Asiento" onBtnClick={openSeatModal} />
      <SelectInput text="Subo en" items={itemsFrom} />
      <SelectInput text="Bajo en" items={itemsTo} />

      <button type="button" className="btn">Finalizar</button>
      <SeatModal
        show={showModal}
        onCloseModal={closeSeatModal}
        onSeatClick={closeSeatModal}
        seatList={listSeats}
      />
      <Footer />
    </div>
  );
}
