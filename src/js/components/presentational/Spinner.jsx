import React from 'react';
import useGlobalStatus from '../../hooks/useGlobalStatus';

export default function Spinner() {
  const { isLoading } = useGlobalStatus();

  return (
    <div className="spinner" style={{ display: isLoading() ? 'block' : 'none' }}>
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}
