import { IconSearch } from 'assets/Icons';
import cx from 'classnames';
import React from 'react';

import { Tag } from 'types/models';

import style from './TagListItem.module.scss';

type Props = {
  tag: Tag;
  activeTag: number;
};

const TagList: React.FC<Props> = ({ tag, activeTag }) => {
  if (typeof tag.IconUrl === 'object') {
    return (
      <div
        className={cx(style.container, {
          [style.active]: activeTag === tag.Id,
        })}
      >
        <div className={style.all}>
          <IconSearch />
        </div>

        <span className={style.name}>{tag.Name}</span>
      </div>
    );
  }

  return (
    <div
      className={cx(style.container, {
        [style.active]: activeTag === tag.Id,
      })}
    >
      <img width={24} height={24} src={tag.IconUrl as string} alt={tag.Name} />

      <span className={style.name}>{tag.Name}</span>
    </div>
  );
};

export default TagList;
