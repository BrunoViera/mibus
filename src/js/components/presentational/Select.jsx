
// @flow

import React from 'react';

import PinIcon from '../../../icons/pin.svg';
import DownArrowIcon from '../../../icons/down_arrow.svg';

type Props = {
  text?: string,
  items: Array<{ id: number, value: string, text: string }>,
};

export default function Select(props: Props) {
  const { text, items } = props;

  return (
    <div className="select-container">
      <div className="select-icon">
        <PinIcon />
      </div>
      <select className="select">
        <option defaultValue>{text}</option>
        {
          items.map((item) => <option key={item.id} value={item.value}>{item.text}</option>)
        }
      </select>
      <div className="select-icon select-icon--arrow select-icon--pull-right">
        <DownArrowIcon />
      </div>
    </div>
  );
}

Select.defaultProps = {
  text: 'Seleccione una opción',
};
