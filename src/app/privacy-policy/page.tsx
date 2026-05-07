import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: 'The short version',
    body: [
      'We collect what we need to run LEO, keep it safe, and tell you the truth about what we do with it. We don&apos;t sell your data. We don&apos;t use your transactions to power ads. Where the law gives you rights — to see, correct, export, or delete your data — we honor them.',
    ],
  },
  {
    heading: 'What we collect',
    body: [
      'Account data — your name, contact details, government ID, date of birth, and the verification documents required to comply with financial regulations.',
      'Transaction data — what you send, receive, spend, hold, stake, or convert through the LEO app and card.',
      'Device and usage data — the device, browser, IP address, and app interactions that help us keep your account secure and our service reliable.',
      'Support data — anything you share with us when you contact our team.',
    ],
  },
  {
    heading: 'Why we collect it',
    body: [
      'To provide the service you signed up for. To verify your identity and prevent financial crime. To process payments, transfers, and conversions across our partner network. To detect fraud, secure your account, and recover from incidents. To meet our regulatory and legal obligations. To improve LEO over time.',
      'We do not use your transaction or balance data to target advertising. Period.',
    ],
  },
  {
    heading: 'Who we share it with',
    body: [
      'Our card issuer and banking partners, so your card and accounts work. Identity verification, fraud prevention, and KYC providers. Cloud and infrastructure providers that store and process data on our behalf under strict contractual safeguards. Regulators, auditors, and law enforcement where the law requires.',
      'A current list of major sub-processors is available on request at privacy@leo.finance.',
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      'For as long as you have a LEO account, plus the period that financial-services law requires us to retain records after closure (typically five to seven years, depending on jurisdiction). We delete or anonymize what we no longer need.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'Depending on where you live, you may have the right to access, correct, port, restrict the processing of, or delete your personal data — and to object to certain uses. To exercise any of these, email privacy@leo.finance and we&apos;ll respond inside the timeframes the law allows. You can also reach a supervisory authority in your country.',
    ],
  },
  {
    heading: 'Security',
    body: [
      'Your data is encrypted in transit and at rest. Sensitive credentials are held in hardware-backed secure enclaves. We run continuous monitoring, regular penetration tests, and a bug bounty program. No system is perfect — but we treat security as a craft, not a checkbox.',
    ],
  },
  {
    heading: 'Children',
    body: [
      'LEO is not for anyone under 18. We don&apos;t knowingly collect data from minors. If you believe we have, please email privacy@leo.finance and we&apos;ll delete it.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'We&apos;ll post any updates here with a fresh effective date and, when the change is material, notify you directly through the app or by email.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      'Privacy questions, requests, or complaints: privacy@leo.finance. We answer every one.',
    ],
  },
];

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="bg-[#0a1527] min-h-screen overflow-x-hidden">
      <NavBar />

      <section className="relative pt-16 sm:pt-20">
        <div className="leo-reveal relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-24 pb-12">
          <p className="font-display text-xs font-medium tracking-[0.28em] uppercase text-[#B8C8E2] mb-[22px]">
            Your data, your terms
          </p>
          <h1 className="font-display font-bold text-[clamp(36px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-white m-0 mb-4">
            PRIVACY <em className="not-italic text-cyan-300">POLICY</em>
          </h1>
          <p className="font-mono text-xs md:text-sm text-cyan-300 mb-2">
            Effective: May 15, 2026 · Last updated: May 15, 2026
          </p>
          <p className="text-[15px] leading-[1.6] text-fg-3 max-w-2xl">
            We hold your money. We don&apos;t hold the right to surprise you. Here&apos;s
            exactly what we collect, why, and what control you have over it.
          </p>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32 bg-[#0a1527]">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="space-y-10">
            {SECTIONS.map((s, i) => (
              <div
                key={s.heading}
                className="leo-reveal"
                style={{ ['--d' as any]: `${i * 60}ms` }}
              >
                <h2 className="font-display font-semibold text-xl md:text-2xl text-white tracking-[-0.01em] mb-4">
                  {s.heading}
                </h2>
                <div className="space-y-4 text-[15px] md:text-base leading-[1.7] text-fg-2">
                  {s.body.map((p, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
