import TimeAgo from 'javascript-time-ago';

import tr from 'javascript-time-ago/locale/tr.json';

TimeAgo.addDefaultLocale(tr);

const useTimeAgo = (date: string) => {
  console.log("date:", date)
  const timeAgo = new TimeAgo('tr');

  const regex = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/g;
  const found = date.match(regex);

  if (found) {
    date = date.split('.').reverse().join('-');
  }

  return timeAgo.format(new Date(date));
};

export default useTimeAgo;
