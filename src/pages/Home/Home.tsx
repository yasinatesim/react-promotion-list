import React, { useEffect } from 'react';



import MobileLayout from 'containers/MobileLayout';

import { useDispatch } from 'react-redux';
import { getTags } from 'store/reducers/tags';
import { getPromotions } from 'store/reducers/promotions';
import TagList from 'components/TagList';
import Slider from 'components/Slider';
import Footer from 'components/Footer';

const Home: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTags() as any)
    dispatch(getPromotions() as any)
  }, [])

  return (
    <MobileLayout>
      <TagList />

      <Slider />

      <Footer />
    </MobileLayout>
  );
};

export default Home;
