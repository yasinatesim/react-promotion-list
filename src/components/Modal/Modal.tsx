import { IconX } from 'assets/Icons';
import React from 'react';

import { useDispatch } from 'react-redux';
import useModal from 'store/hooks/useModal';

import { handleCloseModal } from 'store/reducers/modal';

import css from './Modal.module.scss';
import modalTypes from './types';

type ModalProps = {
  children: React.ReactNode;
};

const Dialog: React.FC<ModalProps> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.dialog}>
      <div className={css.modal} onClick={() => dispatch(handleCloseModal() as any)}>
        <div className={css.popup} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
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
      <IconX />
    </div>
  );

  if (!Component) {
    return null;
  }

  return (
    <Dialog {...modal.props}>
      <Component closeButton={closeButton} {...modal.props} />
    </Dialog>
  );
};

export default Container;
