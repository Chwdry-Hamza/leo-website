import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const CATEGORIES: { heading: string; items: string[] }[] = [
  {
    heading: 'Illegal activity',
    items: [
      'Anything that breaks the law in your jurisdiction or ours.',
      'Money laundering, terrorist financing, or sanctions evasion of any kind.',
      'Tax evasion or knowingly facilitating it for someone else.',
    ],
  },
  {
    heading: 'Fraud and deception',
    items: [
      'Identity theft, account takeover, or impersonation.',
      'Chargeback fraud, friendly fraud, or transaction laundering.',
      'Phishing, social engineering, or any scheme designed to trick another LEO user.',
    ],
  },
  {
    heading: 'High-risk and restricted goods',
    items: [
      'Unlicensed firearms, ammunition, weapons, or weapon parts.',
      'Controlled substances, prescription drugs without authorization, or counterfeit pharmaceuticals.',
      'Counterfeit goods, stolen property, or items in violation of intellectual property rights.',
      'Adult content, escort services, or any sexual services involving minors.',
    ],
  },
  {
    heading: 'Gambling and unregulated finance',
    items: [
      'Unlicensed gambling, betting, or lottery operations.',
      'Unregistered securities, ICOs, or investment schemes that target retail buyers without disclosures.',
      'Pyramid schemes, multi-level marketing, or guaranteed-return programs.',
    ],
  },
  {
    heading: 'Crypto-specific abuse',
    items: [
      'Mixers, tumblers, or services designed primarily to obscure the source of funds.',
      'Wallets associated with sanctioned addresses or known illicit actors.',
      'Pump-and-dump schemes or coordinated market manipulation.',
    ],
  },
  {
    heading: 'Platform abuse',
    items: [
      'Reverse-engineering, scraping, or attacking the LEO platform or its APIs.',
      'Operating multiple accounts to evade limits, sanctions, or moderation.',
      'Reselling LEO services, products, or card access without our written permission.',
    ],
  },
];

const ProhibitedActivitiesPage: React.FC = () => {
  return (
    <main className="bg-[#0a1527] min-h-screen overflow-x-hidden">
      <NavBar />

      <section className="relative pt-16 sm:pt-20">
        <div className="leo-reveal relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-24 pb-12">
          <p className="font-display text-xs font-medium tracking-[0.28em] uppercase text-[#B8C8E2] mb-[22px]">
            Where we draw the line
          </p>
          <h1 className="font-display font-bold text-[clamp(36px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-white m-0 mb-4">
            PROHIBITED <em className="not-italic text-cyan-300">ACTIVITIES</em>
          </h1>
          <p className="text-[15px] leading-[1.6] text-fg-3 max-w-2xl">
            LEO is built on trust. The list below is what we will not knowingly support
            — at any time, in any market, for any user. Breaking these rules can result
            in account suspension, frozen funds, and reports to the appropriate
            authorities.
          </p>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32 bg-[#0a1527]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="space-y-10">
            {CATEGORIES.map((c, i) => (
              <div
                key={c.heading}
                className="leo-reveal"
                style={{ ['--d' as any]: `${i * 60}ms` }}
              >
                <h2 className="font-display font-semibold text-xl md:text-2xl text-white tracking-[-0.01em] mb-4">
                  {c.heading}
                </h2>
                <ul className="space-y-3 text-[15px] md:text-base leading-[1.7] text-fg-2">
                  {c.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="shrink-0 mt-[10px] w-1.5 h-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="leo-reveal mt-14 p-6 md:p-8 rounded-2xl border border-[rgba(111,227,255,0.18)] bg-[rgba(111,227,255,0.04)]">
            <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-2">
              See something off?
            </h3>
            <p className="text-[15px] leading-[1.6] text-fg-2">
              Tell us. Email{' '}
              <a href="mailto:trust@leo.finance" className="text-cyan-300 hover:underline">
                trust@leo.finance
              </a>{' '}
              or report directly inside the app. Reports stay confidential, and we follow
              up on every one.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProhibitedActivitiesPage;
