import request from './request';

export const getTagListService = async (): Promise<void> => {
  return request.get(`/tags/list`);
};
