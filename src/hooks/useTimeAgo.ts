import TimeAgo from 'javascript-time-ago';

import tr from 'javascript-time-ago/locale/tr.json';

TimeAgo.addDefaultLocale(tr);

const useTimeAgo = (date: string) => {
  const timeAgo = new TimeAgo('tr');

  return timeAgo.format(new Date(date));
};

export default useTimeAgo;
