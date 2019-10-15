// @flow

import React from 'react';

import PrevArrowIcon from '../../icons/prev_arrow.svg';

type Props = {
  title: string,
};

export default function Header(props: Props) {
  const { title } = props;

  return (
    <div className="heading">
      <div className="heading__icon">
        <PrevArrowIcon />
      </div>
      <div className="heading__title">
        <p className="heading__title">{title}</p>
      </div>
    </div>
  );
}
