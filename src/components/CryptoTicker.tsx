import React from 'react';

type Coin = {
  symbol: string;
  price: string;
  change: string;
  up: boolean;
};

const COINS: Coin[] = [
  { symbol: 'ETH',          price: '$3,452.12', change: '1.40%', up: true },
  { symbol: 'TRX',          price: '$0.32',     change: '2.60%', up: true },
  { symbol: 'USDT (TRC20)', price: '$1.00',     change: '0.00%', up: true },
  { symbol: 'USDT (ERC20)', price: '$1.00',     change: '0.00%', up: true },
  { symbol: 'USDC (ERC20)', price: '$1.00',     change: '0.00%', up: true },
];

const CryptoTicker: React.FC = () => (
  <section
    aria-label="Live crypto prices"
    className="group relative overflow-hidden border-y border-[rgba(111,227,255,0.08)] py-[60px] bg-[#0a1527]"
  >
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_900px_200px_at_30%_50%,rgba(78,203,255,0.10),transparent_60%),radial-gradient(ellipse_700px_180px_at_80%_50%,rgba(78,203,255,0.06),transparent_70%)]"
    />

    <div
      className="relative z-[1] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="flex gap-[18px] w-max animate-[leo-marquee_60s_linear_infinite] [@media(hover:hover)]:group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...COINS, ...COINS].map((c, i) => (
          <div
            key={`${c.symbol}-${i}`}
            className="inline-flex items-center gap-2.5 whitespace-nowrap py-2 px-4 border border-[rgba(111,227,255,0.12)] rounded-full bg-cyan-300/[0.04] transition-[border-color,background] duration-[180ms] hover:border-[rgba(111,227,255,0.28)] hover:bg-cyan-300/[0.08]"
          >
            <span className="font-display font-bold text-[13px] tracking-[0.06em] text-cyan-300">
              {c.symbol}
            </span>
            <span className="font-mono text-[13px] font-medium text-fg-1">
              {c.price}
            </span>
            <span
              className={`font-mono text-xs font-semibold tracking-[0.02em] ${
                c.up ? 'text-success' : 'text-danger'
              }`}
            >
              {c.up ? '▲' : '▼'} {c.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CryptoTicker;
