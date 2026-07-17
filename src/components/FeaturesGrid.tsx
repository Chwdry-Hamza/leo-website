import React from 'react';

const tileBase =
  'leo-reveal relative rounded-[20px] p-6 md:p-7 border border-[rgba(111,227,255,0.18)] bg-[rgba(255,255,255,0.02)] backdrop-blur-sm overflow-hidden min-h-[220px] transition-[transform,box-shadow] duration-[220ms] ease-leo-out hover:-translate-y-[4px] hover:shadow-[0_30px_60px_rgba(0,0,0,0.45),0_0_0_1px_rgba(111,227,255,0.25)]';

const eyebrow =
  'font-display text-[11px] font-medium tracking-[0.28em] uppercase text-cyan-300 mb-3';
const h3Cls =
  'font-display font-bold text-[22px] tracking-[-0.01em] text-white mb-2';
const bodyCls = 'text-[14px] leading-[1.5] text-fg-2 m-0';

type AvatarProps = { initial: string; bg: string; size?: number };
const Avatar: React.FC<AvatarProps> = ({ initial, bg, size = 44 }) => (
  <div
    className="rounded-full inline-flex items-center justify-center font-display font-bold text-white border-2 border-[#0a1527] shrink-0"
    style={{ width: size, height: size, background: bg, fontSize: size * 0.36 }}
  >
    {initial}
  </div>
);

const SplitIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-cyan-300"
  >
    <path d="M3 6h5l4 6 4-6h5" />
    <path d="M3 18h5l4-6" />
    <path d="M16 18h5" />
  </svg>
);

const ProtectIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[52px] h-[52px] text-cyan-300 [filter:drop-shadow(0_0_8px_rgba(111,227,255,0.65))]"
  >
    <path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

import { HOME_CONTENT_DEFAULTS, type HomeContent } from '@/lib/homeContent';

type FeaturesGridProps = { content?: HomeContent['featuresGrid'] };

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ content }) => {
  const c = content ?? HOME_CONTENT_DEFAULTS.featuresGrid;
  return (
    <section className="relative py-[100px] bg-[#0a1527]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.25] bg-[radial-gradient(ellipse_700px_220px_at_50%_15%,#123a5a,transparent_70%)]"
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-8">
        <div className="leo-reveal text-center max-w-[820px] mx-auto mb-14">
          <p
            data-cms-field="featuresGrid.eyebrow"
            className="font-display text-xs font-medium tracking-[0.28em] uppercase text-[#B8C8E2] mb-[22px]"
          >
            {c.eyebrow}
          </p>
          <h2 className="font-display font-bold text-[clamp(40px,5.2vw,68px)] leading-[1.05] tracking-[-0.02em] text-white m-0">
            <span data-cms-field="featuresGrid.titleWhite">{c.titleWhite}</span>
            <em data-cms-field="featuresGrid.titleAccent" className="not-italic text-cyan-300">{c.titleAccent}</em>
            {' '}FOR EVERY MOVE,
            <br />
            ON-CHAIN OR OFF.
          </h2>
        </div>

        <div className="grid grid-cols-1 desktop:grid-cols-4 gap-5">
          {/* HERO TILE — SEND (span 2) */}
          <article
            className={`${tileBase} desktop:col-span-2 flex flex-col`}
          >
            <p className={eyebrow}>Send</p>
            <h3 className={h3Cls}>Send to any wallet, instantly.</h3>
            <p className={`${bodyCls} max-w-[380px]`}>
              Push USDT to a friend or send across chains — every transfer
              settles in seconds, not days.
            </p>

            <div className="mt-auto pt-10 flex items-center gap-4">
              <Avatar
                initial="M"
                bg="linear-gradient(135deg,#FF7A8A,#C73A56)"
              />
              <div className="relative flex-1 h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(111,227,255,0.95),rgba(111,227,255,0.35))]">
                <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(111,227,255,0.7)]" />
                <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(111,227,255,0.7)]" />
                <div className="absolute left-1/2 -top-8 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0a1527] border border-cyan-300/35 font-mono text-[12px] text-cyan-300 whitespace-nowrap shadow-[0_8px_20px_rgba(0,0,0,0.45)]">
                  + 50 USDC · 1.2s
                </div>
              </div>
              <Avatar
                initial="J"
                bg="linear-gradient(135deg,#FFD18A,#E89B40)"
              />
            </div>
          </article>

          {/* CARD TILE — SPEND */}
          <article className={`${tileBase} flex flex-col`}>
            <p className={eyebrow}>Spend</p>
            <h3 className={h3Cls}>Spend crypto, anywhere cards work.</h3>

            <div className="mt-auto pt-4 flex justify-center">
              <img
                src="/leoFrontCard.png"
                alt="LEO card"
                draggable={false}
                className="w-full max-w-[260px] h-auto object-contain [transform:rotate(-6deg)] [filter:drop-shadow(0_20px_40px_rgba(0,0,0,0.55))_drop-shadow(0_0_22px_rgba(111,227,255,0.18))] select-none"
              />
            </div>
          </article>

          {/* SPLIT TILE */}
          <article className={`${tileBase} flex flex-col`}>
            <div className="w-10 h-10 rounded-[10px] bg-cyan-300/15 border border-cyan-300/30 inline-flex items-center justify-center mb-4">
              <SplitIcon />
            </div>
            <h3 className={h3Cls}>Split in any currency.</h3>
            <p className={`${bodyCls} mb-5`}>
              Bills, rent, a weekend away — settle in fiat, USDC, or BTC,
              down to the cent.
            </p>
            <div className="mt-auto flex items-center">
              <div className="flex">
                <Avatar
                  initial="M"
                  bg="linear-gradient(135deg,#FF7A8A,#C73A56)"
                  size={40}
                />
                <div className="-ml-[10px]">
                  <Avatar
                    initial="J"
                    bg="linear-gradient(135deg,#FFD18A,#E89B40)"
                    size={40}
                  />
                </div>
                <div className="-ml-[10px]">
                  <Avatar
                    initial="S"
                    bg="linear-gradient(135deg,#A88AFF,#7B4FE0)"
                    size={40}
                  />
                </div>
              </div>
              <span className="ml-3 font-mono text-[14px] font-semibold text-[#5BE3A1]">
                $37.42 each
              </span>
            </div>
          </article>

          {/* PROTECT TILE — spans the full row (GROW + BUSINESS tiles were
              removed for compliance, so col-span-2 would leave a 2-col gap). */}
          <article className={`${tileBase} desktop:col-span-4`}>
            <div className="flex flex-col desktop:flex-row gap-6 desktop:gap-8 h-full">
              <div className="flex-1 flex flex-col">
                <p className={eyebrow}>Protect</p>
                <h3 className={h3Cls}>Security you can feel.</h3>
                {/* Compliance-approved wording only. Do NOT re-add insurance
                    ("FDIC"), certification ("SOC 2"), or custody claims without
                    written sign-off from compliance. */}
                <p className={`${bodyCls} max-w-[460px]`}>
                  We apply industry-standard security practices, including
                  encryption in transit and at rest.
                </p>
              </div>
              <div className="hidden desktop:flex shrink-0 w-[160px] h-[160px] items-center justify-center self-center relative">
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-300/35" />
                <div className="absolute inset-3 rounded-full border border-cyan-300/45" />
                <div className="absolute inset-7 rounded-full bg-[radial-gradient(circle_at_center,rgba(111,227,255,0.45),transparent_70%)]" />
                <ProtectIcon />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
