import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: 'Welcome to the LEO Card',
    body: [
      'These Card Terms describe how your LEO Card works, what it costs, and what we ask of you in return for using it. We&apos;ve written them in plain language wherever the law lets us. The legalese is here too — but the spirit is simple: use the card responsibly, and we&apos;ll keep it useful, fast, and safe.',
    ],
  },
  {
    heading: 'What this card is',
    body: [
      'The LEO Card is a payment card linked to your LEO Account. It works wherever Visa is accepted — online, in stores, and at ATMs in supported regions. You can fund spending from your fiat balance or, where enabled, from a crypto balance you choose to convert at the point of sale.',
      'The card is issued by our partner bank under license from the card network. LEO is the technology provider that connects you, the card, your balances, and our partners.',
    ],
  },
  {
    heading: 'Fees you should know about',
    body: [
      'Standard purchases carry no interest and no annual fee. Foreign exchange and cross-border transactions may carry a fee of up to 3% of the transaction amount. Late payments and returned payments may incur a fee of up to $40. Any change to fees will be disclosed in advance through the app.',
      'A current fee schedule is always available inside the LEO app and will reflect the most up-to-date amounts.',
    ],
  },
  {
    heading: 'Your account, your responsibility',
    body: [
      'Keep your login credentials and your card details private. Notify us immediately if you suspect your card has been lost, stolen, or used without your permission. We&apos;ll work fast to lock it, investigate, and return any funds you&apos;re entitled to under applicable law.',
      'Don&apos;t use the card for anything illegal. A non-exhaustive list of what we don&apos;t allow lives at our Prohibited Activities page.',
    ],
  },
  {
    heading: 'Privacy and data',
    body: [
      'Information about how we collect, use, and protect your data lives in our Privacy Policy. By using the card, you consent to that policy and to us sharing transaction data with our partners only as needed to deliver the service.',
    ],
  },
  {
    heading: 'Changes to these terms',
    body: [
      'We may update these Card Terms over time. When we do, we&apos;ll post the new version with a fresh effective date and, where the law requires, notify you in advance. Continuing to use the card after a change means you accept the updated terms.',
    ],
  },
  {
    heading: 'Disputes',
    body: [
      'Most issues are easier to resolve through a quick chat — reach us in-app or at hello@leo.finance. If we can&apos;t work it out, the agreement provides for binding arbitration as the default path, except where prohibited by law. You retain your rights to small-claims court and to opt out of arbitration within thirty days of opening your account by emailing the address above.',
    ],
  },
  {
    heading: 'Need help?',
    body: [
      'You can reach the LEO team any time at hello@leo.finance. We answer fast. We answer human.',
    ],
  },
];

const CardTermsPage: React.FC = () => {
  return (
    <main className="bg-[#0a1527] min-h-screen overflow-x-hidden">
      <NavBar />

      {/* Hero */}
      <section className="relative pt-16 sm:pt-20">
        <div className="leo-reveal relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-24 pb-12">
          <p className="font-display text-xs font-medium tracking-[0.28em] uppercase text-[#B8C8E2] mb-[22px]">
            Plain talk, real terms
          </p>
          <h1 className="font-display font-bold text-[clamp(36px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-white m-0 mb-4">
            LEO CARD <em className="not-italic text-cyan-300">TERMS</em>
          </h1>
          <p className="font-mono text-xs md:text-sm text-cyan-300 mb-2">
            Effective: May 15, 2026 · Last updated: May 15, 2026
          </p>
          <p className="text-[15px] leading-[1.6] text-fg-3 max-w-2xl">
            Quick read for the people who actually want to know what they&apos;re signing up
            for. The full agreement controls — but we promise nothing here is hidden.
          </p>
        </div>
      </section>

      {/* Body */}
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

export default CardTermsPage;
