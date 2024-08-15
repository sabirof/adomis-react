import React from 'react';
import { format } from 'date-fns';

const DateComponent = ({ dateString, options, ...rest }) => {
  const formattedDate = format(new Date(dateString), options || 'PP');

  return (
    <time dateTime={dateString} {...rest}>
      {formattedDate}
    </time>
  );
};

export default DateComponent;
