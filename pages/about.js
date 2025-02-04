import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold mb-8">About</h2>

      <div className="mb-8 border-b border-gray-200" />

      <div className="flex flex-col items-center mb-12">
        <Image
          src="/carl.jpg"
          alt="Carl Cortright"
          width={300}
          height={300}
          className="rounded-lg mb-8"
          priority
        />
        <div className="flex space-x-12 items-center">
          <Image
            src="/coinbase.png"
            alt="Coinbase"
            width={100}
            height={40}
          />
          <Image
            src="/yc.png"
            alt="Y Combinator"
            width={100}
            height={40}
          />
        </div>
      </div>
      <div className="space-y-6 text-lg">
        <p>
          Hi! My name is Carl, and I'm a software engineer and entrepreneur based in San Francisco, CA.
          I have over 10 years of experience in software engineering, entrepreneurship, and investing across venture-backed startups,
          scale-ups, public companies, and venture funds. I founded Thrive to pursue ideas I’m personally excited about while helping companies in my orbit.
          We are active builders and investors. Thrive is part advisory and consultancy, part holding company, and part fund.
        </p>
        <p>
          I started my career at Coinbase, where I fast-tracked advanced to Senior Software Engineer. During my time there, I wore many hats,
          working in commerce, decentralized exchange, centralized exchange, and core financial infrastructure. I’ve written code that has moved trillions of dollars (yes, with a T),
          secured hundreds of billions of dollars, and served hundreds of millions of users. In addition, I was the sole technical member of the Coinbase Ventures investment committee,
          where I managed the dev tools and protocol investment areas, making approximately 40 early-stage cryptocurrency investments and contributing to hundreds more.
        </p>
        <p>
          After Coinbase, I started my own company as a technical CEO. I raised $5.3M from investors including Kindred Ventures, Matchstick, Foundry Group, Coinbase Ventures, and Chapter One.
          I led a team of 10, overseeing both engineering and go-to-market strategies. I have taken many products to market—ranging from simple SaaS applications to complex data infrastructure solutions.
          I consider myself a deeply technical generalist who understands both the business and the technical steps required to achieve company goals.
          My most recent venture before founding Thrive was a YC-backed AI company, where I served as CTO.
          I also actively invest through Thrive and currently hold stakes in approximately 30 early-stage tech startups.
        </p>
        <p>
          Thrive combines everything I've learned about building companies and investing into a single entity.
          It allows me to build software, collaborate with other entrepreneurs, and effectively deploy capital into ecosystems I believe in.
          I also write actively on my blog, which you can check out above.
        </p>
        <p>
          You can read more about my professional history on my{' '}
          <a
            href="https://linkedin.com/in/carlcortright"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            LinkedIn
          </a>.
        </p>
      </div>
    </div>
  );
}
