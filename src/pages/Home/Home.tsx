import React, { useEffect } from 'react';



import MobileLayout from 'containers/MobileLayout';

import { useDispatch } from 'react-redux';
import { getTags } from 'store/reducers/tags';
import TagList from 'components/TagList';
import Slider from 'components/Slider';

const Home: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTags() as any)
  }, [])

  return (
    <MobileLayout>
      <TagList />

      <Slider />
    </MobileLayout>
  );
};

export default Home;
