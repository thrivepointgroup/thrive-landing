export default function ConsultingAndAdvisory() {
    const services = [
    {
        title: "Entrepreneurial Advisory",
        description: "A comprehensive advisory service that leverages our extensive entrepreneurial experience. We help startups navigate early-stage challenges, refine their business models, and execute strategies that drive sustainable growth.",
      },
      {
        title: "CTO as a Service",
        description:
          "A longer-term embedded role where we step in as acting CTO to build out the initial version of your product and help hire the technical team to drive it forward. This service is perfect for companies needing strategic leadership without the commitment of a full-time executive.",
      },
      {
        title: "Product and GTM Strategy",
        description:
          "Bespoke product strategy and go-to-market advisory to accelerate your business growth.",
      },
      {
        title: "Project Based Consulting & Advisory",
        description:
          "Ideal for fixed-term projects and experiments. Engagements typically span 2-6 weeks depending on the scope. We often start with a brief complimentary period, allowing teams to experience our approach before transitioning to our top-rate pricing.",
      },
      
    ];
  
    return (
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold mb-8">Consulting and Advisory</h2>
  
        <div className="mb-8 border-b border-gray-200" />
  
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Value Add</h2>
          <p className="text-lg mb-4">
            Our primary value is in shipping high-quality, production-ready software rapidly while providing expert advisory. We are technology agnostic and work with any tech stack or architecture, delivering robust code and strategic insights that empower your team.
          </p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Philosophy</h2>
          <p className="text-lg mb-4">
            With over 10 years of experience in building and managing software products, we've witnessed many consulting arrangements. We know that the wrong engagement can hurt rather than help a company, so we choose our projects carefully to ensure we deliver real value without compromising your core technology.
          </p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.title} className="border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <p className="text-lg">
            We charge top rate pricing for our consulting and advisory services, tailored to the complexity and scope of your project. Often, we begin engagements with a brief complimentary period so that you can experience our approach before transitioning to our standard rates. Additionally, we structure deals in various ways—including cash-only, equity-only, or hybrid arrangements—depending on the unique needs of each engagement.
          </p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-lg mb-6">
            For consulting and advisory inquiries, please email{' '}
            <a href="mailto:carl@thrivepointgroup.com" className="text-blue-600 hover:text-blue-800">
              carl@thrivepointgroup.com
            </a>.
          </p>
        </section>
      </div>
    );
  }
  