import { useSelector } from 'react-redux'

import { getTagState } from '../selectors'

const useTags = () => useSelector(getTagState)

export default useTags
