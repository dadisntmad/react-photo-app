import React from 'react';
import loader from '../../assets/loading.gif';

const Loader = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={loader} alt="loading" width="135px" />
    </div>
  );
};

export default Loader;
