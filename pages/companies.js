import Image from 'next/image';
import { projects } from '../projects';

export default function Companies() {
  // Sort projects alphabetically by name
  const sortedCompanies = [...projects].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Companies</h1>

      <div className="space-y-6 text-lg">
        <p>
          We work on specific SaaS and crypto based companies on a rolling basis with the goal of revenue generation and profitability.
        </p>
      </div>

      <div className="my-12 border-b border-gray-200" />

      {sortedCompanies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {sortedCompanies.map((company) => (
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
                    className="object-contain p-4"
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
          ))}
        </div>
      ) : (
        <>
          <div className="my-8 border-b border-gray-200" />
          <div className="text-center">
            <p className="text-2xl font-bold">Companies Coming Soon!</p>
          </div>
        </>
      )}
    </div>
  );
}
