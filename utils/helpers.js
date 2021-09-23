const {format, formatDistanceToNow} = require('date-fns');

module.exports = {
    format_date: (date) => {
      return format(date, 'MM/dd/yyyy');
    },
    days_to_completion: (date) => {
        return formatDistanceToNow(date, { addSuffix: true })
    }
  };
  