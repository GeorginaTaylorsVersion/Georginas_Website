import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import styles from '../styles/Chatbot.module.css';

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

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: input,
                    history: messages.slice(1),
                }),
            });

            let data;
            try {
                data = await response.json();
            } catch (e) {
                data = {};
            }
            if (!response.ok) {
                const errorText = data.message || 'Sorry, something went wrong. Please try again.';
                const errorMessage = { role: 'model', text: errorText };
                setMessages((prev) => [...prev, errorMessage]);
                return;
            }
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
                {isOpen ? '✖' : <span role="img" aria-label="bow" style={{fontSize: '2.1em', color: '#ff69b4', lineHeight: 1}}>🎀</span>}
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
                                <ReactMarkdown
                                    children={msg.text}
                                    remarkPlugins={[remarkMath]}
                                    rehypePlugins={[rehypeKatex]}
                                />
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