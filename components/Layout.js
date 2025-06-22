import Header from './Header';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();
    // Match notes pages: /[term]/[course]/units/[unit]/notes/[note]
    const isNotesPage = /^\/[\w%\-.]+\/[\w%\-.]+\/units\/[\w%\-.]+\/notes\/[\w%\-.]+$/.test(router.asPath);

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
            <footer>
                <p>&copy; 2025 Georgina Wang. All rights reserved.</p>
            </footer>
        </>
    );
} 