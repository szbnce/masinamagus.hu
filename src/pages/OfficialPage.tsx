import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft } from 'lucide-react';

const OfficialPage = () => {
    const { docSlug } = useParams();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (!docSlug) return;

        // Convert route slug to expected filename
        const filename = docSlug === 'aszf' ? 'ASZF' : docSlug === 'gdpr' ? 'GDPR' : null;

        if (filename) {
            import(`../official/${filename}.md?raw`)
                .then(res => {
                    const text = res.default;
                    setContent(text);
                    // Extract title from first line
                    const firstLine = text.split('\n')[0].replace(/#/g, '').trim();
                    setTitle(firstLine || (filename === 'ASZF' ? 'Általános Szerződési Feltételek' : 'Adatkezelési Tájékoztató'));
                })
                .catch(() => setContent('# A dokumentum nem található\nKérjük ellenőrizze az URL-t.'));
        } else {
            setContent('# Érvénytelen dokumentum');
        }
    }, [docSlug]);

    return (
        <>
            <Helmet>
                <title>{title ? `${title} | Masinamágus` : 'Dokumentum | Masinamágus'}</title>
            </Helmet>

            <article className="official-document" style={{ paddingTop: '120px', paddingBottom: '4rem', backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
                <header className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '2rem' }}>
                    <Link to="/" className="text-accent" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', fontWeight: 600 }}>
                        <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Vissza a főoldalra
                    </Link>
                </header>

                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
                    <div className="markdown-body" style={{ color: '#d1d5db' }}>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h1: ({ node, ...props }) => <h1 style={{ color: 'white', marginBottom: '2rem', fontSize: '2.5rem', lineHeight: 1.2 }} {...props} />,
                                h2: ({ node, ...props }) => <h2 style={{ color: 'white', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.75rem' }} {...props} />,
                                h3: ({ node, ...props }) => <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '0.75rem', fontSize: '1.25rem' }} {...props} />,
                                p: ({ node, ...props }) => <p style={{ marginBottom: '1.25rem' }} {...props} />,
                                ul: ({ node, ...props }) => <ul style={{ marginBottom: '1.25rem', paddingLeft: '1.5rem', listStyleType: 'disc' }} {...props} />,
                                li: ({ node, ...props }) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
                                a: ({ node, ...props }) => <a style={{ color: 'var(--color-accent)', textDecoration: 'underline' }} {...props} />,
                                strong: ({ node, ...props }) => <strong style={{ color: 'white' }} {...props} />
                            }}
                        >
                            {content || 'Dokumentum betöltése...'}
                        </ReactMarkdown>
                    </div>
                </div>
            </article>
        </>
    );
};

export default OfficialPage;
