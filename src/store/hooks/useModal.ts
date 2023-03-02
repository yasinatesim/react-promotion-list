import { useSelector } from 'react-redux';

import { ModalState } from 'types/models';

import { AppState } from 'types/state';

import { getModalState } from '../selectors';

const useModal = () => useSelector<AppState, ModalState>(getModalState);

export default useModal;
