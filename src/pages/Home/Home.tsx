import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getPromotions } from 'store/reducers/promotions';
import { getTags } from 'store/reducers/tags';

import MobileLayout from 'containers/MobileLayout';

import Slider from 'components/Slider';
import TagList from 'components/TagList';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTags() as any);
    dispatch(getPromotions({ tagId: null }) as any);
  }, []);

  return (
    <MobileLayout>
      <TagList />

      <Slider />
    </MobileLayout>
  );
};

export default Home;
