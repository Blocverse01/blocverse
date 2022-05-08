export default function BlogPreview() {
  const articles = [
    {
      title: "Introduction to zk-rollups.",
      highlight:
        "Blockchain technology is innovative; every day, people vent into this great technology to explore its opportunities as a decentralised, secure, and scalable system. Although scalability has been a persistent issue in some blockchains like Ethereum and because of the mass adoption of the Ethereum blockchain, its developers and researchers have been experimenting with various scaling methods to improve network performance and all its inconsistencies with scalability. The Ethereum blockchain implements zk rollups as a scaling solution.",
      articleLink: "https://blog.blocverse.com/how-does-zk-rollups-work/",
      imageLink: "https://blog.blocverse.com/wp-content/uploads/2022/05/ZK-Rollups.png",
    },
    {
      title: "Defi ecosystem: Reasons it might be the future of “Finance”.",
      highlight:
        "Before DeFi, we relied on centralized bodies like the bank to keep our money, execute transactions, and so on. We often trust that these centralized bodies will not act in an unjust/biased way. By the end of the day, we keep getting disappointed as the latter is usually the case. DeFi has created a decentralized world on the blockchain that keeps you in charge of your finance, anytime, anywhere in the world.",
      articleLink: "https://blog.blocverse.com/defi-ecosystem-the-future-of-finance/",
      imageLink: "https://blog.blocverse.com/wp-content/uploads/2022/04/Understanding-DEFI.png",
    },
    {
      title: "Smart Contracts- why is it called a “smart contract”?",
      highlight:
        "Smart contracts are a big part of blockchain integration and are of the essence because human beings are not reliable. The blockchain can incorporate computerized sets of rules and mechanisms referred to as Smart Contracts. In smart contracts, you need not fear bias, as it creates a trustless system, with written sets of code programmed for execution on some conditions. They back this agreement into the blockchain, making it immutable as well as irreversible. Nick Szabo, an American computer scientist and cryptographer as far back as 1994, introduced the concept of smart contracts. But, Ethereum was the first blockchain to start smart contracts, using the Solidity programming language.",
      articleLink: "https://blog.blocverse.com/what-are-smart-contracts/",
      imageLink: "https://blog.blocverse.com/wp-content/uploads/2022/04/Smart-Contracts-min-1.png",
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
