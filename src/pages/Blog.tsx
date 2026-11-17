import { useEffect, useState } from "react";
import { cachedBody, findPost, formatDate, listPosts, loadBody, type PostMeta } from "../blog";
import { Markdown } from "../blog/markdown";
import { Arrow, PageCta } from "../components/ui";
import { fill, useLocale, useT } from "../i18n";
import { Link } from "../router";

function PostCard({ post, featured = false }: { post: PostMeta; featured?: boolean }) {
  const t = useT().blog;
  const locale = useLocale();
  return (
    <article className={`post-card${featured ? " is-featured" : ""}`}>
      <p className="post-meta">
        <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
        <span>{fill(t.minutes, { n: post.minutes })}</span>
      </p>
      <h2>
        <Link to="post" slug={post.slug}>
          {post.title}
        </Link>
      </h2>
      <p>{post.description}</p>
      {post.tags.length > 0 && (
        <ul className="post-tags">
          {post.tags.slice(0, 3).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <Link to="post" slug={post.slug} className="post-more" aria-hidden="true" tabIndex={-1}>
        {t.readMore} <Arrow />
      </Link>
    </article>
  );
}

export function BlogPage() {
  const t = useT().blog;
  const locale = useLocale();
  const posts = listPosts(locale);
  const [first, ...rest] = posts;

  return (
    <main id="icerik" tabIndex={-1}>
      <section className="hero hero-blog on-dark">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <h1>
              {t.title[0]}
              <br />
              {t.title[1]}
            </h1>
            <p>{t.lead}</p>
          </div>
        </div>
      </section>

      <div className="light-page">
        <section className="section" aria-labelledby="blog-liste-baslik">
          <div className="wrap">
            <h2 id="blog-liste-baslik" className="visually-hidden">
              {t.latest}
            </h2>
            {first ? (
              <>
                <PostCard post={first} featured />
                {rest.length > 0 && (
                  <div className="post-grid">
                    {rest.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p className="lead">{t.empty}</p>
            )}
          </div>
        </section>
      </div>

      <PageCta title={t.ctaTitle} copy={t.ctaCopy} />
    </main>
  );
}

export function PostPage({ slug }: { slug: string }) {
  const t = useT().blog;
  const locale = useLocale();
  const post = findPost(locale, slug);
  const [body, setBody] = useState<string | undefined>(() => (post ? cachedBody(post) : undefined));

  useEffect(() => {
    if (!post || body !== undefined) return;
    let cancelled = false;
    void loadBody(post).then((text) => {
      if (!cancelled) setBody(text);
    });
    return () => {
      cancelled = true;
    };
  }, [post, body]);

  if (!post) {
    return (
      <main id="icerik" tabIndex={-1} className="notfound on-dark">
        <div className="wrap">
          <h1>{t.notFound}</h1>
          <Link to="blog" className="btn btn-primary">
            {t.back} <Arrow />
          </Link>
        </div>
      </main>
    );
  }

  const others = listPosts(locale)
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main id="icerik" tabIndex={-1}>
      <article className="post">
        <header className="hero hero-post on-dark">
          <div className="wrap">
            <Link to="blog" className="post-back">
              <span aria-hidden="true">←</span> {t.back}
            </Link>
            <h1>{post.title}</h1>
            <p className="post-lead">{post.description}</p>
            <p className="post-meta">
              <span>{t.author}</span>
              <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
              <span>{fill(t.minutes, { n: post.minutes })}</span>
            </p>
          </div>
        </header>
        <div className="light-page">
          <div className="section">
            <div className="wrap post-body">
              {body !== undefined && <Markdown source={body} locale={locale} />}
              {post.tags.length > 0 && (
                <ul className="post-tags">
                  {post.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {others.length > 0 && (
            <section className="section" aria-labelledby="ilgili-baslik">
              <div className="wrap">
                <h2 id="ilgili-baslik" className="post-related-title">
                  {t.related}
                </h2>
                <div className="post-grid">
                  {others.map((item) => (
                    <PostCard key={item.slug} post={item} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </article>
      <PageCta title={t.ctaTitle} copy={t.ctaCopy} />
    </main>
  );
}
