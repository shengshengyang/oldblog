import React, { useContext, useEffect } from 'react';
import Loader from '../Layout/Loader';
import CustomizerContext from '../_helper/Customizer';

const Callback = () => {
  const { layoutURL } = useContext(CustomizerContext);
    useEffect(() => {
      window.location.href = `${process.env.PUBLIC_URL}/${layoutURL}`;
  });

  return (
    <div>
      <Loader />
    </div>
  );
};

export default Callback;
