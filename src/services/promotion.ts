import { Detail } from 'types/models';

import request from './request';

export const getPromotionListService = async (): Promise<void> => {
  return request.get(`/promotions/list?Channel=PWA`);
};
export const getPromotionDetailService = async ({ id }: { id: string }): Promise<Detail> => {
  return request.get(`/promotions/?Id=${id}`);
};
