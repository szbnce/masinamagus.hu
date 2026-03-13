import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import contentData from '../content/blogData.json';

// Basic blog card UI matching the Masonry request
const BlogCard = ({ post }: { post: any }) => (
    <article className="blog-card bg-tertiary" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}>
        <Link to={`/blog/${post.slug}`} style={{ display: 'block', height: '200px', overflow: 'hidden', position: 'relative' }}>
            <img src={post.image || 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800'} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="blog-img" />
            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'var(--color-accent)', color: 'var(--color-bg)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                {post.category}
            </div>
        </Link>
        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4 }}>
                <Link to={`/blog/${post.slug}`} className="hover-accent">{post.title}</Link>
            </h3>
            <p className="text-secondary" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{post.description}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                    <Clock size={16} style={{ marginRight: '0.5rem' }} /> {post.readingTime}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                    <Tag size={16} style={{ marginRight: '0.5rem' }} /> {post.tags[0]}
                </div>
            </div>
        </div>
    </article>
);


const BlogHub = () => {
    return (
        <>
            <Helmet>
                <title>Blog & Tudástár | Masinamágus</title>
                <meta name="description" content="Szakmai cikkek, esettanulmányok és tudástár a motorvezérlő-optimalizálás világából. Ismerje meg a kulisszatitkokat!" />
            </Helmet>

            <section className="hero" style={{ minHeight: '40vh', paddingBottom: '2rem', backgroundPositionY: '20%' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content text-center">
                    <h1 className="hero-title slide-up" style={{ fontSize: '3.5rem' }}>
                        Szakmai <span>Tudástár</span>
                    </h1>
                    <p className="hero-subtitle slide-up" style={{ animationDelay: '0.2s', margin: '0 auto' }}>
                        Esettanulmányok, műhelytitkok és válaszok minden szoftveres kérdésre.
                    </p>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container">
                    {/* Category Filter Pills (Static for now, can be state-driven later) */}
                    <div className="category-filters slide-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Minden Cikk</button>
                        <button className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>Mágus Műhely</button>
                        <button className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>Tudástár</button>
                        <button className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>TikTok Krónikák</button>
                    </div>

                    {/* Masonry-like Grid */}
                    <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                        {contentData.map((post: any, i: number) => (
                            <div key={post.slug} className="slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                <BlogCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogHub;
