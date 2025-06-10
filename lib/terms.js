import { getTerms, getCourses } from './notes';

export function getSortedTermsData() {
  const terms = getTerms();
  const allTermsData = terms.map(termId => {
    const courses = getCourses(termId);
    return {
      id: termId,
      title: termId.replace('-', ' ').toUpperCase(), // Simple title from id
      courses: courses
    };
  });

  return allTermsData.sort((a, b) => {
    // Sort by term name for now, can be updated later if a date or order is available
    return a.id.localeCompare(b.id);
  });
} 