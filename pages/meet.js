// pages/meet.js
import { useState } from 'react';

// A small component to explain the rationale behind the fee.
function WhyPay() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-2 text-center">
      <button
        className="text-xs text-gray-500 underline"
        onClick={() => setOpen(!open)}
      >
        Why Pay?
      </button>
      {open && (
        <div className="mt-1 text-xs text-gray-500">
          I get a lot of people trying to sell me stuff—whether it’s software, jobs, or even equity in my companies.
          The fee isn’t meant to extract money; it’s simply meant to introduce friction.
          This friction ensures that anyone booking a meeting really understands what I’m looking for and helps avoid wasting both our time.
          The fee is based on the friction it introduces rather than what the meeting “should” cost,
          and I may adjust it over time based on that principle.
        </div>
      )}
    </div>
  );
}

// A component that embeds the About page content on the recruiter screen.
function RecruiterAbout() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-4" style={{ color: "#3E4784" }}>About</h2>
      <div className="mb-4 border-b border-gray-200" />
      <div className="flex flex-col items-center mb-4">
        <img
          src="/carl.jpg"
          alt="Carl Cortright"
          className="rounded-lg mb-4"
          style={{ width: '300px', height: '300px' }}
        />
        <div className="flex space-x-4">
          <img src="/coinbase.png" alt="Coinbase" style={{ width: '100px', height: '40px' }} />
          <img src="/yc.png" alt="Y Combinator" style={{ width: '100px', height: '40px' }} />
        </div>
      </div>
      <div className="space-y-3 text-base text-gray-700">
        <p>
          Hi! My name is Carl, and I'm a software engineer and entrepreneur based in San Francisco, CA.
          I have over 10 years of experience in software engineering, entrepreneurship, and investing across venture-backed startups,
          scale-ups, public companies, and venture funds. I founded Thrive to pursue ideas I’m personally excited about while helping companies in my orbit.
          We are active builders and investors.
        </p>
        <p>
          I started my career at Coinbase, where I fast-tracked to Senior Software Engineer.
          I’ve written code that has moved trillions of dollars, secured hundreds of billions, and served hundreds of millions of users.
          In addition, I was the sole technical member of the Coinbase Ventures investment committee.
        </p>
        <p>
          After Coinbase, I started my own company as a technical CEO and raised $5.3M from investors.
          I have taken many products to market and consider myself a deeply technical generalist.
          I combine everything I've learned about building companies and investing into a single entity.
        </p>
        <p>
          You can read more about my professional history on my{' '}
          <a href="https://linkedin.com/in/carlcortright" target="_blank" rel="noopener noreferrer" className="text-[#3E4784] underline">
            LinkedIn
          </a>{' '}
          and{' '}
          <a href="https://github.com/carlcortright" target="_blank" rel="noopener noreferrer" className="text-[#3E4784] underline">
            Github
          </a>.
        </p>
      </div>
    </div>
  );
}

export default function Meet() {
  // Define common button classes.
  const baseButton =
    "w-full max-w-md px-4 py-3 rounded text-sm font-medium transition-colors duration-300";
  const selectionButton = `${baseButton} border border-black text-black bg-white hover:bg-[#3E4784] hover:text-white`;
  const paymentButton = `${baseButton} border border-black text-black bg-white transition-colors duration-300 hover:bg-[#3E4784] hover:text-white`;

  // Steps:
  // 'initial' – initial landing screen
  // 'calendly-carlToMe' – Calendly embed for "Carl wants to meet with me"
  // 'who' – "Who are you?" selection screen
  // 'calendly-meToCarl' – Calendly embed for friend/business/follow-up flows
  // 'recruiter' – Recruiter branch (embedded About content + deposit payment)
  // 'software' – "I'm selling you something" branch (deposit payment)
  // 'vc' – VC information branch (choose first meeting vs. cap table)
  // 'vc-first' – VC first meeting deposit payment
  // 'vc-captable' – VC returning branch (account scheduling link)
  const [step, setStep] = useState('initial');
  const [userType, setUserType] = useState(null);

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
      {/* Initial Screen */}
      {step === 'initial' && (
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold" style={{ color: "#3E4784" }}>Meet with Carl</h1>
          <div className="flex flex-col gap-4">
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
          </div>
        </div>
      )}

      {/* Calendly Embed for "Carl wants to meet with me" */}
      {step === 'calendly-carlToMe' && (
        <div className="w-full max-w-3xl">
          <h2 className="text-xl text-center mb-4">Go ahead and schedule a meeting</h2>
          <iframe
            src="https://calendly.com/your-calendly-link"
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded"
          ></iframe>
        </div>
      )}

      {/* "Who are you?" Selection */}
      {step === 'who' && (
        <div className="space-y-6 text-center">
          <h2 className="text-xl font-semibold">Who are you?</h2>
          <div className="flex flex-col gap-4">
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
          </div>
        </div>
      )}

      {/* Calendly Embed for friend/business/followup flows */}
      {step === 'calendly-meToCarl' && (
        <div className="w-full max-w-3xl">
          <h2 className="text-xl text-center mb-4">Go ahead and schedule a meeting</h2>
          <iframe
            src="https://calendly.com/your-calendly-link"
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded"
          ></iframe>
        </div>
      )}

      {/* Recruiter Branch – embedded About page plus deposit payment */}
      {step === 'recruiter' && (
        <div className="space-y-6">
          <RecruiterAbout />
          <div className="text-center space-y-2">
            <p className="text-base">
              If you're interested in scheduling a 30‑minute meeting, please proceed with a deposit of <strong>$1,000</strong>.
            </p>
            <a
              href="https://payment-link-for-recruiters.com"
              target="_blank"
              rel="noopener noreferrer"
              className={paymentButton}
            >
              Make Deposit
            </a>
            <WhyPay />
          </div>
        </div>
      )}

      {/* Software Sales Branch */}
      {step === 'software' && (
        <div className="space-y-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold">Software Sales Inquiry</h2>
            <p className="text-base text-gray-700">
              I receive many inbound inquiries trying to sell me software. If you're serious about your solution and believe it's the right fit, please note that I charge a deposit of <strong>$1,000</strong> for a 30‑minute meeting during which I will review your documentation in depth.
            </p>
            <p className="text-base text-gray-700">
              Payment confirms your genuine interest and helps ensure that only inquiries with a strong potential fit reach my calendar.
            </p>
          </div>
          <div className="text-center space-y-2">
            <a
              href="https://payment-link-for-software.com"
              target="_blank"
              rel="noopener noreferrer"
              className={paymentButton}
            >
              Make Deposit
            </a>
            <WhyPay />
          </div>
        </div>
      )}

      {/* VC Information Branch */}
      {step === 'vc' && (
        <div className="space-y-6 text-center">
          <h2 className="text-xl font-semibold">VC Information</h2>
          <div className="space-y-2">
            <p className="text-base text-gray-700">
              I have extensive experience with venture capital and fundraising. Please note that I only meet with VCs who have founded venture-backed companies – I do not meet with associates or principals.
            </p>
            <p className="text-base text-gray-700">
              For a one‑hour meeting, I charge <strong>$10,000</strong>. I will prepare thoroughly for our meeting, and I expect you to come prepared as well.
            </p>
            <p className="text-base text-gray-700">
              Please choose one of the options below:
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <button onClick={() => setStep('vc-first')} className={selectionButton}>
              This is our first meeting
            </button>
            <button onClick={() => setStep('vc-captable')} className={selectionButton}>
              You've been on my cap table before
            </button>
          </div>
        </div>
      )}

      {/* VC – First Meeting (Deposit Payment) */}
      {step === 'vc-first' && (
        <div className="space-y-6 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-base text-gray-700">
              Please proceed with a deposit for a one‑hour meeting. The deposit is <strong>$10,000</strong>. I will prepare extensively for this meeting, and I expect you to do the same.
            </p>
          </div>
          <a
            href="https://payment-link-for-vcs.com"
            target="_blank"
            rel="noopener noreferrer"
            className={paymentButton}
          >
            Make Deposit
          </a>
          <WhyPay />
        </div>
      )}

      {/* VC – Returning from Cap Table */}
      {step === 'vc-captable' && (
        <div className="space-y-6 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-base text-gray-700">
              Welcome back. Since you've been on my cap table before, you can directly access my account scheduling page.
            </p>
          </div>
          <a
            href="https://account-link-for-vcs.com"
            target="_blank"
            rel="noopener noreferrer"
            className={selectionButton}
          >
            Access Account &amp; Schedule Meeting
          </a>
        </div>
      )}
    </div>
  );
}

// https://chatgpt.com/c/67a67665-3094-8000-8b80-3aa73445d6ab
