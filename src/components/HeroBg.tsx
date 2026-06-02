/* Pure CSS/SVG hero background — no raster images, no palm line art */
export default function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* ── 1. Base sky gradient ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, #020c18 0%, #040f1c 28%, #071828 55%, #0a2035 75%, #0c2840 100%)",
        }}
      />

      {/* ── 2. Sunset glow — right horizon ──────────────────────────────── */}
      <div
        className="absolute"
        style={{
          right: "-8%",
          bottom: "18%",
          width: "65%",
          height: "65%",
          background:
            "radial-gradient(ellipse at 60% 60%, rgba(244,146,74,0.28) 0%, rgba(240,92,74,0.14) 35%, transparent 65%)",
          filter: "blur(2px)",
        }}
      />
      {/* Sun disc */}
      <div
        className="absolute animate-pulse-slow"
        style={{
          right: "14%",
          bottom: "28%",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(ellipse, rgba(245,200,66,0.22) 0%, rgba(244,146,74,0.12) 40%, transparent 70%)",
          filter: "blur(1px)",
        }}
      />
      {/* Horizon line glow */}
      <div
        className="absolute"
        style={{
          left: 0,
          right: 0,
          bottom: "30%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(244,146,74,0.3) 30%, rgba(245,200,66,0.5) 55%, rgba(244,146,74,0.3) 75%, transparent 100%)",
          filter: "blur(1px)",
        }}
      />
      <div
        className="absolute"
        style={{
          left: 0,
          right: 0,
          bottom: "29%",
          height: "60px",
          background:
            "linear-gradient(to bottom, rgba(244,146,74,0.08) 0%, transparent 100%)",
        }}
      />

      {/* ── 3. Aqua atmosphere — left ────────────────────────────────────── */}
      <div
        className="absolute"
        style={{
          left: "-10%",
          top: "10%",
          width: "55%",
          height: "70%",
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(0,200,224,0.1) 0%, transparent 60%)",
        }}
      />

      {/* ── 4. Miami skyline silhouette — clean, minimal ─────────────────── */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1440 420"
        preserveAspectRatio="xMidYMax meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bldg-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d2a40" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#071828" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="bldg-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a2235" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#040f1c" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="bldg-near" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#061520" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#020b14" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="wave1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b4f82" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#071828" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="wave2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00c8e0" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#040f1c" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Far-background towers — blurred, minimal */}
        <g fill="url(#bldg-far)" opacity="0.5">
          <rect x="92"  y="200" width="18" height="220" rx="1" />
          <rect x="116" y="170" width="14" height="250" rx="1" />
          <rect x="136" y="190" width="22" height="230" rx="1" />
          <rect x="164" y="210" width="12" height="210" rx="1" />
          <rect x="840" y="185" width="20" height="235" rx="1" />
          <rect x="866" y="165" width="16" height="255" rx="1" />
          <rect x="888" y="195" width="24" height="225" rx="1" />
          <rect x="918" y="175" width="14" height="245" rx="1" />
          <rect x="1240" y="200" width="18" height="220" rx="1" />
          <rect x="1264" y="175" width="14" height="245" rx="1" />
          <rect x="1284" y="195" width="20" height="225" rx="1" />
        </g>

        {/* Mid-ground — main Brickell silhouette */}
        <g fill="url(#bldg-mid)">
          {/* Left cluster */}
          <rect x="40"  y="260" width="24" height="160" rx="1" />
          <rect x="68"  y="230" width="18" height="190" rx="1" />
          <rect x="72"  y="222" width="4"  height="10" rx="1" />
          <rect x="90"  y="248" width="26" height="172" rx="1" />
          <rect x="120" y="230" width="20" height="190" rx="1" />
          <rect x="124" y="218" width="6"  height="14" rx="1" />
          <rect x="144" y="265" width="18" height="155" rx="1" />
          <rect x="166" y="245" width="28" height="175" rx="1" />
          <rect x="198" y="228" width="20" height="192" rx="1" />
          <rect x="222" y="210" width="36" height="210" rx="1" />
          <rect x="226" y="198" width="28" height="14" rx="1" />
          <rect x="230" y="186" width="20" height="14" rx="1" />
          <rect x="262" y="238" width="22" height="182" rx="1" />
          <rect x="288" y="260" width="18" height="160" rx="1" />
          <rect x="310" y="268" width="22" height="152" rx="1" />

          {/* Center — iconic tall towers */}
          <rect x="490" y="152" width="32" height="268" rx="1" />
          <rect x="494" y="138" width="24" height="16" rx="1" />
          <rect x="498" y="124" width="16" height="16" rx="1" />
          <rect x="502" y="111" width="8"  height="15" rx="1" />
          <rect x="504" y="100" width="4"  height="13" rx="1" />
          <rect x="526" y="178" width="28" height="242" rx="1" />
          <rect x="558" y="192" width="38" height="228" rx="1" />
          <rect x="562" y="180" width="30" height="14" rx="1" />
          <rect x="600" y="168" width="24" height="252" rx="1" />
          <rect x="604" y="155" width="16" height="15" rx="1" />
          <rect x="628" y="148" width="30" height="272" rx="1" />
          <rect x="632" y="134" width="22" height="16" rx="1" />
          <rect x="636" y="120" width="14" height="16" rx="1" />
          <rect x="638" y="106" width="8"  height="16" rx="1" />
          <rect x="662" y="162" width="26" height="258" rx="1" />
          <rect x="692" y="175" width="22" height="245" rx="1" />
          <rect x="718" y="135" width="34" height="285" rx="1" />   {/* tallest */}
          <rect x="722" y="121" width="26" height="16" rx="1" />
          <rect x="726" y="107" width="18" height="16" rx="1" />
          <rect x="730" y="93"  width="10" height="16" rx="1" />
          <rect x="732" y="80"  width="4"  height="15" rx="1" />
          <rect x="756" y="168" width="28" height="252" rx="1" />
          <rect x="788" y="182" width="24" height="238" rx="1" />
          <rect x="816" y="158" width="30" height="262" rx="1" />
          <rect x="820" y="144" width="22" height="16" rx="1" />
          <rect x="850" y="172" width="26" height="248" rx="1" />
          <rect x="880" y="188" width="22" height="232" rx="1" />

          {/* Right cluster */}
          <rect x="1000" y="250" width="26" height="170" rx="1" />
          <rect x="1030" y="228" width="30" height="192" rx="1" />
          <rect x="1034" y="215" width="22" height="15" rx="1" />
          <rect x="1064" y="245" width="20" height="175" rx="1" />
          <rect x="1088" y="260" width="26" height="160" rx="1" />
          <rect x="1118" y="240" width="22" height="180" rx="1" />
          <rect x="1144" y="268" width="18" height="152" rx="1" />
          <rect x="1166" y="255" width="24" height="165" rx="1" />
          <rect x="1194" y="270" width="20" height="150" rx="1" />
          <rect x="1218" y="248" width="26" height="172" rx="1" />
          <rect x="1248" y="262" width="22" height="158" rx="1" />
          <rect x="1274" y="275" width="18" height="145" rx="1" />
          <rect x="1296" y="260" width="28" height="160" rx="1" />
          <rect x="1330" y="272" width="20" height="148" rx="1" />
          <rect x="1354" y="258" width="26" height="162" rx="1" />
          <rect x="1384" y="268" width="22" height="152" rx="1" />
        </g>

        {/* Near ground fill */}
        <rect x="0" y="350" width="1440" height="70" fill="url(#bldg-near)" />

        {/* ── Ocean / water band ─────────────────────────────────────────── */}
        <path
          d="M0 300 C200 292 400 308 600 298 C800 288 1000 305 1200 296 C1320 290 1400 302 1440 298 L1440 360 L0 360 Z"
          fill="url(#wave1)"
        />

        {/* ── Abstract aqua wave layers ──────────────────────────────────── */}
        <path
          d="M-100 368 C120 355 300 375 520 362 C740 349 960 372 1180 360 C1320 352 1420 366 1540 360"
          stroke="rgba(0,200,224,0.25)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-100 378 C150 364 380 382 600 370 C820 358 1040 378 1260 366 C1380 360 1440 372 1540 368"
          stroke="rgba(0,200,224,0.15)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0 388 C180 374 360 392 540 381 C720 370 900 390 1080 379 C1260 368 1400 384 1440 380 L1440 420 L0 420 Z"
          fill="url(#wave2)"
        />

        {/* Horizon shimmer line */}
        <path
          d="M0 298 L1440 298"
          stroke="rgba(0,200,224,0.12)"
          strokeWidth="1"
        />

        {/* Subtle window lights */}
        <g fill="rgba(245,200,66,0.35)">
          {[
            [496,162,3,2],[506,178,3,2],[520,190,3,2],
            [632,140,3,2],[640,156,3,2],[648,172,3,2],
            [722,128,3,2],[730,144,3,2],[738,160,3,2],[722,158,3,2],
            [820,154,3,2],[828,170,3,2],[838,158,3,2],
            [1032,228,3,2],[1040,242,3,2],[1034,256,3,2],
          ].map(([x,y,w,h],i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="0.5" />
          ))}
        </g>
        <g fill="rgba(0,200,224,0.2)">
          {[
            [500,172,3,2],[636,148,3,2],[726,136,3,2],[824,162,3,2],
          ].map(([x,y,w,h],i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="0.5" />
          ))}
        </g>
      </svg>

      {/* ── 5. Dot grid overlay ──────────────────────────────────────────── */}
      <div
        className="absolute inset-0 dot-grid"
        style={{ opacity: 0.4 }}
      />

      {/* ── 6. Subtle circuit lines — edges only ─────────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g opacity="0.14" stroke="#00c8e0" strokeWidth="1">
          <path d="M0 160 H80 V220 H50 V280" />
          <path d="M0 260 H40 V310 H100 V270 H160" />
          <circle cx="80"  cy="220" r="2.5" fill="#00c8e0" opacity="0.8" />
          <circle cx="100" cy="310" r="2"   fill="#00c8e0" opacity="0.6" />

          <path d="M1440 180 H1360 V240 H1390 V300" />
          <path d="M1440 280 H1400 V330 H1330 V285 H1270" />
          <circle cx="1360" cy="240" r="2.5" fill="#00c8e0" opacity="0.8" />
          <circle cx="1330" cy="330" r="2"   fill="#00c8e0" opacity="0.6" />
        </g>
      </svg>

      {/* ── 7. Vignette + readability gradient ───────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(4,15,28,0.55) 100%)",
        }}
      />
      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(4,15,28,0.9))",
        }}
      />
    </div>
  );
}
