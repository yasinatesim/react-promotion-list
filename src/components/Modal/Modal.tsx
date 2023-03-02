import React from 'react';
import { useDispatch } from 'react-redux';
import useModal from 'store/hooks/useModal';

import { handleCloseModal } from 'store/reducers/modal';

import css from './Modal.module.scss';
import modalTypes from './types';

type PopupProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Dialog: React.FC<PopupProps> = ({ children }) => {
  return (
    <div className={css.modal}>
      <div className={css.popup}>{children}</div>
      {/* <ClickAwayListener onClickAway={onClick}>{children}</ClickAwayListener> */}
    </div>
  );
};

function render(type: React.ReactNode) {
  switch (type) {
    default:
      // @ts-ignore
      return modalTypes[type] || null;
  }
}

const Container = () => {
  const dispatch = useDispatch();
  const modal = useModal();

  const Component = render(modal.type);

  const handleClose = () => {
    dispatch(handleCloseModal() as any);
  };

  const closeButton = (
    <div onClick={handleClose} className={css.close}>
      {/* <IconX /> */}
    </div>
  );

  if (!Component) {
    return null;
  }

  return (
    <Dialog onClick={handleClose} {...modal.props}>
      <Component closeButton={closeButton} {...modal.props} />
    </Dialog>
  );
};

export default Container;
