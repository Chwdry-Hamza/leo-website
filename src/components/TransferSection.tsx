import React from 'react';

const TransferSection: React.FC = () => {
  return (
    <section
      id="transfer"
      className="relative overflow-hidden pt-12 md:pt-[60px] pb-16 md:pb-[100px] bg-[#0a1527]"
    >
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 desktop:grid-cols-[1.1fr_1fr] gap-10 desktop:gap-[60px] items-center text-center desktop:text-left">
        <div className="leo-reveal max-w-[560px] mx-auto desktop:mx-0 desktop:justify-self-start">
          <p className="font-display text-xs font-medium tracking-[0.3em] uppercase text-[#B8C8E2] mb-[22px]">
            One app, every network
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-white mb-7">
            SEND MONEY ACROSS
            <br />
            BORDERS —{' '}
            <em className="not-italic text-cyan-300">INSTANTLY,</em>
            <br />
            IN ANY CURRENCY.
          </h2>
          <p className="text-[15px] leading-[1.6] text-fg-2 max-w-[520px] mx-auto desktop:mx-0">
            Send to a Visa or Mastercard, a SEPA bank account, or a crypto
            wallet — every transfer clears in seconds, not days. Transparent
            fees, real-time rates, and bank-grade encryption on every move.
          </p>
        </div>

        <div
          className="leo-reveal relative flex items-center justify-center desktop:justify-end desktop:pl-10 lg:desktop:pl-20 desktop:pr-0 desktop:mr-0 lg:desktop:mr-12"
          style={{ ['--d' as any]: '120ms' }}
        >
          <div
            aria-hidden
            className="absolute -top-[20%] -left-[20%] -right-[20%] bottom-0 pointer-events-none z-0 blur-[80px] animate-leo-hero-glow bg-[radial-gradient(ellipse_at_center,rgba(111,227,255,0.7)_0%,rgba(111,227,255,0.3)_35%,transparent_65%)]"
          />
          <div
            aria-hidden
            className="absolute top-[-20%] bottom-0 right-[-30%] w-[60%] pointer-events-none z-0 blur-[80px] animate-leo-hero-glow bg-[radial-gradient(ellipse_at_center,rgba(111,227,255,0.7)_0%,rgba(111,227,255,0.3)_35%,transparent_65%)]"
          />
          <img
            src="/paymentMobilee.png"
            alt="Transfer preview"
            className="relative z-[1] block w-full max-w-[228px] h-auto object-contain [filter:drop-shadow(0_30px_60px_rgba(0,0,0,0.55))]"
          />
        </div>
      </div>
    </section>
  );
};

export default TransferSection;
