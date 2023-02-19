import { Detail } from 'types/models';

import request from './request';

export const getPromotionListService = async ({ tagId }: { tagId: string | null }): Promise<void> => {
  const params = {
    Channel: 'PWA',
    ...(tagId && { TagId: tagId }),
  };

  return request.get(`/promotions/list?${new URLSearchParams(params).toString()}`);
};

export const getPromotionDetailService = async ({ id }: { id: string }): Promise<Detail> => {
  return request.get(`/promotions/?Id=${id}`);
};
