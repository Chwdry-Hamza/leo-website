import React from 'react';
import FlipCard from './FlipCard';

const PaymentSection: React.FC = () => {
  return (
    <section
      id="payment"
      className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-[100px] bg-[#0a1527]"
    >
      <div className="relative z-[1] w-full max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
        <div className="leo-reveal flex flex-col items-center w-full">
          <p className="font-display text-[13px] font-medium tracking-[0.28em] uppercase text-[#B8C8E2] mb-[22px] text-center">
            Dual-currency, zero friction
          </p>
          <h2 className="font-display font-bold text-[clamp(32px,5.2vw,68px)] leading-[1.05] tracking-[-0.02em] text-center mb-5">
            <span className="text-white">TWO WORLDS.</span>{' '}
            <em className="not-italic text-cyan-300">ONE CARD.</em>
          </h2>
          <p className="text-[15px] md:text-[17px] leading-[1.5] text-fg-2 text-center max-w-[460px] mb-4">
            Flip between fiat and crypto with a single tap — anywhere in the world, any time of day.
          </p>
        </div>

        <div className="leo-reveal relative w-full max-w-[860px] mx-auto mb-[-80px] md:mb-[-140px] -translate-y-[20px] md:-translate-y-[40px]" style={{ ['--d' as any]: '120ms' }}>
          <div
            aria-hidden
            className="absolute -inset-[20%] pointer-events-none z-0 blur-[80px] animate-leo-hero-glow bg-[radial-gradient(ellipse_at_center,rgba(111,227,255,0.7)_0%,rgba(111,227,255,0.3)_35%,transparent_65%)]"
          />
          <div className="relative z-[1]">
            <FlipCard
              frontSrc="/leoFrontCard.png"
              backSrc="/leoBackCard.png"
              frontAlt="SPAY Card Front"
              backAlt="SPAY Card Back"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
