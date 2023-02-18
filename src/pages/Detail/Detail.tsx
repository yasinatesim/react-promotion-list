// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DetailLayout from 'containers/DetailLayout';

import {getPromotionDetailService} from 'services/promotion';


const Detail: React.FC = () => {
  const params = useParams()
  console.log("params:", params)

  useEffect(() => {

    const fetchData = async () =>{

      if (params.id) {
        const response = await getPromotionDetailService({id: params.id});
        console.log("response:", response)
      }

    }

    fetchData();

  }, [])



  return (
    <DetailLayout>
      <div>
      Detail page
      </div>
    </DetailLayout>
  );
};

export default Detail;
