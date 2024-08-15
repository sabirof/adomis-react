import PostBody from '../../components/news/PostBody';
import PostHeader from '../../components/news/PostHeader';
/*import PreviewAlert from '../../components/ui/PreviewAlert';*/
import Skeleton from '../../components/ui/Skeleton'; 
import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const PostPage = ({  }) => {
  const {slug} = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
      });
      setLoading(true);
      try {
        const res = await client.getEntries({ content_type: 'post',  'fields.slug': slug, });
        if (res.items.length>0){
          setPost(res.items[0])
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

 console.log(post);
  return (
    <section className="section">
    
      <div className="container">
        <article className="prose mx-auto">
          {loading || !post ? (
            <Skeleton />
          ) : (
            <>
              <PostHeader post={post} />
              <PostBody post={post} />
            </>
          )}
        </article>
      </div>
    </section>
  );
};

export default PostPage