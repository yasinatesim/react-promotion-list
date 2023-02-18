import { Tag } from 'types/models';
import { AppState } from 'types/state';

export const getTagState = (state: AppState): Array<Tag> => state.tags;
