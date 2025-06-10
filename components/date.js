export default function Date({ dateString }) {
  if (!dateString) {
    return null; // Or a placeholder like 'No Date'
  }
  return <time dateTime={dateString}>{dateString}</time>;
} 