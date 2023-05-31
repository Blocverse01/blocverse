import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BlogPreview() {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://blog.blocverse.com/wp-json/wp/v2/posts', {
      params: {
        per_page: 3,
        orderby: 'date',
        order: 'desc',
      },
    });
        const newArticles = response.data.map((post) => ({
          title: post.yoast_head_json.title,
          highlight: post.yoast_head_json.description,
          articleLink: post.link,
          imageLink: post.yoast_head_json.og_image[0].url, // Adjust the property name according to your WordPress setup
        }));
        setArticles(newArticles);
      } catch (error) {
        console.error(error);
       
      }
    };

    
  
    // Fetch initial articles
    fetchArticles();
  
    // Set up interval to fetch new articles every 1 minute (adjust as needed)
    const interval = setInterval(fetchArticles, 2880000);
  
    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);
  


  return (
    <section>
      <h3 className="project-title mb-[35px]">Blog Articles</h3>
      <div className="grid grid-cols-1 gap-[43px] lg:gap-[32px]">
        {articles.map((article, index) => (
          <div key={index} className="grid grid-cols-1 gap-[20px] lg:gap-[43px] place-items-center md:grid-cols-2">
            <div data-aos="fade-right">
              <img src={article.imageLink} alt={article.title} />
            </div>
            <div data-aos="fade-left">
              <h3 className="lg:leading-[41.66px] capitalize mb-5 lg:text-[32px] text-[20px] leading-[26.04px]">
                {article.title.toLowerCase()}
              </h3>
              <p className="text-[16px] lg:text-[24px] lg:leading-[33.25px] leading-[20.83px]">
                <span className="line-clamp-3 text-slate-800" dangerouslySetInnerHTML={{ __html: article.highlight }}></span>
                <a className="underline text-brand-blue" href={article.articleLink}>
                  Read More
                </a>{" "}
                👉
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <a
          href="https://blog.blocverse.com"
          className="lg:text-[48px] text-brand-blue underline text-[24px] leading-[31.25px] font-bold lg:leading-[62.5px]"
        >
          View All
        </a>
      </div>
    </section>
  );
  
}
