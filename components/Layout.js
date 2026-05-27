import Header from './Header';
import Chatbot from './Chatbot';
import { useRouter } from 'next/router';

const CHATBOT_ROUTES = new Set([
    '/notes',
    '/[term]/[course]',
    '/[term]/[course]/units/[unit]',
    '/[term]/[course]/units/[unit]/notes/[note]',
]);

export default function Layout({ children }) {
    const router = useRouter();
    // Match notes pages: /[term]/[course]/units/[unit]/notes/[note]
    const isNotesPage = /^\/[\w%\-.]+\/[\w%\-.]+\/units\/[\w%\-.]+\/notes\/[\w%\-.]+$/.test(router.asPath);
    const showChatbot = CHATBOT_ROUTES.has(router.pathname);

    return (
        <>
            <Header />
            {isNotesPage ? (
                <div className="main-content-padding">
                    <div className="content-rectangle">
                        {children}
                    </div>
                </div>
            ) : (
                <>{children}</>
            )}
            {showChatbot && <Chatbot />}
            <footer>
                <p>&copy; 2025 Georgina Wang. All rights reserved.</p>
            </footer>
        </>
    );
} 