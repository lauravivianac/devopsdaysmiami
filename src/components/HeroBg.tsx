export default function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>

      {/* ── Sky: navy top → ocean blue → teal-aqua at horizon ── */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #010810 0%, #021428 18%, #031e3c 38%, #043258 55%, #0558a0 72%, #006e8c 82%, #008fa0 90%, #00b8c8 100%)"
      }} />

      {/* ── Sunset bloom — upper-right ── */}
      <div className="absolute pulse-slow" style={{
        right: "-5%", top: "8%", width: "55%", height: "60%",
        background: "radial-gradient(ellipse at 65% 35%, rgba(244,136,74,0.32) 0%, rgba(240,81,62,0.14) 40%, transparent 65%)"
      }} />
      {/* Sun disc */}
      <div className="absolute" style={{
        right: "18%", top: "22%", width: "140px", height: "140px",
        background: "radial-gradient(circle, rgba(255,240,160,0.9) 0%, rgba(245,195,64,0.6) 30%, rgba(244,136,74,0.2) 60%, transparent 80%)",
        filter: "blur(1px)"
      }} />
      {/* Horizontal sunrise streak */}
      <div className="absolute" style={{
        left: 0, right: 0, top: "35%", height: "3px",
        background: "linear-gradient(90deg, transparent 5%, rgba(245,195,64,0.3) 25%, rgba(255,220,100,0.55) 55%, rgba(244,136,74,0.3) 78%, transparent 95%)",
        filter: "blur(2px)"
      }} />

      {/* ── Aqua ocean glow — left ── */}
      <div className="absolute" style={{
        left: "-8%", bottom: "15%", width: "50%", height: "55%",
        background: "radial-gradient(ellipse at 25% 65%, rgba(0,207,228,0.18) 0%, rgba(0,150,196,0.08) 50%, transparent 70%)"
      }} />

      {/* ── Miami skyline — clean geometric silhouette ── */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 1440 380"
        preserveAspectRatio="xMidYMax meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sky-far" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a3a5c" stopOpacity="0.55"/>
            <stop offset="100%" stopColor="#021428" stopOpacity="0.9"/>
          </linearGradient>
          <linearGradient id="sky-mid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#073050" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#010d1e" stopOpacity="1"/>
          </linearGradient>
          <linearGradient id="sky-near" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#040f1e" stopOpacity="0.95"/>
            <stop offset="100%" stopColor="#020a16" stopOpacity="1"/>
          </linearGradient>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#006e8c" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#020e1c" stopOpacity="1"/>
          </linearGradient>
        </defs>

        {/* Far towers */}
        <g fill="url(#sky-far)">
          <rect x="60"  y="210" width="16" height="170" rx="1"/>
          <rect x="82"  y="188" width="12" height="192" rx="1"/>
          <rect x="100" y="200" width="18" height="180" rx="1"/>
          <rect x="870" y="195" width="18" height="185" rx="1"/>
          <rect x="894" y="175" width="14" height="205" rx="1"/>
          <rect x="914" y="190" width="20" height="190" rx="1"/>
          <rect x="1260" y="205" width="16" height="175" rx="1"/>
          <rect x="1282" y="182" width="12" height="198" rx="1"/>
          <rect x="1300" y="196" width="18" height="184" rx="1"/>
        </g>

        {/* Main Brickell silhouette */}
        <g fill="url(#sky-mid)">
          {/* Left cluster */}
          <rect x="30"  y="265" width="22" height="115" rx="1"/>
          <rect x="56"  y="238" width="17" height="142" rx="1"/>
          <rect x="59"  y="228" width="5"  height="12"  rx="1"/>
          <rect x="77"  y="252" width="24" height="128" rx="1"/>
          <rect x="105" y="235" width="18" height="145" rx="1"/>
          <rect x="108" y="223" width="6"  height="14"  rx="1"/>
          <rect x="127" y="270" width="16" height="110" rx="1"/>
          <rect x="147" y="250" width="26" height="130" rx="1"/>
          <rect x="177" y="232" width="18" height="148" rx="1"/>
          <rect x="199" y="214" width="34" height="166" rx="1"/>
          <rect x="203" y="202" width="26" height="14"  rx="1"/>
          <rect x="207" y="190" width="18" height="14"  rx="1"/>
          <rect x="237" y="244" width="20" height="136" rx="1"/>
          <rect x="261" y="265" width="18" height="115" rx="1"/>

          {/* Center — Brickell tower cluster */}
          <rect x="460" y="148" width="30" height="232" rx="1"/>
          <rect x="464" y="135" width="22" height="15"  rx="1"/>
          <rect x="468" y="122" width="14" height="15"  rx="1"/>
          <rect x="471" y="109" width="7"  height="15"  rx="1"/>
          <rect x="473" y="97"  width="3"  height="14"  rx="1"/>
          <rect x="494" y="172" width="26" height="208" rx="1"/>
          <rect x="524" y="185" width="36" height="195" rx="1"/>
          <rect x="528" y="173" width="28" height="14"  rx="1"/>
          <rect x="564" y="160" width="22" height="220" rx="1"/>
          <rect x="568" y="147" width="14" height="15"  rx="1"/>
          {/* Panorama — tallest */}
          <rect x="590" y="118" width="32" height="262" rx="1"/>
          <rect x="594" y="104" width="24" height="16"  rx="1"/>
          <rect x="598" y="90"  width="16" height="16"  rx="1"/>
          <rect x="602" y="76"  width="8"  height="16"  rx="1"/>
          <rect x="604" y="62"  width="4"  height="16"  rx="1"/>
          <rect x="626" y="142" width="26" height="238" rx="1"/>
          <rect x="656" y="160" width="22" height="220" rx="1"/>
          <rect x="682" y="138" width="30" height="242" rx="1"/>
          <rect x="686" y="124" width="22" height="16"  rx="1"/>
          <rect x="716" y="155" width="24" height="225" rx="1"/>
          <rect x="744" y="170" width="28" height="210" rx="1"/>
          <rect x="776" y="148" width="26" height="232" rx="1"/>
          <rect x="780" y="135" width="18" height="15"  rx="1"/>
          <rect x="806" y="163" width="22" height="217" rx="1"/>
          <rect x="832" y="175" width="24" height="205" rx="1"/>

          {/* Right cluster */}
          <rect x="968"  y="248" width="24" height="132" rx="1"/>
          <rect x="996"  y="228" width="28" height="152" rx="1"/>
          <rect x="1000" y="216" width="20" height="14"  rx="1"/>
          <rect x="1028" y="244" width="18" height="136" rx="1"/>
          <rect x="1050" y="258" width="24" height="122" rx="1"/>
          <rect x="1078" y="238" width="20" height="142" rx="1"/>
          <rect x="1102" y="265" width="16" height="115" rx="1"/>
          <rect x="1122" y="250" width="22" height="130" rx="1"/>
          <rect x="1148" y="268" width="18" height="112" rx="1"/>
          <rect x="1170" y="245" width="24" height="135" rx="1"/>
          <rect x="1198" y="260" width="20" height="120" rx="1"/>
          <rect x="1222" y="272" width="16" height="108" rx="1"/>
          <rect x="1242" y="255" width="26" height="125" rx="1"/>
          <rect x="1272" y="268" width="20" height="112" rx="1"/>
          <rect x="1296" y="258" width="24" height="122" rx="1"/>
          <rect x="1324" y="270" width="18" height="110" rx="1"/>
          <rect x="1346" y="260" width="26" height="120" rx="1"/>
          <rect x="1376" y="272" width="20" height="108" rx="1"/>
          <rect x="1400" y="258" width="28" height="122" rx="1"/>
        </g>

        {/* Ground base */}
        <rect x="0" y="330" width="1440" height="50" fill="url(#sky-near)"/>

        {/* Water reflection band */}
        <path d="M0 278 C240 270 480 285 720 275 C960 265 1200 282 1440 274 L1440 335 L0 335 Z" fill="url(#water)"/>

        {/* Sun reflection on water */}
        <path d="M780 278 Q900 265 1020 278 L1040 335 Q900 320 760 335 Z" fill="rgba(245,195,64,0.15)" filter="url(#blur4)"/>

        {/* Abstract wave curves */}
        <path d="M-60 298 C180 287 420 304 660 293 C900 282 1140 300 1380 290 C1440 288 1440 298 1440 298" stroke="rgba(0,207,228,0.28)" strokeWidth="1.5" fill="none"/>
        <path d="M-60 312 C200 300 440 316 680 306 C920 296 1160 314 1400 304 C1430 303 1440 312 1440 312" stroke="rgba(0,207,228,0.16)" strokeWidth="1" fill="none"/>
        <path d="M0 326 C240 314 480 330 720 320 C960 310 1200 328 1440 318 L1440 380 L0 380 Z" fill="rgba(1,20,36,0.95)"/>

        {/* Warm building window lights */}
        <g fill="rgba(245,195,64,0.45)">
          {[[464,158,3,2],[474,175,3,2],[466,190,3,2],
            [594,120,3,2],[600,136,3,2],[606,152,3,2],[594,150,3,2],
            [686,144,3,2],[692,160,3,2],[686,174,3,2],
            [1000,230,3,2],[1006,245,3,2],[1002,260,3,2]
          ].map(([x,y,w,h],i)=>(
            <rect key={i} x={x} y={y} width={w} height={h} rx="0.5"/>
          ))}
        </g>
        <g fill="rgba(0,207,228,0.22)">
          {[[470,165,3,2],[598,128,3,2],[690,152,3,2]].map(([x,y,w,h],i)=>(
            <rect key={i} x={x} y={y} width={w} height={h} rx="0.5"/>
          ))}
        </g>

        <defs>
          <filter id="blur4"><feGaussianBlur stdDeviation="4"/></filter>
        </defs>
      </svg>

      {/* ── Subtle dot grid ── */}
      <div className="absolute inset-0 dot-grid-dark" style={{ opacity: 0.3 }}/>

      {/* ── Edge circuit lines ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        <g opacity="0.16" stroke="#00cfe4" strokeWidth="1">
          <path d="M0 170 H70 V230 H44 V288"/>
          <path d="M0 265 H38 V315 H92 V268 H148"/>
          <circle cx="70"  cy="230" r="2.5" fill="#00cfe4" opacity="0.9"/>
          <circle cx="92"  cy="315" r="2"   fill="#00cfe4" opacity="0.6"/>
          <path d="M1440 185 H1372 V248 H1400 V308"/>
          <path d="M1440 290 H1404 V338 H1338 V292 H1278"/>
          <circle cx="1372" cy="248" r="2.5" fill="#00cfe4" opacity="0.9"/>
          <circle cx="1338" cy="338" r="2"   fill="#00cfe4" opacity="0.6"/>
        </g>
      </svg>

      {/* ── Content readability ── */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 75% 55% at 50% 38%, transparent 25%, rgba(1,8,20,0.45) 100%)"
      }}/>
      <div className="absolute bottom-0 inset-x-0 h-36" style={{
        background: "linear-gradient(to bottom, transparent, rgba(1,8,20,0.85))"
      }}/>
    </div>
  );
}
