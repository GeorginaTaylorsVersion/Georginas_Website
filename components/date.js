import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  if (!dateString) {
    return null; // Or a placeholder like 'No Date'
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
} 