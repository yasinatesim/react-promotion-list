import { IconSearch } from 'assets/Icons';
import React from 'react';
import { useDispatch } from 'react-redux';

import useTags from 'store/hooks/useTags';
import { getPromotions } from 'store/reducers/promotions';

import { Tag } from 'types/models';

import style from './TagList.module.scss';
import TagListItem from './TagListItem';

const ALL_TAG_ID = 99999999;

const TagList: React.FC = () => {
  const dispatch = useDispatch();
  const tagsState = useTags();

  const tags = [
    {
      IconUrl: <IconSearch />,
      Id: ALL_TAG_ID,
      Name: 'Fırsat Bul',
      Rank: 0,
    },
    ...tagsState,
  ];

  const handleClickTag = (id: number) => {
    dispatch(
      getPromotions({
        tagId: ALL_TAG_ID === id ? null : String(id),
      }) as any
    );
  };

  return (
    <div className={style.container}>
      {tags.map((tag: Tag, index: number) => (
        <div onClick={() => handleClickTag(tag.Id)} key={`${tag.Id}_${index}`}>
          <TagListItem tag={tag} />
        </div>
      ))}
    </div>
  );
};

export default TagList;
