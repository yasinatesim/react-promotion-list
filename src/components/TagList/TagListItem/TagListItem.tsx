import { IconSearch } from 'assets/Icons';
import React from 'react';

import { Tag } from 'types/models';

import style from './TagListItem.module.scss';

type Props = {
  tag: Tag;
};

const TagList: React.FC<Props> = ({ tag }) => {
  if (typeof tag.IconUrl === 'object') {
    return (
      <div className={style.container}>
        <div className={style.all}>
          <IconSearch />
        </div>

        <span className={style.name}>{tag.Name}</span>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <img width={24} height={24} src={tag.IconUrl as string} alt={tag.Name} />

      <span className={style.name}>{tag.Name}</span>
    </div>
  );
};

export default TagList;
