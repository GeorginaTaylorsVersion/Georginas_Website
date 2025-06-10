import { getTerms, getCourses } from './notes';

export function getSortedTermsData() {
  const terms = getTerms();
  const allTermsData = terms.map(termId => {
    const courses = getCourses(termId);
    // Provide a dummy date for now, as actual date metadata is not available
    const dummyDate = '2023-01-01'; 
    return {
      id: termId,
      date: dummyDate, // Add a placeholder date
      title: termId.replace('-', ' ').toUpperCase(), // Simple title from id
      courses: courses
    };
  });

  return allTermsData.sort((a, b) => {
    // Sort by term name for now, can be updated later if a meaningful order is available
    return a.id.localeCompare(b.id);
  });
} 