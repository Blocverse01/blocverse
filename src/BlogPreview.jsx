export default function BlogPreview() {
  const articles = [
    {
      title: "Blockchain Technology: A dive into the 3 main types.",
      highlight:
        "Blockchain technology as we know it is fast growing. Every day, several technologists come up with different ideas to make it more efficient and carry out its design’s sole purpose.Over the years, Blockchain has shown strength, speed, transparency, security, immutability, and decentralization.",
      articleLink: "https://blog.blocverse.com/blockchain-technology-types/",
      imageLink:
        "https://blog.blocverse.com/wp-content/uploads/2022/03/Artboard-1-7-1024x614.png",
    },
    {
      title: "Polygon: Ethereum’s Internet Of Blockchains",
      highlight:
        "Polygon is a layer 2 scaling solution for ethereum blockchain, It is built on top of ethereum making it a layer 2 blockchain. Polygon act as plasma enabled sidechains to ethereum.",
      articleLink:
        "https://blog.blocverse.com/polygon-ethereums-internet-of-blockchains/",
      imageLink:
        "https://blog.blocverse.com/wp-content/uploads/2022/03/Artboard-1-copy-4-1-1024x614.png",
    },
    {
      title: "LAYER 1 AND LAYER 2 BLOCKCHAIN",
      highlight:
        "Due to the steady increasing amount of nodes on the blockchain, layer 1 seams to be falling short. Blockchains like bitcoin processes over 5TPS and ethereum, 15TPS (transactions per second) amongst many others. Therefore this makes them not scalable enough to accommodate the steady growing amount of nodes on the blockchain.",
      articleLink: "https://blog.blocverse.com/layer-1-and-layer-2-blockchain/",
      imageLink:
        "https://blog.blocverse.com/wp-content/uploads/2022/03/L1L2-1392x835.png",
    },
  ];

  return (
    <section>
      <h3 className="project-title mb-[35px]">Blog Articles</h3>
      <div className="grid grid-cols-1 gap-[43px] lg:gap-[32px]">
        {articles.map((article) => (
          <div className="grid grid-cols-1 gap-[20px] lg:gap-[43px] place-items-center md:grid-cols-2">
            <div data-aos="fade-right">
              <img src={article.imageLink} alt={article.title} />
            </div>
            <div data-aos="fade-left">
              <h3 className="lg:leading-[41.66px] capitalize mb-5 lg:text-[32px] text-[20px] leading-[26.04px]">
                {article.title.toLowerCase()}
              </h3>
              <p className="text-[16px] lg:text-[24px] lg:leading-[33.25px] leading-[20.83px]">
                <div className="line-clamp-3 text-slate-800">
                  {article.highlight}
                </div>
                <a
                  className="text-brand-blue underline"
                  href={article.articleLink}
                >
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
