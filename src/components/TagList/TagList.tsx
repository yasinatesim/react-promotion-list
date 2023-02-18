import React from 'react';

import { Tag } from 'types/models';

import useTags from 'store/hooks/useTags';

import TagListItem from './TagListItem';

import style from './TagList.module.scss';
import { IconSearch } from 'assets/Icons';

const TagList: React.FC = () => {
  const tagsState = useTags();

  const tags = [
    {
      IconUrl: <IconSearch />,
      Id: 99999999,
      Name: 'Fırsat Bul',
      Rank: 0,
    },
    ...tagsState,
  ];

  return (
    <div className={style.container}>
      {tags.map((tag: Tag, index: number) => (
        <TagListItem key={`${tag.Id}_${index}`} tag={tag} />
      ))}
    </div>
  );
};

export default TagList;
