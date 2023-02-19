import React from 'react';
import { useDispatch } from 'react-redux';

import useTags from 'store/hooks/useTags';
import { getPromotions } from 'store/reducers/promotions';
import { updateActiveTag } from 'store/reducers/tags';
import { ALL_TAG_ID } from 'store/reducers/tags/constants';

import { Tag } from 'types/models';

import css from './TagList.module.scss';
import TagListItem from './TagListItem';

const TagList: React.FC = () => {
  const dispatch = useDispatch();
  const tags = useTags();

  const handleToggleLoader = (isActive: boolean) => {
    const loader = document.querySelector<any>('#loader');

    if (loader) {
      loader.style.display = isActive ? 'flex' : 'none';
    }
  };

  const handleClickTag = (id: number) => {
    if (tags.find((tag: Tag) => tag.Active === true)?.Id === id) {
      return;
    }

    dispatch(updateActiveTag({ activeTag: id }) as any);

    handleToggleLoader(true);

    setTimeout(() => {
      handleToggleLoader(false);
    }, 1000);

    const { swiper } = document.querySelector<any>('#slider');

    if (swiper) {
      swiper.slideTo(0);
    }

    dispatch(
      getPromotions({
        tagId: tags.find((tag: Tag) => tag.Id === id)?.Id === ALL_TAG_ID ? null : String(id),
      }) as any
    );
  };

  return (
    <div className={css.container}>
      {tags.map((tag: Tag, index: number) => (
        <div onClick={() => handleClickTag(tag.Id)} key={`${tag.Id}_${index}`}>
          <TagListItem tag={tag} />
        </div>
      ))}
    </div>
  );
};

export default TagList;
