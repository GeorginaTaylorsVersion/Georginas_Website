import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Chatbot.module.css';

// A simple component to render markdown
const Markdown = ({ content }) => {
    // A very basic markdown to HTML converter
    const html = content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br />');
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                { role: 'model', text: "Hello! I am Georgina's Assistant. Ask me anything about these notes!" }
            ]);
        }
    }, [isOpen]);


    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const historyForApi = messages.map(msg => ({ role: msg.role === 'model' ? 'model' : 'user', text: msg.text }));
            
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: input, history: historyForApi }),
            });

            if (!res.ok) {
                throw new Error('Failed to get response from the server.');
            }

            const data = await res.json();
            const botMessage = { role: 'model', text: data.answer };
            setMessages((prev) => [...prev, botMessage]);

        } catch (error) {
            console.error(error);
            const errorMessage = { role: 'model', text: 'Sorry, something went wrong. Please try again.' };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button className={styles.chatButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✖' : '💬'}
            </button>

            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <h2>Georgina's Assistant</h2>
                        <button onClick={() => setIsOpen(false)} className={styles.closeButton}>✖</button>
                    </div>
                    <div className={styles.chatMessages}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`${styles.message} ${styles[msg.role]}`}>
                                <Markdown content={msg.text} />
                            </div>
                        ))}
                        {isLoading && (
                            <div className={`${styles.message} ${styles.model}`}>
                                <div className={styles.loadingDots}>
                                    <span>.</span><span>.</span><span>.</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className={styles.chatInput}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask a question..."
                            disabled={isLoading}
                        />
                        <button onClick={handleSend} disabled={isLoading}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
} 