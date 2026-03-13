import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Clock, User } from 'lucide-react';
import contentData from '../content/blogData.json';

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [postMeta, setPostMeta] = useState<any>(null);

    useEffect(() => {
        // Find meta data from JSON index
        const meta = contentData.find(p => p.slug === slug);
        if (meta) {
            setPostMeta(meta);
            // In a real app with Vite, we'd import the markdown file directly.
            // For this sandbox construct, we fetch it dynamically if it existed in public, or we render a pre-loaded string.
            // Let's use a dynamic import approach via Vite glob if possible, or fallback to mock text for demonstration.
            import(`../content/blog/${slug}.md?raw`)
                .then(res => setContent(res.default))
                .catch(() => setContent('# A bejegyzés nem található\nKérjük ellenőrizze az URL-t.'));
        }
    }, [slug]);

    if (!postMeta) return <div className="container section">Betöltés...</div>;

    return (
        <>
            <Helmet>
                <title>{postMeta.title} | Masinamágus Blog</title>
                <meta name="description" content={postMeta.description} />
            </Helmet>

            <article className="blog-post" style={{ paddingTop: '100px', backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>

                {/* Post Header */}
                <header className="container" style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '3rem' }}>
                    <Link to="/blog" className="text-accent" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', fontWeight: 600 }}>
                        <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Vissza a cikkekhez
                    </Link>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                        <span style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)', color: 'var(--color-accent)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600 }}>
                            {postMeta.category}
                        </span>
                    </div>

                    <h1 style={{ fontSize: '3rem', lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>{postMeta.title}</h1>

                    <div style={{ display: 'flex', gap: '2rem', color: 'var(--color-text-secondary)', fontSize: '0.95rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}><User size={18} style={{ marginRight: '0.5rem' }} /> {postMeta.author}</span>
                        <span style={{ display: 'flex', alignItems: 'center' }}><Clock size={18} style={{ marginRight: '0.5rem' }} /> {postMeta.readingTime}</span>
                    </div>
                </header>

                {/* Markdown Content rendered via ReactMarkdown */}
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}>

                    {postMeta.image && (
                        <img src={postMeta.image} alt={postMeta.title} style={{ width: '100%', borderRadius: '12px', marginBottom: '3rem', maxHeight: '400px', objectFit: 'cover' }} />
                    )}

                    <div className="markdown-body" style={{ color: '#d1d5db' }}>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ node, inline, className, children, ...props }: any) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={atomDark}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', color: 'var(--color-accent)' }}>
                                            {children}
                                        </code>
                                    )
                                },
                                h2: ({ node, ...props }) => <h2 style={{ color: 'white', marginTop: '3rem', marginBottom: '1rem' }} {...props} />,
                                h3: ({ node, ...props }) => <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }} {...props} />,
                                p: ({ node, ...props }) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
                                a: ({ node, ...props }) => <a style={{ color: 'var(--color-accent)', textDecoration: 'underline' }} {...props} />,
                                blockquote: ({ node, ...props }) => <blockquote style={{ borderLeft: '4px solid var(--color-accent)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', backgroundColor: 'var(--color-bg-secondary)', padding: '1.5rem' }} {...props} />
                            }}
                        >
                            {content || 'Cikk betöltése folyamatban...'}
                        </ReactMarkdown>
                    </div>

                    {/* Post-CTA */}
                    <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--color-bg-secondary)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'white' }}>Szakértői segítségre van szüksége?</h3>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                            Tapasztalta a cikkben említett hibajeleket? Kérjen egyedi, szoftveres megoldásra árajánlatot.
                        </p>
                        <Link to="/#contact" className="btn btn-primary">Kérjen ajánlatot</Link>
                    </div>

                </div>
            </article>
        </>
    );
};

export default BlogPost;
