import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { t } = useTranslation(['common', 'project']);
  const [initialPosts, setInitialPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
      });

      try {
        const res = await client.getEntries({ content_type: 'post', limit: 3, order: '-sys.createdAt' });
        setInitialPosts(res.items.map(item => ({
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
    <section className="py-20 w-full">
      <div className="pt-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full flex flex-col items-center md:flex-row md:items-start md:justify-center mb-16 p-8 bg-gray-50 shadow-md rounded-md">
            <div className="flex-none mb-8 md:mb-0 md:mr-8">
              <img src="/images/logo3.png" alt="Logo" width={300} height={300} className="object-contain" />
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">{t('home.title')}</h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
                {t('home.content')}
              </p>
              <Link to="/about">
                <button className="bg-secondary text-white px-3 py-2 text-sm rounded-md transition duration-200 hover:bg-green-400 focus:outline-none">
                  {t('navbar.about')}
                </button>
              </Link>
            </div>
          </div>

          <div className="text-left p-8 bg-gray-50 shadow-md rounded-md">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold text-primary mr-2">{t('common:latestNews')}</h3>
              <Link to="/news">
                <svg className="w-6 h-6 text-primary cursor-pointer hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="blog-posts-container">
              {initialPosts.map(post => (
                <div key={post.sys.id} className="bg-white rounded-lg shadow-md overflow-hidden blog-post-preview">
                  <Link to={`/news/${post.fields.slug}`}>
                    <div className="block h-full">
                      <div className="relative w-full h-64">
                        <img
                          src={post.fields.coverImage ? `https:${post.fields.coverImage.fields.file.url}` : '/images/default-image.png'}
                          alt={post.fields.title}
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex flex-col justify-between h-32 blog-post-preview-content">
                        <h4 className="text-lg font-bold mb-2 blog-post-title">{post.fields.title}</h4>
                        <p className="text-gray-600 blog-post-excerpt">{post.fields.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
