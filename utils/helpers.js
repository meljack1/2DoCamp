import {format} from 'date-fns'

module.exports = {
    format_date: (date) => {
      return format(date, 'MM/dd/yyyy');
    },
  };
  