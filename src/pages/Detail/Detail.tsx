import { IconLeftArrow } from 'assets/Icons';

import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import DetailLayout from 'containers/DetailLayout';

import Button from 'components/Button';

import Image from 'components/Image';

import { getPromotionDetailService } from 'services/promotion';

import { Detail as DetailType } from 'types/models';

import { useText } from 'hooks';

import css from './Detail.module.scss';

const Detail: React.FC = () => {
  const params: { id: string; seoName: string } = useParams();
  const { handleFullFilledTitle } = useText();
  const [data, setData] = useState<null | DetailType>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (params && params.id) {
        try {
          const response = await getPromotionDetailService({ id: params.id });
          setData(response);
        } catch (err) {
          throw new Error(err as string);
        }
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <DetailLayout
      pageDetails={{
        ...data,
      }}
    >
      <Button
        type="secondary"
        shape="circle"
        classnames={{
          container: css.backButton,
        }}
      >
        <Link to="/">
          <IconLeftArrow />
        </Link>
      </Button>

      <Image
        source={data.ImageUrl}
        color={data.BrandIconColor}
        icon={data.BrandIconUrl}
        name={data.SeoName}
        date={data.RemainingText}
        style={{
          borderBottomLeftRadius: 100,
        }}
      />

      <div className={css.content}>
        {data.Title && handleFullFilledTitle(data.Title) && (
          <div className={css.title} dangerouslySetInnerHTML={{ __html: data.Title }} />
        )}

        {data.Description && <div className={css.description} dangerouslySetInnerHTML={{ __html: data.Description }} />}
      </div>
    </DetailLayout>
  );
};

export default Detail;
