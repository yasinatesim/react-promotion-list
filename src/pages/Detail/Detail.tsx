// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailLayout from 'containers/DetailLayout';

import { getPromotionDetailService } from 'services/promotion';
import useCardTitle from 'hooks/useCardTitle';
import { handleFullFilledTitle } from 'helpers/text';

const Detail: React.FC = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const response = await getPromotionDetailService({ id: params.id });
        console.log('response:', response);
        setData(response);
      }
    };

    fetchData();
  }, []);

  return (
    <DetailLayout>
      <img src={data.ImageUrl} alt="" />
      {data.Title && handleFullFilledTitle(data.Title) && (
        <div className={style.title} dangerouslySetInnerHTML={{ __html: data.Title }} />
      )}
    </DetailLayout>
  );
};

export default Detail;
