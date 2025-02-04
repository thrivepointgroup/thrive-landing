import Image from 'next/image';
import { portfolio } from '../portfolio';

export default function Fund() {
  // Sort portfolio alphabetically by name
  const sortedPortfolio = [...portfolio].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold mb-8">Fund</h2>

      <div className="space-y-8 text-lg">
        <p>
          Thrive operates a hybrid liquid and venture fund. We invest in early stage startup companies, providing typical paticipatory check sizes through to Series A, both directly and via syndicates. We also have various proprietary liquid strategies to manage risk and optimize returns.
        </p>

        <div>
          <h3 className="text-xl font-bold mb-4">Investment Philosophy</h3>
          <p>
            Our investment process is straightforward: we focus intensely on the founders and invest in high‐beta ideas with significant upside potential. We are comfortable investing at the earliest stages if we believe in the team and their vision.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Partnership Approach</h3>
          <p className="mb-4">
            We take a hands-off approach unless needed, providing strategic guidance while letting founders drive their vision. Our role often complements larger investments by facilitating introductions, customer connections, and additional capital.
          </p>
        </div>

        <div className="space-y-4">
          <p>
            If you'd like to pitch us, please send an email to{' '}
            <a href="mailto:carl@thrivepointgroup.com" className="text-blue-600 hover:text-blue-800">
              carl@thrivepointgroup.com
            </a>{' '}
            with an overview and any relevant materials.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-2">Portfolio</h2>

        <p className="mt-2">
          All investments listed here are either direct or through syndicates. There may be investments omitted from this page.
        </p>

        <div className="my-12 border-b border-gray-200" />

        {sortedPortfolio.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPortfolio.map((company) => (
              company.website ? (
                <a
                  key={company.name}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-square relative cursor-pointer transition-shadow hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-white">
                    <div className="relative w-full h-full">
                      <Image
                        src={company.image}
                        alt={company.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
                    <h3 className="font-bold text-lg mb-1 text-white">
                      {company.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {company.description}
                    </p>
                  </div>
                </a>
              ) : (
                <div
                  key={company.name}
                  className="block aspect-square relative"
                >
                  <div className="absolute inset-0 bg-white">
                    <div className="relative w-full h-full">
                      <Image
                        src={company.image}
                        alt={company.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
                    <h3 className="font-bold text-lg mb-1 text-white">
                      {company.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {company.description}
                    </p>
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <>
            <div className="my-8 border-b border-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-bold">Portfolio Coming Soon!</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
