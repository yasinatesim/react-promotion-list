import { IconSearch } from 'assets/Icons';
import cx from 'classnames';
import React from 'react';

import { Tag } from 'types/models';

import css from './TagListItem.module.scss';

type Props = {
  tag: Tag;
};

const TagList: React.FC<Props> = ({ tag }) => {
  if (typeof tag.IconUrl === 'object') {
    return (
      <div
        className={cx(css.container, {
          [css.active]: tag.Active,
        })}
      >
        <div className={css.all}>
          <IconSearch />
        </div>

        <span className={css.name}>{tag.Name}</span>
      </div>
    );
  }

  return (
    <div
      className={cx(css.container, {
        [css.active]: tag.Active,
      })}
    >
      <img width={24} height={24} src={tag.IconUrl as string} alt={tag.Name} />

      <span className={css.name}>{tag.Name}</span>
    </div>
  );
};

export default TagList;
