import React from 'react';

import MobileLayout from 'containers/MobileLayout';
import { getTagList } from 'services/tag';
import Button from 'components/Button';

const Home: React.FC = () => {
  const fetchData = async () => {

    const d = await getTagList()

    console.log(d)
  }



  return (
    <MobileLayout>
      <Button onClick={fetchData}>Fetch Data</Button>
    </MobileLayout>
  );
};

export default Home;
