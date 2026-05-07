import React from 'react';

const GAUGE_LINES = 60;
const GREY = '#9aa3b2';

const EarnSection: React.FC = () => {
  return (
    <section
      id="earn"
      className="relative overflow-hidden pt-16 md:pt-[100px] pb-20 md:pb-[120px] bg-[#0a1527]"
    >
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 desktop:grid-cols-[1fr_1.1fr] gap-12 desktop:gap-[60px] items-center text-center desktop:text-left">
        <div className="leo-reveal max-w-[520px] mx-auto desktop:mx-0">
          <p className="font-display text-xs font-medium tracking-[0.3em] uppercase text-[#B8C8E2] mb-[22px]">
            Passive income, unlocked
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.6vw,60px)] leading-[1.05] tracking-[-0.02em] text-white mb-7">
            PUT YOUR <em className="not-italic text-cyan-300">CRYPTO</em>
            <br />
            TO WORK.
          </h2>
          <p className="text-[15px] leading-[1.6] text-fg-2 max-w-[480px] mx-auto desktop:mx-0">
            Earn up to 3% APR through secure, transparent staking — powered by
            enterprise-grade encryption and built for the long game.
          </p>
        </div>

        <div
          className="leo-reveal relative w-full h-[460px] sm:h-[520px] desktop:h-[480px]"
          style={{ ['--d' as any]: '120ms' }}
        >
          <div
            aria-hidden
            className="absolute top-[4px] -left-[20%] -right-[20%] bottom-[10%] pointer-events-none z-0 blur-[80px] animate-leo-hero-glow bg-[radial-gradient(ellipse_at_center,rgba(111,227,255,0.7)_0%,rgba(111,227,255,0.3)_35%,transparent_65%)]"
          />

          <div
            aria-hidden
            className="absolute bottom-[60px] left-1/2 -translate-x-1/2 desktop:left-0 desktop:translate-x-0 flex items-end gap-3 sm:gap-[18px] h-[260px] sm:h-[320px] max-w-full"
          >
            {[60, 85, 50, 72, 42].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="w-10 sm:w-14 bg-cyan-300/[0.08] border border-cyan-300/[0.15] rounded-t-lg"
              />
            ))}
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 desktop:left-auto desktop:right-0 desktop:translate-x-0 w-[300px] sm:w-[360px] max-w-[90%]">
            <svg viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet" className="w-full h-auto block">
              {Array.from({ length: GAUGE_LINES }).map((_, i) => {
                const angle = (180 / GAUGE_LINES) * i - 90;
                const rad = (angle * Math.PI) / 180;
                const inner = 70;
                const outer = 95;
                const x1 = 100 + inner * Math.cos(rad);
                const y1 = 100 + inner * Math.sin(rad);
                const x2 = 100 + outer * Math.cos(rad);
                const y2 = 100 + outer * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i < 45 ? '#6FE3FF' : 'rgba(111, 227, 255, 0.15)'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
            <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
              <p className="text-xs text-fg-3 tracking-[0.12em] uppercase m-0">APR up to 3%</p>
              <p className="font-display font-bold text-[38px] text-white mt-1.5 mb-1">+ $15,920</p>
              <p className="text-xs text-fg-3 m-0">Ends on Dec 20, 2026</p>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 desktop:left-auto desktop:right-0 desktop:translate-x-0 w-[min(300px,90%)] bg-white rounded-[18px] px-5 py-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.45)] text-navy-950">
            <div className="flex items-center justify-between font-bold text-[15px] text-navy-950 mb-3.5">
              <span>Staking</span>
              <div className="flex gap-2 text-[#9aa3b2] text-[13px]" aria-hidden>
                <span>↓</span>
                <span>↑</span>
                <span>▦</span>
              </div>
            </div>
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="text-[11px] m-0 mb-1" style={{ color: GREY }}>Total Profit</p>
                <p className="font-display font-bold text-[28px] text-navy-950 m-0">
                  536{' '}
                  <span className="text-xs font-medium ml-1.5" style={{ color: GREY }}>
                    ETH
                  </span>
                </p>
              </div>
              <span className="text-[11px]" style={{ color: GREY }}>12/90 day</span>
            </div>
            <div className="relative h-1.5 bg-[#e4e7ec] rounded-full">
              <div className="absolute inset-y-0 left-0 right-1/4 bg-cyan-400 rounded-full" />
              <div className="absolute top-1/2 left-3/4 w-4 h-4 rounded-full bg-white border-[3px] border-cyan-400 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnSection;
