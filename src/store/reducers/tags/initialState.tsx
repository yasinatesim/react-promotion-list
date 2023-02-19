import { IconSearch } from 'assets/Icons';

import { ALL_TAG_ID } from './constants';
import { TagsState } from './types';

const initialState: TagsState = [
  {
    IconUrl: <IconSearch />,
    Id: ALL_TAG_ID,
    Name: 'Fırsat Bul',
    Rank: 0,
    Active: true,
  },
];

export default initialState;
