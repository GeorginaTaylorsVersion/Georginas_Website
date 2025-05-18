import ReactMarkdown from 'react-markdown';
import { getNoteContent, getTerms, getCourses, getNotes } from '../../../lib/notes';

export default function NotePage({ content }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export async function getStaticPaths() {
  const terms = getTerms();
  const paths = [];
  terms.forEach(term => {
    const courses = getCourses(term);
    courses.forEach(course => {
      const notes = getNotes(term, course);
      notes.forEach(note => {
        paths.push({ params: { term, course, note } });
      });
    });
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { content } = getNoteContent(params.term, params.course, params.note);
  return { props: { content } };
} 