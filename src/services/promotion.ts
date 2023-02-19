import { Detail } from 'types/models';

import request from './request';

export const getPromotionListService = async ({ tagId }: { tagId: string | null }): Promise<void> => {
  return request.get(`/promotions/list?Channel=PWA${tagId ? `&TagId=${tagId}` : ''}`);
};

export const getPromotionDetailService = async ({ id }: { id: string }): Promise<Detail> => {
  return request.get(`/promotions/?Id=${id}`);
};
