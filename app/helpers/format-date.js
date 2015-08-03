import Ember from 'ember';

const moment = window.moment;

export function formatDate(params, hash) {
  const [date] = params;
  const [format] = hash.format
  if (date instanceof Date) {
    return moment(date).format(format);
  }
  return '';
}

export default Ember.Helper.helper(formatDate);
