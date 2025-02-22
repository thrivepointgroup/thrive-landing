import React from 'react';

const Will = () => {
  const testator = {
    name: "Carl Cortright",
    address: "340 Fremont Street, San Francisco CA",
    partner: "Kristin Bryant",
    alternateExecutor: "Amy Krohn",
    date: "30 day of January, 2025",
    location: "San Francisco CA"
  };

  const Section = ({ number, title, children }) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{number}. {title}</h2>
      {children}
    </div>
  );

  const Subsection = ({ number, children }) => (
    <div className="mb-4 pl-4">
      <p><strong>{number}</strong> {children}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-8 py-12 font-serif leading-relaxed">
      <h1 className="text-3xl text-center mb-8 font-bold">
        LAST WILL AND TESTAMENT OF {testator.name.toUpperCase()}
      </h1>
      
      <div className="mb-8">
        <p>
          I, {testator.name}, residing at {testator.address}, being of sound mind and memory, 
          do hereby declare this to be my Last Will and Testament. I revoke all wills and 
          codicils previously made by me.
        </p>
      </div>

      <Section number="1" title="Marital / Domestic Partnership Status & Family">
        <Subsection number="1.1">
          I am currently in a domestic partnership with {testator.partner}.
        </Subsection>
        <Subsection number="1.2">
          I wish to make no specific provisions for any children (whether mine, ours, or otherwise) 
          in this Will, leaving the entire disposition of my estate to my partner, {testator.partner}, 
          who shall have sole discretion to manage or distribute assets for the benefit of any 
          children if she so chooses.
        </Subsection>
      </Section>

      <Section number="2" title="Executor">
        <Subsection number="2.1">
          I nominate and appoint {testator.partner} as Executor (also called Personal Representative) 
          of this Will.
        </Subsection>
        <Subsection number="2.2">
          If {testator.partner} is unable or unwilling to serve, I nominate {testator.alternateExecutor} 
          as the alternate Executor.
        </Subsection>
        <Subsection number="2.3">
          My Executor shall serve without bond in the State of California.
        </Subsection>
      </Section>

      <Section number="3" title="Disposition of Assets">
        <Subsection number="3.1">
          Primary Beneficiary: I give, devise, and bequeath all of my property (real, personal, tangible, and intangible) 
          to my partner, {testator.partner}, provided she survives me by at least thirty (30) days.
        </Subsection>
        <Subsection number="3.2">
          Partner's Discretion Over Children: I expressly intend that my partner shall have complete and final discretion 
          regarding any children—whether born before or after the execution of this Will, or children she currently has—concerning 
          how or if any portion of my estate is used for their benefit. This includes the right to disclaim, gift, or otherwise 
          allocate assets to such children as she alone decides.
        </Subsection>
        <Subsection number="3.3">
          Disclaimer Provision: If my partner disclaims or refuses any portion of this inheritance, that disclaimed portion 
          shall pass to {testator.alternateExecutor}.
        </Subsection>
        <Subsection number="3.4">
          Contingent Beneficiary: If my partner does not survive me by thirty (30) days, or if she predeceases me, then I give, 
          devise, and bequeath all of my property to {testator.alternateExecutor}, per stirpes, subject to applicable California laws.
        </Subsection>
      </Section>

      <Section number="4" title="Guardian for Minor Children (If Needed)">
        <Subsection number="4.1">
          I acknowledge that my partner, {testator.partner}, shall have sole guardianship or custody rights regarding any minor 
          children if legally permissible. I do not intend for this Will to interfere with any guardianship rights my partner 
          may have under California law.
        </Subsection>
      </Section>

      <Section number="5" title="Powers of the Executor">
        <Subsection number="5.1">
          My Executor shall have all powers conferred by California law, including (but not limited to) the power to sell, 
          lease, invest, and manage my real and personal property without court order.
        </Subsection>
        <Subsection number="5.2">
          My Executor shall pay all legally enforceable debts, funeral expenses, and administration expenses from my estate 
          as promptly as possible.
        </Subsection>
      </Section>

      <Section number="6" title="Simultaneous Death">
        <Subsection number="6.1">
          If my partner and I die simultaneously or under circumstances such that it is impossible to determine who survived 
          the other, I direct that my partner be deemed to have predeceased me for purposes of distributing my estate under this Will.
        </Subsection>
      </Section>

      <Section number="7" title="No Contest Clause">
        <Subsection number="7.1">
          If any beneficiary or heir-at-law shall contest or attack this Will, directly or indirectly, any share or interest 
          in my estate given to that person under this Will is revoked and shall pass as though that person predeceased me without issue.
        </Subsection>
      </Section>

      <Section number="8" title="Governing Law">
        <Subsection number="8.1">
          This Will shall be governed by the laws of the State of California.
        </Subsection>
      </Section>

      <Section number="9" title="Severability">
        <Subsection number="9.1">
          If any provision of this Will is held invalid, such invalidity shall not affect the remaining provisions, which 
          shall remain in full force and effect.
        </Subsection>
      </Section>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">10. Testamentary Intent & Signature</h2>
        <p>
          Signed with my private keys as attestation of the validity of this document
        </p>
      </div>
    </div>
  );
};

export default Will;