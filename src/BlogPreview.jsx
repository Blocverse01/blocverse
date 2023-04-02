export default function BlogPreview() {
  const articles = [
    {
      title: "ETHEREUM ERC-4337 STANDARD",
      highlight:
        "The Ethereum mainnet has recently implemented the ERC-4337 standard to enable account abstraction, fulfilling a long-standing objective. It was initially proposed in 2021 as EIP-4337 and only authorised as ERC-4337 in 2023.",
      articleLink: "https://blog.blocverse.com/ethereum-erc-4337-standard/",
      imageLink: "https://blog.blocverse.com/wp-content/uploads/2023/04/ERC-4337-Cover.png",
    },
    {
      title: "ARCHIMEDES FINANCE",
      highlight:
        "Archimedes is a decentralised lending and borrowing marketplace that allows investors to deposit assets and use them as collateral to create leverage positions in other to borrow a stablecoin, lvUSD.",
      articleLink: "https://blog.blocverse.com/dapp-review-archimedes/",
      imageLink: "https://blog.blocverse.com/wp-content/uploads/2023/03/Archimedes-2048x1103.png",
    },
    {
      title: "RADIANT CAPITAL – THE OMNICHAIN MONEY MARKET",
      highlight:
        "Radiant capital is an omnichain  money market solution that operates across multiple blockchain networks, allowing users to borrow and earn interest on various cryptocurrencies and digital assets.",
      articleLink: "https://blog.blocverse.com/radiant-capital-the-omnichain-money-market/",
      imageLink: "https://blog.blocverse.com/wp-content/uploads/2023/03/Radiant-2048x1103.png",
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
