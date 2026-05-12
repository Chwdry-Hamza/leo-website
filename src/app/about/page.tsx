import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

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
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl leading-[1.6] text-fg-2">
              LEO is the easiest way to spend your crypto in the real world.
              Hold USDT, USDC, TRX, or ETH in your wallet, and use the LEO
              card to tap, swipe, or pay online — your crypto converts to
              fiat the moment you check out. No exchanges, no waiting,
              no friction between your digital assets and everyday life.
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
                Our mission is to make crypto spendable in everyday life. With the
                LEO card, your USDT, USDC, TRX, or ETH converts to fiat the moment
                you check out — tap at any store, swipe at a terminal, or pay
                online. No exchanges, no waiting, no friction between your crypto
                and the real world.
              </p>
            </div>
            <div className="leo-reveal" style={{ ['--d' as any]: '120ms' }}>
              <h2 className="font-display font-bold text-[clamp(28px,3.4vw,48px)] leading-[1.05] tracking-[-0.02em] mb-5 md:mb-8 text-cyan-300">
                VISION
              </h2>
              <p className="text-[15px] md:text-base leading-[1.6] text-fg-2">
                A world where holding crypto doesn&apos;t mean choosing between
                saving and spending. We&apos;re building the bridge that lets your
                digital assets work like cash — accepted anywhere a card is,
                settled instantly, and always under your control.
              </p>
            </div>
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
