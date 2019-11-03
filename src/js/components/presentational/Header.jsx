// @flow

import React from 'react';

import PrevArrowIcon from '../../../icons/prev_arrow.svg';

type Props = {
  title: string,
  previousUrl?: string,
};

export default function Header(props: Props) {
  const { title, previousUrl } = props;

  return (
    <div className="heading">
      {previousUrl && previousUrl.length && (
        <div className="heading__icon">
          <button type="button" className="heading__btn" href={previousUrl}>
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
  previousUrl: '',
};
