import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

type TeamMember = {
  photo: string;
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
};

const TEAM: TeamMember[] = [
  {
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    firstName: 'ARIA',
    lastName: 'SINCLAIR',
    role: 'CHIEF EXECUTIVE OFFICER & FOUNDER',
    bio:
      'Two decades architecting modern banking — from neobank launches in three continents to digital transformation at top-tier institutions. Aria founded LEO with a single conviction: money should move at the speed of life, not the speed of legacy systems.',
  },
  {
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face',
    firstName: 'MARCUS',
    lastName: 'CHEN',
    role: 'CHIEF TECHNOLOGY OFFICER',
    bio:
      'Built the rails behind some of the most-used fintech platforms of the last decade. Marcus leads the engineering org with one rule: ship boring infrastructure so the product can be magical. Holds patents in distributed ledger architecture and real-time settlement.',
  },
  {
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    firstName: 'ELENA',
    lastName: 'VASQUEZ',
    role: 'CHIEF OPERATING OFFICER',
    bio:
      'Operator-by-trade with twenty years across global banks, big-four consulting, and two scale-up exits. Elena turns chaos into systems and systems into outcomes. ACCA, CFA, and a quiet obsession with operational excellence.',
  },
  {
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face',
    firstName: 'PRIYA',
    lastName: 'SHARMA',
    role: 'CHIEF COMPLIANCE & MLRO',
    bio:
      'Spent a decade hardening anti-financial-crime programs across fintechs and challenger banks. Priya designs compliance that is rigorous, but also human — because regulation should never be a wall between people and their money.',
  },
  {
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    firstName: 'JORDAN',
    lastName: 'RIVERS',
    role: 'VP CUSTOMER & FINANCIAL CRIME OPS',
    bio:
      'Ex-Revolut, ex-Google. Jordan scales support orgs that feel less like call centers and more like trusted concierge. Built the ops backbone that lets LEO move fast without ever dropping the ball on a customer.',
  },
  {
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    firstName: 'THEO',
    lastName: 'NAKAMURA',
    role: 'CHIEF MARKETING OFFICER',
    bio:
      'Ten years bringing crypto, fintech, and consumer brands to mainstream audiences across four continents. Theo believes great marketing is just product truth, told well — and he tells it well.',
  },
];

const PARTNERS = [
  'BitGo',
  'FENIGE',
  'INTERCOM',
  'PLAID',
  'QUICKO',
  'onfido',
  'Verestro',
  'YAPILY',
  'BINARYX',
];

const AboutPage: React.FC = () => {
  return (
    <main className="bg-[#0a1527] min-h-screen overflow-x-hidden">
      <NavBar />

      {/* Hero / About header */}
      <section className="relative pt-16 sm:pt-20 overflow-hidden">
        {/* Cyan glow behind the LEO watermark */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center"
        >
          <div className="w-[80%] h-[70%] blur-[80px] animate-leo-hero-glow bg-[radial-gradient(ellipse_at_center,rgba(111,227,255,0.45)_0%,rgba(111,227,255,0.18)_35%,transparent_65%)]" />
        </div>

        {/* Massive LEO watermark — sits in the background, behind the content */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]"
        >
          <div
            className="font-display text-cyan-300/[0.08] font-bold leading-none select-none tracking-tighter whitespace-nowrap text-center"
            style={{ fontSize: 'clamp(8rem, 30vw, 28rem)' }}
          >
            LEO
          </div>
        </div>

        {/* Content — stacked on top of the LEO watermark */}
        <div className="leo-reveal relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 md:pt-32 pb-16 md:pb-40">
          <p className="font-display text-xs font-medium tracking-[0.28em] uppercase text-[#B8C8E2] mb-[22px]">
            BUILT IN BROOKLYN, USED EVERYWHERE
          </p>
          <h1 className="font-display font-bold text-[clamp(40px,5.2vw,68px)] leading-[1.05] tracking-[-0.02em] text-white m-0 mb-6">
            ABOUT <em className="not-italic text-cyan-300">LEO</em>
          </h1>
          <div className="max-w-2xl">
            <p className="text-[15px] md:text-[17px] leading-[1.6] text-fg-2">
              LEO is a global money platform where fiat and crypto live side by side.
              Link every account you own, hold the world&apos;s first card that flips
              between dollars and digital assets in a single tap, and earn while you
              sleep — all from one quietly beautiful app. Bank-grade compliance,
              consumer-grade joy. We&apos;re building the financial backbone for the
              way people actually live now.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative pb-16 md:pb-32 bg-[#0a1527]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
            <div className="leo-reveal">
              <h2 className="font-display font-bold text-[clamp(28px,3.4vw,48px)] leading-[1.05] tracking-[-0.02em] mb-5 md:mb-8 text-cyan-300">
                MISSION
              </h2>
              <p className="text-[15px] md:text-base leading-[1.6] text-fg-2">
                Erase the line between fiat and crypto. Give every person — wherever they
                are, whatever currency they hold — one app that respects their time,
                their privacy, and their money. We&apos;re not building a bank. We&apos;re
                building the calm that comes from knowing every move is on the same rails.
              </p>
            </div>
            <div className="leo-reveal" style={{ ['--d' as any]: '120ms' }}>
              <h2 className="font-display font-bold text-[clamp(28px,3.4vw,48px)] leading-[1.05] tracking-[-0.02em] mb-5 md:mb-8 text-cyan-300">
                VISION
              </h2>
              <p className="text-[15px] md:text-base leading-[1.6] text-fg-2">
                A world where moving money is as ordinary as sending a message — instant,
                global, and invisible until you need it. We see finance becoming software,
                and software becoming a craft. LEO exists to make that future feel
                inevitable, and a little bit beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="relative pt-12 md:pt-32 pb-16 md:pb-32 bg-[#0a1527]">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="leo-reveal font-display font-bold text-[clamp(32px,4vw,64px)] leading-[1.05] tracking-[-0.02em] mb-10 md:mb-20">
            <em className="not-italic text-cyan-300">EXECUTIVE</em>{' '}
            <span className="text-white">TEAM</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 lg:gap-x-32 md:gap-y-20">
            {TEAM.map((m, i) => (
              <div
                key={`${m.firstName}-${m.lastName}`}
                className="leo-reveal"
                style={{ ['--d' as any]: `${i * 90}ms` }}
              >
                <div className="relative w-28 h-28 md:w-40 md:h-40 mb-5 md:mb-6">
                  <div
                    aria-hidden
                    className="absolute -inset-12 md:-inset-20 rounded-full blur-[60px] pointer-events-none bg-[radial-gradient(circle,rgba(111,227,255,0.35)_0%,rgba(111,227,255,0.15)_30%,transparent_75%)]"
                  />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-navy-800 border border-[rgba(111,227,255,0.18)]">
                    <img
                      src={m.photo}
                      alt={`${m.firstName} ${m.lastName}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-display font-bold text-[26px] md:text-[34px] leading-[1.05] tracking-[-0.01em] text-white mb-2 md:mb-3">
                  {m.firstName}
                  <br />
                  {m.lastName}
                </h3>
                <p className="font-display text-sm md:text-base font-semibold tracking-[0.04em] uppercase text-cyan-300 mb-3 md:mb-4">
                  {m.role}
                </p>
                <p className="text-sm md:text-[15px] leading-[1.6] text-fg-2 mb-3 md:mb-4 max-w-md">
                  {m.bio}
                </p>
                <a
                  href="#linkedin"
                  className="text-sm md:text-base text-fg-3 transition-colors hover:text-cyan-300"
                >
                  LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="relative py-12 md:py-24 bg-[#0a1527]">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <div className="absolute top-1/2 left-0 right-0 h-48 md:h-64 -translate-y-1/2 blur-[80px] animate-leo-hero-glow bg-[radial-gradient(ellipse_at_center,rgba(111,227,255,0.18),transparent_65%)]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="leo-reveal font-display font-bold text-[clamp(28px,3.4vw,52px)] leading-[1.05] tracking-[-0.02em] text-center mb-10 md:mb-16">
            <span className="text-white">OUR </span>
            <em className="not-italic text-cyan-300">COLLABORATIONS</em>
          </h2>

          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max items-center gap-12 md:gap-20 animate-[leo-marquee_60s_linear_infinite]">
              {[...PARTNERS, ...PARTNERS].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="font-display font-bold text-lg md:text-2xl tracking-[0.08em] text-fg-3 hover:text-cyan-300 transition-colors whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
