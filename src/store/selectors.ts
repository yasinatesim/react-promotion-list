import { Promotion, Tag } from 'types/models';
import { AppState } from 'types/state';

export const getTagState = (state: AppState): Array<Tag> => state.tags;
export const getPromotionState = (state: AppState): Array<Promotion> => state.promotions;
