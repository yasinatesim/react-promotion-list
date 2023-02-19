import { IconSearch } from 'assets/Icons';
import React from 'react';

import useTags from 'store/hooks/useTags';

import { Tag } from 'types/models';

import style from './TagList.module.scss';
import TagListItem from './TagListItem';

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
