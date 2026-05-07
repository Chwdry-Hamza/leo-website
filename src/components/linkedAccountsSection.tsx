export default function LinkedAccountsSection() {
  return (
    <section className="relative pt-0 pb-12 md:pb-20 overflow-hidden" style={{ background: '#0a1527' }}>
      <style>{`
        @keyframes floatY15 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes floatY10 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes floatY8  { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px);  } }
        .card-float-1 { animation: floatY15 4s ease-in-out infinite; }
        .card-float-2 { animation: floatY10 3.5s ease-in-out infinite 0.2s; }
        .card-float-3 { animation: floatY8  3s ease-in-out infinite 0.4s; }
        .card-float-4 { animation: floatY10 3.5s ease-in-out infinite 0.6s; }
        .card-float-5 { animation: floatY15 4s ease-in-out infinite 0.8s; }
      `}</style>
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-10 lg:pt-12">
        {/* Header */}
        <div className="relative text-center mb-10 sm:mb-12 md:mb-16">
          {/* Soft teal radial glow behind heading — Mobile (shifted down so top edge fades out) */}
          <div
            className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[min(500px,100%)] h-[260px]"
            style={{
              background:
                'radial-gradient(ellipse 220px 90px at 50% 65%, #0f242c 0%, #0f242c 25%, rgba(15,36,44,0.75) 48%, rgba(15,36,44,0.4) 65%, rgba(15,36,44,0.15) 82%, transparent 100%)',
            }}
          />

          {/* Soft teal radial glow behind heading — Desktop (shifted down so top edge fades out) */}
          <div
            className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[min(1100px,100%)] h-[460px]"
            style={{
              background:
                'radial-gradient(ellipse 480px 150px at 50% 65%, #0f242c 0%, #0f242c 25%, rgba(15,36,44,0.75) 48%, rgba(15,36,44,0.4) 65%, rgba(15,36,44,0.15) 82%, transparent 100%)',
            }}
          />
          <div className="leo-reveal relative">
            <p className="font-display text-xs font-medium tracking-[0.28em] uppercase text-[#B8C8E2] mb-[22px]">
              ONE APP, EVERY WALLET
            </p>
            <h2 className="font-display font-bold text-[clamp(40px,5.2vw,68px)] leading-[1.05] tracking-[-0.02em] text-white text-center m-0 mb-5">
              ALL YOUR ACCOUNTS,
              <br />
              <em className="not-italic text-cyan-300">ONE COMMAND CENTER.</em>
            </h2>
            <p className="text-[15px] leading-[1.6] text-fg-2 text-center max-w-[520px] mx-auto">
              Connect any crypto wallet in under a minute and watch every
              balance, every transaction, every move sync into a single,
              encrypted view — no chain-hopping, no spreadsheets.
            </p>
          </div>
        </div>

        {/* Bank Cards Display */}
        <div className="leo-reveal relative flex items-center justify-center mt-10 sm:mt-12 md:mt-16 h-[320px] sm:h-[360px] md:h-[440px] lg:h-[600px]" style={{ ['--d' as any]: '120ms' }}>
          <div
            aria-hidden
            className="absolute -inset-x-[20%] -top-[20%] bottom-[80px] desktop:-bottom-[5%] pointer-events-none z-0 blur-[80px] animate-leo-hero-glow bg-[radial-gradient(ellipse_at_50%_40%,rgba(111,227,255,0.7)_0%,rgba(111,227,255,0.3)_35%,transparent_65%)]"
          />

          {/* Crypto Wallet Card - Far Left */}
          <div className="hidden sm:block absolute left-1/2 -ml-[105px] sm:-ml-[125px] md:-ml-[260px] lg:-ml-[520px] w-[180px] sm:w-[200px] md:w-[240px] lg:w-72 h-[260px] sm:h-[290px] md:h-[340px] lg:h-96 rotate-0 sm:-rotate-3 md:-rotate-6 lg:-rotate-12 transition-transform duration-300">
            <div className="card-float-1 relative w-full h-full rounded-3xl p-3 sm:p-4 md:p-5" style={{ background: '#5ccbe3' }}>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-500 rounded-full" />
                  <div>
                    <div className="text-white text-[11px] sm:text-xs md:text-sm font-medium">Alex Carter</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs">Online</div>
                  </div>
                </div>
                <div className="w-5 h-5 md:w-6 md:h-6 text-zinc-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="text-black text-[10px] sm:text-xs mb-1 md:mb-2">CRYPTO WALLET</div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">$ 8,724</div>
              {/* Dotted globe pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-44 opacity-60 overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <circle cx="100" cy="55" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="70" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="85" r="1.5" fill="#71717a" />
                  <circle cx="60" cy="70" r="1" fill="#71717a" />
                  <circle cx="140" cy="70" r="1" fill="#71717a" />
                  <circle cx="55" cy="85" r="1" fill="#71717a" />
                  <circle cx="145" cy="85" r="1" fill="#71717a" />
                  <circle cx="30" cy="85" r="1" fill="#71717a" />
                  <circle cx="170" cy="85" r="1" fill="#71717a" />
                  <circle cx="50" cy="100" r="1" fill="#71717a" />
                  <circle cx="150" cy="100" r="1" fill="#71717a" />
                  <circle cx="75" cy="100" r="1" fill="#71717a" />
                  <circle cx="125" cy="100" r="1" fill="#71717a" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bank Card - Left */}
          <div className="hidden sm:block absolute left-1/2 -ml-[100px] sm:-ml-[115px] md:-ml-[130px] lg:-ml-80 w-[180px] sm:w-[200px] md:w-[240px] lg:w-72 h-[260px] sm:h-[290px] md:h-[340px] lg:h-96 rotate-0 sm:-rotate-1 md:-rotate-3 lg:-rotate-6 z-10 transition-transform duration-300">
            <div className="card-float-2 relative w-full h-full rounded-3xl p-3 sm:p-4 md:p-5" style={{ background: '#5ccbe3' }}>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-500 rounded-full" />
                  <div>
                    <div className="text-white text-[11px] sm:text-xs md:text-sm font-medium">Alex Carter</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs">Online</div>
                  </div>
                </div>
                <div className="w-5 h-5 md:w-6 md:h-6 text-zinc-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="text-black text-[10px] sm:text-xs mb-1 md:mb-2">CRYPTO WALLET</div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">$ 9,824</div>
              {/* Dotted globe pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-44 opacity-60 overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <circle cx="100" cy="55" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="70" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="85" r="1.5" fill="#71717a" />
                  <circle cx="60" cy="70" r="1" fill="#71717a" />
                  <circle cx="140" cy="70" r="1" fill="#71717a" />
                  <circle cx="55" cy="85" r="1" fill="#71717a" />
                  <circle cx="145" cy="85" r="1" fill="#71717a" />
                  <circle cx="30" cy="85" r="1" fill="#71717a" />
                  <circle cx="170" cy="85" r="1" fill="#71717a" />
                  <circle cx="50" cy="100" r="1" fill="#71717a" />
                  <circle cx="150" cy="100" r="1" fill="#71717a" />
                  <circle cx="75" cy="100" r="1" fill="#71717a" />
                  <circle cx="125" cy="100" r="1" fill="#71717a" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Card - Center */}
          <div className="absolute left-1/2 -ml-[90px] sm:-ml-[100px] md:-ml-[120px] lg:-ml-36 w-[180px] sm:w-[200px] md:w-[240px] lg:w-72 h-[260px] sm:h-[290px] md:h-[340px] lg:h-96 z-20 transition-transform duration-300">
            <div className="card-float-3 relative w-full h-full bg-gradient-to-b from-zinc-200 to-zinc-400 rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-5 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-zinc-500 rounded-full" />
                  <div>
                    <div className="text-zinc-900 text-[11px] sm:text-xs md:text-sm font-medium">Alex Carter</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs">Online</div>
                  </div>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 text-amber-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="text-zinc-500 text-[10px] sm:text-xs mb-1 md:mb-2">All Accounts</div>
              <div className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-bold">$23,569</div>
              {/* Dotted globe pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-44 opacity-40 overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <path d="M100,40 Q100,70 100,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <path d="M60,50 Q55,80 50,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <path d="M140,50 Q145,80 150,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <path d="M30,70 Q25,90 20,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <path d="M170,70 Q175,90 180,120" fill="none" stroke="#71717a" strokeWidth="0.5" />
                  <circle cx="100" cy="55" r="1.5" fill="#52525b" />
                  <circle cx="100" cy="70" r="1.5" fill="#52525b" />
                  <circle cx="100" cy="85" r="1.5" fill="#52525b" />
                  <circle cx="60" cy="70" r="1" fill="#52525b" />
                  <circle cx="140" cy="70" r="1" fill="#52525b" />
                  <circle cx="55" cy="85" r="1" fill="#52525b" />
                  <circle cx="145" cy="85" r="1" fill="#52525b" />
                  <circle cx="30" cy="85" r="1" fill="#52525b" />
                  <circle cx="170" cy="85" r="1" fill="#52525b" />
                  <circle cx="50" cy="100" r="1" fill="#52525b" />
                  <circle cx="150" cy="100" r="1" fill="#52525b" />
                  <circle cx="75" cy="100" r="1" fill="#52525b" />
                  <circle cx="125" cy="100" r="1" fill="#52525b" />
                </svg>
              </div>
            </div>
          </div>

          {/* Successful Linked Popup */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-6 sm:-bottom-10 md:-bottom-14 lg:-bottom-16 z-30 backdrop-blur-md rounded-2xl px-4 sm:px-5 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 text-center w-[200px] sm:w-[240px] md:w-[280px] lg:w-80"
            style={{ background: 'rgba(92,203,227,0.9)' }}
          >
            {/* Link Icon */}
            <div className="absolute -top-3 sm:-top-4 md:-top-5 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-3 md:mt-4 mb-1 md:mb-2">ACCOUNT LINKED</h3>
            <p className="text-black text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 leading-snug">Encrypted, synced, and live in seconds. Your money moves as one.</p>
            <a href="https://apps.apple.com/app/sicash" target="_blank" rel="noopener noreferrer" className="inline-block bg-zinc-700 hover:bg-zinc-600 text-white text-[10px] sm:text-xs md:text-sm font-medium px-4 sm:px-5 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg transition-colors">
              OPEN DASHBOARD
            </a>
          </div>

          {/* Bank 3 Card - Right */}
          <div className="hidden sm:block absolute left-1/2 -ml-[80px] sm:-ml-[85px] md:-ml-[110px] lg:ml-8 w-[180px] sm:w-[200px] md:w-[240px] lg:w-72 h-[260px] sm:h-[290px] md:h-[340px] lg:h-96 rotate-0 sm:rotate-1 md:rotate-3 lg:rotate-6 z-10 transition-transform duration-300">
            <div className="card-float-4 relative w-full h-full rounded-3xl p-3 sm:p-4 md:p-5" style={{ background: '#5ccbe3' }}>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-500 rounded-full" />
                  <div>
                    <div className="text-white text-[11px] sm:text-xs md:text-sm font-medium">Alex Carter</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs">Online</div>
                  </div>
                </div>
                <div className="w-5 h-5 md:w-6 md:h-6 text-zinc-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="text-black text-[10px] sm:text-xs mb-1 md:mb-2">CRYPTO WALLET</div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">$ 3,960</div>
              {/* Dotted globe pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-44 opacity-60 overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <circle cx="100" cy="55" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="70" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="85" r="1.5" fill="#71717a" />
                  <circle cx="60" cy="70" r="1" fill="#71717a" />
                  <circle cx="140" cy="70" r="1" fill="#71717a" />
                  <circle cx="55" cy="85" r="1" fill="#71717a" />
                  <circle cx="145" cy="85" r="1" fill="#71717a" />
                  <circle cx="30" cy="85" r="1" fill="#71717a" />
                  <circle cx="170" cy="85" r="1" fill="#71717a" />
                  <circle cx="50" cy="100" r="1" fill="#71717a" />
                  <circle cx="150" cy="100" r="1" fill="#71717a" />
                  <circle cx="75" cy="100" r="1" fill="#71717a" />
                  <circle cx="125" cy="100" r="1" fill="#71717a" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bank 4 Card - Far Right */}
          <div className="hidden sm:block absolute left-1/2 -ml-[75px] sm:-ml-[75px] md:ml-[20px] lg:ml-56 w-[180px] sm:w-[200px] md:w-[240px] lg:w-72 h-[260px] sm:h-[290px] md:h-[340px] lg:h-96 rotate-0 sm:rotate-3 md:rotate-6 lg:rotate-12 transition-transform duration-300">
            <div className="card-float-5 relative w-full h-full rounded-3xl p-3 sm:p-4 md:p-5" style={{ background: '#5ccbe3' }}>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-500 rounded-full" />
                  <div>
                    <div className="text-white text-[11px] sm:text-xs md:text-sm font-medium">Alex Carter</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs">Online</div>
                  </div>
                </div>
                <div className="w-5 h-5 md:w-6 md:h-6 text-zinc-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              <div className="text-black text-[10px] sm:text-xs mb-1 md:mb-2">CRYPTO WALLET</div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">$ 5,532</div>
              {/* Dotted globe pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 md:h-44 opacity-60 overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  <ellipse cx="100" cy="100" rx="95" ry="35" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="85" rx="85" ry="30" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="70" rx="75" ry="25" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <ellipse cx="100" cy="55" rx="60" ry="18" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M100,40 Q100,70 100,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M60,50 Q55,80 50,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M140,50 Q145,80 150,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M30,70 Q25,90 20,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <path d="M170,70 Q175,90 180,120" fill="none" stroke="#52525b" strokeWidth="0.5" />
                  <circle cx="100" cy="55" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="70" r="1.5" fill="#71717a" />
                  <circle cx="100" cy="85" r="1.5" fill="#71717a" />
                  <circle cx="60" cy="70" r="1" fill="#71717a" />
                  <circle cx="140" cy="70" r="1" fill="#71717a" />
                  <circle cx="55" cy="85" r="1" fill="#71717a" />
                  <circle cx="145" cy="85" r="1" fill="#71717a" />
                  <circle cx="30" cy="85" r="1" fill="#71717a" />
                  <circle cx="170" cy="85" r="1" fill="#71717a" />
                  <circle cx="50" cy="100" r="1" fill="#71717a" />
                  <circle cx="150" cy="100" r="1" fill="#71717a" />
                  <circle cx="75" cy="100" r="1" fill="#71717a" />
                  <circle cx="125" cy="100" r="1" fill="#71717a" />
                </svg>
              </div>
            </div>
          </div>

          {/* 3D Globe wireframe at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[360px] md:w-[520px] lg:w-[800px] h-40 sm:h-48 md:h-56 lg:h-64 opacity-40">
            <svg viewBox="0 0 400 150" className="w-full h-full">
              <ellipse cx="200" cy="120" rx="180" ry="50" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <ellipse cx="200" cy="100" rx="160" ry="45" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <ellipse cx="200" cy="80" rx="140" ry="40" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <ellipse cx="200" cy="60" rx="120" ry="35" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M200,20 Q200,70 200,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M140,30 Q140,80 160,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M260,30 Q260,80 240,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M100,50 Q100,90 130,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <path d="M300,50 Q300,90 270,140" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" />
              <circle cx="200" cy="120" r="2" fill="#71717a" />
              <circle cx="160" cy="110" r="1.5" fill="#71717a" />
              <circle cx="240" cy="110" r="1.5" fill="#71717a" />
              <circle cx="130" cy="100" r="1" fill="#71717a" />
              <circle cx="270" cy="100" r="1" fill="#71717a" />
              <defs>
                <linearGradient id="globeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#71717a" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#71717a" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
