const {format, formatDistanceToNow, toDate} = require('date-fns');

module.exports = {
    format_date: (date) => {
      return format(new Date(date), 'MM/dd/yyyy');
    },
    days_to_completion: (date) => {
        return formatDistanceToNow(new Date(date), { addSuffix: true })
    }
  };
  