import React from 'react';

const cardBase =
  'relative rounded-[22px] overflow-hidden bg-[#5ccbe3] border border-[rgba(92,203,227,0.6)] shadow-[0_30px_60px_rgba(0,0,0,0.45),0_0_0_1px_rgba(92,203,227,0.25)] px-6 pt-7 pb-[26px] transition-[transform,box-shadow] duration-[220ms] ease-leo-out hover:shadow-[0_40px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(155,230,255,0.55)]';
const cardSide = `${cardBase} hover:-translate-y-[6px]`;
const cardCenter = `${cardBase} desktop:-translate-y-[10px] desktop:hover:-translate-y-[16px]`;
const cardMediaBase =
  'rounded-[14px] overflow-hidden bg-[rgba(4,7,15,0.45)] mb-[22px] flex items-center justify-center';
const cardBody = {
  h3: 'font-display font-bold text-[22px] tracking-[0.04em] text-navy-950 mb-2.5 mt-0',
  p: 'text-sm leading-[1.5] text-[rgba(4,7,15,0.72)] m-0',
};

const ControlSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-10 bg-[#0a1527]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.55] bg-[radial-gradient(ellipse_800px_260px_at_50%_22%,#123a5a,transparent_70%)]"
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="leo-reveal text-center max-w-[900px] mx-auto mb-10 md:mb-16">
          <div className="font-display text-xs font-medium tracking-[0.28em] uppercase text-[#B8C8E2] mb-[22px]">
            Smart banking, reimagined
          </div>
          <h2 className="font-display font-bold text-[clamp(28px,5.2vw,68px)] leading-[1.05] tracking-[-0.02em] text-white m-0">
            OWN EVERY <em className="not-italic text-cyan-300">MOVE</em> YOUR{' '}
            <em className="not-italic text-cyan-300">MONEY</em> MAKES
          </h2>
        </div>

        <div className="grid grid-cols-1 desktop:grid-cols-[1fr_1.12fr_1fr] gap-7 items-center">
          {/* TRANSACTIONS card */}
          <article className={`leo-reveal ${cardSide}`}>
            <div className={`${cardMediaBase} aspect-[9/10]`}>
              <img
                src="/activity.jpeg"
                alt="Transactions activity"
                className="w-full h-full object-cover rounded-[14px]"
                draggable={false}
              />
            </div>
            <div>
              <h3 className={cardBody.h3}>PAYMENTS</h3>
              <p className={cardBody.p}>
                Track every rupee in real time — send, receive, and review, all with a single tap.
              </p>
            </div>
          </article>

          {/* WALLET card */}
          <article
            className={`leo-reveal ${cardCenter}`}
            style={{ ['--d' as any]: '120ms' }}
          >
            <div className={cardMediaBase}>
              <img
                src="/wallet.png"
                alt="Wallet"
                className="w-full h-auto block rounded-[14px]"
                draggable={false}
              />
            </div>
            <div>
              <h3 className={cardBody.h3}>WALLET</h3>
              <p className={cardBody.p}>
                Hold, swap, and grow digital assets securely. Your portfolio, always at your fingertips.
              </p>
            </div>
          </article>

          {/* ALERTS card */}
          <article
            className={`leo-reveal ${cardSide}`}
            style={{ ['--d' as any]: '240ms' }}
          >
            <div className={`${cardMediaBase} aspect-[9/10]`}>
              <img
                src="/notify.jpeg"
                alt="Notifications"
                className="w-full h-full object-cover rounded-[14px]"
                draggable={false}
              />
            </div>
            <div>
              <h3 className={cardBody.h3}>ALERTS</h3>
              <p className={cardBody.p}>
                Stay informed with smart notifications for every login, card, and account update.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ControlSection;
