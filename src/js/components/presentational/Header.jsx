// @flow

import React from 'react';

import PrevArrowIcon from '../../../icons/prev_arrow.svg';

type Props = {
  title: string,
  previusUrl?: string,
};

export default function Header(props: Props) {
  const { title, previusUrl } = props;

  return (
    <div className="heading">
      {previusUrl && previusUrl.length && (
      <div className="heading__icon">
        <button type="button" href={previusUrl}>
          <PrevArrowIcon />
        </button>
      </div>
      )}
      <div className="heading__title">
        <p className="heading__title">{title}</p>
      </div>
    </div>
  );
}

Header.defaultProps = {
  previusUrl: '',
};
