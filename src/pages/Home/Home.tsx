import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getPromotions } from 'store/reducers/promotions';
import { getTags } from 'store/reducers/tags';

import MobileLayout from 'containers/MobileLayout';

import Footer from 'components/Footer';
import Slider from 'components/Slider';
import TagList from 'components/TagList';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTags() as any);
    dispatch(getPromotions() as any);
  }, []);

  return (
    <MobileLayout>
      <TagList />

      <Slider />

      <Footer />
    </MobileLayout>
  );
};

export default Home;
