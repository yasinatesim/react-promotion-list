import request from './request';

export const getPromotionListService = async (): Promise<void> => {
  return request.get(`/promotions/list?Channel=PWA`);
};
