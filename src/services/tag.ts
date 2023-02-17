

import request from './request'

export const getTagList = async (): Promise<void> => {

  return request.get(`/tags/list`)
}
