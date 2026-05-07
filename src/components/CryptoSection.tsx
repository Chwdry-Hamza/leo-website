import React from 'react';

const CryptoSection: React.FC = () => {
  return (
    <section
      id="crypto"
      className="relative overflow-hidden py-16 md:py-[100px] bg-[#0a1527]"
    >
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 desktop:grid-cols-[1fr_1.1fr] gap-10 desktop:gap-[60px] items-center text-center desktop:text-left">
        <div className="leo-reveal max-w-[520px] mx-auto desktop:mx-0">
          <p className="font-display text-xs font-medium tracking-[0.3em] uppercase text-[#B8C8E2] mb-[10px]">
            Your crypto, simplified
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-white mb-12">
            BUY, HOLD, SWAP,
            <br />
            EARN, AND <em className="not-italic text-cyan-300">GROW</em>
            <br />
            YOUR ENTIRE PORTFOLIO
          </h2>
          <p className="text-[15px] leading-[1.6] text-fg-2 max-w-[480px] mx-auto desktop:mx-0">
            Purchase, sell, spend, and hold digital assets with institutional-grade
            security — all from the convenience of your pocket. Track live prices,
            swap between fiat and crypto in a single tap, and put your idle balance
            to work with effortless staking. One unified wallet for every move you
            make, on-chain or off.
          </p>
        </div>

        <div
          className="leo-reveal relative flex items-center justify-center desktop:justify-end desktop:mr-0 lg:desktop:mr-6"
          style={{ ['--d' as any]: '120ms' }}
        >
          <div
            aria-hidden
            className="absolute -top-[20%] -left-[20%] -right-[20%] bottom-[20px] desktop:top-[20px] desktop:bottom-[1px] pointer-events-none z-0 blur-[80px] animate-leo-hero-glow bg-[radial-gradient(ellipse_at_center,rgba(111,227,255,0.7)_0%,rgba(111,227,255,0.3)_35%,transparent_65%)]"
          />
          <div
            aria-hidden
            className="absolute -top-[30%] bottom-[20px] right-[-30%] w-[60%] desktop:top-[40px] desktop:bottom-[4px] pointer-events-none z-0 blur-[80px] animate-leo-hero-glow bg-[radial-gradient(ellipse_at_center,rgba(111,227,255,0.7)_0%,rgba(111,227,255,0.3)_35%,transparent_65%)]"
          />
          <img
            src="/mobilePaymentt.png"
            alt="Crypto preview"
            className="relative z-[1] block w-full max-w-[380px] h-auto object-contain [filter:drop-shadow(0_30px_60px_rgba(0,0,0,0.55))]"
          />
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;
