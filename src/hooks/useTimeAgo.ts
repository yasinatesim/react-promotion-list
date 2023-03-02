import date from 'data/date.json';
import TimeAgo from 'javascript-time-ago';

import tr from 'javascript-time-ago/locale/tr.json';

// @ts-ignore
import { round } from 'javascript-time-ago/steps';

TimeAgo.addDefaultLocale(tr);

TimeAgo.addLabels('tr', 'custom', date);

const useTimeAgo = (date: string) => {
  const timeAgo = new TimeAgo('tr');

  const regex = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/g;
  const found = date.match(regex);

  if (found) {
    date = date.split('.').reverse().join('-');
  }

  const customStyle = {
    steps: round,
    labels: 'custom',
  };

  return timeAgo.format(new Date(date), customStyle);
};

export default useTimeAgo;
