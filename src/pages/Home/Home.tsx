import React, { useEffect } from 'react';



import MobileLayout from 'containers/MobileLayout';

import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { getTags } from 'store/tags';

const Home: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTags() as any)
  }, [])



  return (
    <MobileLayout>
      deneme
    </MobileLayout>
  );
};

export default Home;
