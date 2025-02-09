// pages/meet.js
import { useState } from 'react';
import About from './about';
import { useRouter } from 'next/router';

// Add Modal component at the top of the file
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-xl max-w-lg w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

// Update WhyPay component
function WhyPay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 text-center">
      <button
        className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
        onClick={() => setIsOpen(true)}
      >
        Why Pay?
      </button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="text-sm text-gray-600 leading-relaxed">
          <h3 className="text-lg font-semibold text-black mb-4">Why Pay?</h3>
          <p className="mb-3">
            I get a lot of people trying to sell me stuff—whether it's software, jobs, or even equity in my companies.
          </p>
          <p className="mb-3">
            The fee isn't meant to extract money; it's simply meant to introduce friction.
            This friction ensures that anyone booking a meeting really understands what I'm looking for and helps avoid wasting both our time.
          </p>
          <p>
            The fee is based on the friction it introduces rather than what the meeting "should" cost,
            and I may adjust it over time based on that principle.
          </p>
        </div>
      </Modal>
    </div>
  );
}

// A component that embeds the About page content on the recruiter screen.
function RecruiterAbout() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-black">About</h2>
      <div className="mb-4 border-b border-gray-200" />
      <div className="flex flex-col items-center mb-4">
        <img
          src="/carl.jpg"
          alt="Carl Cortright"
          className="rounded-lg mb-4 object-cover"
          width={300}
          height={300}
        />
        <div className="flex space-x-4">
          <img src="/coinbase.png" alt="Coinbase" className="h-10 object-contain" />
          <img src="/yc.png" alt="Y Combinator" className="h-10 object-contain" />
        </div>
      </div>
      <div className="space-y-3 text-base text-gray-800">
        <p>
          Hi! My name is Carl, and I'm a software engineer and entrepreneur based in San Francisco, CA.
          I have over 10 years of experience in software engineering, entrepreneurship, and investing across venture-backed startups,
          scale-ups, public companies, and venture funds. I founded Thrive to pursue ideas I'm personally excited about while helping companies in my orbit.
          We are active builders and investors.
        </p>
        <p>
          I started my career at Coinbase, where I fast-tracked to Senior Software Engineer.
          I've written code that has moved trillions of dollars, secured hundreds of billions, and served hundreds of millions of users.
          In addition, I was the sole technical member of the Coinbase Ventures investment committee.
        </p>
        <p>
          After Coinbase, I started my own company as a technical CEO and raised $5.3M from investors.
          I have taken many products to market and consider myself a deeply technical generalist.
          I combine everything I've learned about building companies and investing into a single entity.
        </p>
        <p>
          You can read more about my professional history on my{' '}
          <a href="https://linkedin.com/in/carlcortright" target="_blank" rel="noopener noreferrer" className="text-black underline">
            LinkedIn
          </a>{' '}
          and{' '}
          <a href="https://github.com/carlcortright" target="_blank" rel="noopener noreferrer" className="text-black underline">
            Github
          </a>.
        </p>
      </div>
    </div>
  );
}

// Update all Calendly embed containers with this style
const CalendlyEmbed = ({ url }) => (
  <div className="w-full flex-1 -mt-8">
    <iframe
      src={url}
      width="100%"
      height="100%"
      frameBorder="0"
      className="min-h-[calc(100vh-6rem)]"
    ></iframe>
  </div>
);

export default function Meet() {
  const router = useRouter();
  const { calendar } = router.query;

  // Update button styles
  const baseButton = 
    "w-full max-w-md px-6 py-4 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm text-center";
  const selectionButton = `${baseButton} border-2 border-black text-black bg-white hover:bg-[#3E4784] hover:text-white hover:border-[#3E4784]`;
  const nextButton = `${baseButton} border-2 border-black text-black bg-white hover:bg-[#3E4784] hover:text-white hover:border-[#3E4784] mx-auto flex items-center justify-center`;

  // Add a style for the back button
  const backButton = "mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors duration-200";

  // Update state to include a landing step
  const [step, setStep] = useState('landing');
  const [userType, setUserType] = useState(null);

  // Calendar URLs
  const CALENDAR_URLS = {
    vc: 'https://calendly.com/thrivepointgroup/vc-pitch',
    software: 'https://calendly.com/thrivepointgroup/saas-sales-pitch',
    recruiter: 'https://calendly.com/thrivepointgroup/recruiter-screen',
    default: 'https://calendly.com/thrivepointgroup/30-minute-meeting'
  };

  const handleInitialChoice = (choice) => {
    if (choice === 'carlToMe') {
      setStep('calendly-carlToMe');
    } else if (choice === 'meToCarl') {
      setStep('who');
    }
  };

  const handleUserType = (type) => {
    setUserType(type);
    if (['friend', 'business', 'followup'].includes(type)) {
      setStep('calendly-meToCarl');
    } else if (type === 'recruiter') {
      setStep('recruiter');
    } else if (type === 'software') {
      setStep('software');
    } else if (type === 'vc') {
      setStep('vc');
    }
  };

  // Add handler for payment flow
  const handleNext = () => {
    setStep('calendar');
  };

  // If calendar param is present, show Calendly embed
  if (calendar === 'true') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="w-full border-b border-gray-200 absolute top-0 left-0" />
        <div className="w-full max-w-3xl">
          <iframe
            src="https://calendly.com/your-calendly-link"
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded"
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full border-b border-gray-200 absolute top-0 left-0" />
      
      {/* Landing Screen */}
      {step === 'landing' && (
        <div className="flex flex-col items-center gap-8 w-full max-w-md">
          <h1 className="text-3xl font-medium text-black text-center">Hey there! If you landed here, let's meet.</h1>
          <button
            onClick={() => setStep('initial')}
            className={selectionButton}
          >
            Let's go
          </button>
        </div>
      )}

      {/* Initial Screen */}
      {step === 'initial' && (
        <div className="flex flex-col gap-4 w-full max-w-md">
          <button
            onClick={() => handleInitialChoice('carlToMe')}
            className={selectionButton}
          >
            Carl wants to meet with me
          </button>
          <button
            onClick={() => handleInitialChoice('meToCarl')}
            className={selectionButton}
          >
            I want to meet with Carl
          </button>
          <button 
            onClick={() => setStep('landing')} 
            className={backButton}
          >
            back
          </button>
        </div>
      )}

      {/* Calendly Embed for "Carl wants to meet with me" */}
      {step === 'calendly-carlToMe' && (
        <>
          <CalendlyEmbed url={CALENDAR_URLS.default} />
          <button 
            onClick={() => setStep('initial')} 
            className={`${backButton} text-center w-full mt-4`}
          >
            back
          </button>
        </>
      )}

      {/* "Who are you?" Selection */}
      {step === 'who' && (
        <div className="grid gap-4 w-full max-w-md mx-auto">
          <button onClick={() => handleUserType('friend')} className={selectionButton}>
            I'm a friend
          </button>
          <button onClick={() => handleUserType('business')} className={selectionButton}>
            I'm a business partner or acquaintance
          </button>
          <button onClick={() => handleUserType('followup')} className={selectionButton}>
            We've met before (follow-up)
          </button>
          <button onClick={() => handleUserType('recruiter')} className={selectionButton}>
            I'm a recruiter
          </button>
          <button onClick={() => handleUserType('software')} className={selectionButton}>
            I'm selling you something
          </button>
          <button onClick={() => handleUserType('vc')} className={selectionButton}>
            I'm a VC
          </button>
          <button 
            onClick={() => setStep('initial')} 
            className={backButton}
          >
            back
          </button>
        </div>
      )}

      {/* Calendly Embed for friend/business/followup flows */}
      {step === 'calendly-meToCarl' && (
        <>
          <CalendlyEmbed url={CALENDAR_URLS.default} />
          <button 
            onClick={() => setStep('who')} 
            className={`${backButton} text-center w-full mt-4`}
          >
            back
          </button>
        </>
      )}

      {/* Recruiter Branch */}
      {step === 'recruiter' && (
        <div className="space-y-8">
          <About />
          <div className="flex flex-col items-center space-y-4">
            <p className="text-base max-w-md text-center">
              I charge a <strong>$1,000</strong> deposit for a 30‑minute meeting. You'll be able to submit this on the next screen.
            </p>
            <button
              onClick={handleNext}
              className={nextButton}
            >
              Next
            </button>
            <WhyPay />
            <button 
              onClick={() => setStep('who')} 
              className={backButton}
            >
              back
            </button>
          </div>
        </div>
      )}

      {/* Software Sales Branch */}
      {step === 'software' && (
        <div className="space-y-8 w-full max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-800 leading-relaxed">
              I receive many inbound inquiries trying to sell me software. I charge a <strong>$1,000</strong> deposit for a 30‑minute meeting during which I will review your documentation in depth. You'll be able to submit this on the next screen.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              This deposit helps ensure that only inquiries with a strong potential fit reach my calendar.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={handleNext}
              className={nextButton}
            >
              Next
            </button>
            <WhyPay />
            <button 
              onClick={() => setStep('who')} 
              className={backButton}
            >
              back
            </button>
          </div>
        </div>
      )}

      {/* VC Information Branch */}
      {step === 'vc' && (
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
          <button onClick={() => setStep('vc-first')} className={selectionButton}>
            This is our first meeting
          </button>
          <button onClick={() => setStep('vc-captable')} className={selectionButton}>
            You've been on my cap table before
          </button>
          <button 
            onClick={() => setStep('who')} 
            className={backButton}
          >
            back
          </button>
        </div>
      )}

      {/* VC – First Meeting */}
      {step === 'vc-first' && (
        <div className="space-y-8 w-full max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-800 leading-relaxed">
              I have extensive experience with venture capital and fundraising.
            </p>
            <p className="mt-4 text-gray-800 leading-relaxed">
              I charge a <strong>$10,000</strong> deposit for a one‑hour meeting. You'll be able to submit this on the next screen. I will prepare thoroughly for our meeting, and I expect you to come prepared as well.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={handleNext}
              className={nextButton}
            >
              Next
            </button>
            <WhyPay />
            <button 
              onClick={() => setStep('vc')} 
              className={backButton}
            >
              back
            </button>
          </div>
        </div>
      )}

      {/* VC – Returning */}
      {step === 'vc-captable' && (
        <>
          <CalendlyEmbed url={CALENDAR_URLS.default} />
          <button 
            onClick={() => setStep('vc')} 
            className={`${backButton} text-center w-full mt-4`}
          >
            back
          </button>
        </>
      )}

      {/* Calendar page for all paid meetings */}
      {step === 'calendar' && (
        <>
          <CalendlyEmbed url={CALENDAR_URLS[userType] || CALENDAR_URLS.default} />
          <button 
            onClick={() => setStep(userType)} 
            className={`${backButton} text-center w-full mt-4`}
          >
            back
          </button>
        </>
      )}
    </div>
  );
}