import { Promotion, Tag, ModalState } from './models';

export type AppState = {
  tags: Array<Tag>;
  promotions: Array<Promotion>;
  modal: ModalState;
};
