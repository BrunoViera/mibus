import React, { useCallback } from 'react';

import Header from '../presentational/Header';
import Footer from '../presentational/Footer';

import SelectInput from '../presentational/Select';
import DateInput from '../presentational/Date';
import TimeInput from '../presentational/Time';
import ButtonInput from '../presentational/Button';

export default function BuyTicket() {
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

  const handleRowClick = useCallback(
    () => {
      console.log('Test');
    },
    [],
  );

  return (
    <div className="layout">
      <Header title="Comprar Pasaje" />
      <SelectInput text="Origen" items={itemsFrom} />
      <SelectInput text="Destino" items={itemsTo} />
      <DateInput />
      <TimeInput />
      <ButtonInput text="Asiento" onBtnClick={handleRowClick} />
      <SelectInput text="Subo en" items={itemsFrom} />
      <SelectInput text="Bajo en" items={itemsTo} />

      <button type="button" className="btn">Finalizar</button>
      <Footer />
    </div>
  );
}
