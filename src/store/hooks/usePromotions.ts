import { useSelector } from 'react-redux';

import { getPromotionState } from '../selectors';

const usePromotions = () => useSelector(getPromotionState);

export default usePromotions;
