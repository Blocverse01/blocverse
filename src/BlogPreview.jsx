export default function BlogPreview() {
  const articles = [
    {
      title: "ERCs AND EIPs EXPLAINED",
      highlight:
        "Did you know that despite the size of the Ethereum blockchain, even you can modify the system to redesign areas that you believe require modifications? Decentralised applications (dApps), particularly those for banking, continue to run on Ethereum (ETH), the most popular platform (DeFis). As a result, every change made to its programming will likely impact the cryptocurrency experiences of millions of users.",
      articleLink: "https://blog.blocverse.com/ercs-and-eips-explained/",
      imageLink: "https://blog.blocverse.com/wp-content/uploads/2023/01/Cover.png",
    },
    {
      title: "HOW BLOCKCHAIN AND ARTIFICIAL INTELLIGENCE ARE REVOLUTIONIZING THE FUTURE”.",
      highlight:
        "Do you realize how remarkable the fusion of AI and Blockchain technology is? So naturally, this refers to finding a solution to some global issues, such as the health sector’s flaws and the few restrictions each system has on its operations.",
      articleLink: "https://blog.blocverse.com/how-blockchain-and-artificial-intelligence-are-revolutionizing-the-future/",
      imageLink: "https://blog.blocverse.com/wp-content/uploads/2023/02/Blockchain-and-AI-cover.png",
    },
    {
      title: "Dapp Review on SKiff",
      highlight:
        "SKiff Email is a secure and reliable email service provider, powered by blockchain technology.",
      articleLink: "https://blog.blocverse.com/dapp-review-skiff/",
      imageLink: "https://blog.blocverse.com/wp-content/uploads/2023/02/Frame-15.png",
    },
  ];

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
                <span className="line-clamp-3 text-slate-800">{article.highlight}</span>
                <a className="text-brand-blue underline" href={article.articleLink}>
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
