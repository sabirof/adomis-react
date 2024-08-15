import { useTranslation } from 'react-i18next';

import { createClient } from 'contentful';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NewsPage = ({  }) => {
  const { t } = useTranslation('common');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
      });

      try {
        const res = await client.getEntries({ content_type: 'post',  order: '-sys.createdAt' });
        setPosts(res.items.map(item => ({
          sys: { id: item.sys.id },
          fields: {
            title: item.fields.title,
            excerpt: item.fields.excerpt,
            slug: item.fields.slug,
            coverImage: item.fields.coverImage || null
          }
        })));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-8">{t('news.title')}</h2>
      <div className="blog-posts-container">
        {posts.map((post) => (
          <Link 
            key={post.sys.id}
            to={`/news/${post.fields.slug}`}
          >
            <div className="block overflow-hidden blog-post-preview">
              <img
                src={post.fields.coverImage ? `https:${post.fields.coverImage.fields.file.url}` : '/images/default-image.png'}
                alt={post.fields.title}
                width={300}
                height={200}
                className="object-cover"
              />
              <div className="blog-post-preview-content">
                <h3 className="blog-post-title">{post.fields.title}</h3>
                <p className="blog-post-excerpt">{post.fields.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};



/*export const getStaticProps = async ({ locale }) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const response = await client.getEntries({ content_type: 'post' }); // Keep the content type as 'post'
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        posts: response.items,
        revalidate: 60,
      },
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        posts: [],
      },
    };
  }
};*/
export default NewsPage;
