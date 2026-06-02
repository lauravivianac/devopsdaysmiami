export default function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ── Sky gradient ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sky */}
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#020d1b" />
            <stop offset="40%"  stopColor="#031B2E" />
            <stop offset="70%"  stopColor="#0a3050" />
            <stop offset="85%"  stopColor="#1a4a6e" />
            <stop offset="92%"  stopColor="#c25a30" stopOpacity="0.7" />
            <stop offset="97%"  stopColor="#FF6F61" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFD18A" stopOpacity="0.2" />
          </linearGradient>
          {/* Sun glow */}
          <radialGradient id="sunGlow" cx="72%" cy="62%" r="25%">
            <stop offset="0%"  stopColor="#FFD18A" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#FF9A4D" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#FF6F61" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          {/* Ocean */}
          <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#004e7c" />
            <stop offset="50%" stopColor="#003660" />
            <stop offset="100%" stopColor="#021628" />
          </linearGradient>
          {/* Ocean shimmer */}
          <linearGradient id="shimmer" x1="0.3" y1="0" x2="0.7" y2="0">
            <stop offset="0%"   stopColor="transparent" />
            <stop offset="40%"  stopColor="#00D5E8" stopOpacity="0.15" />
            <stop offset="60%"  stopColor="#FFD18A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          {/* Circuit fade */}
          <linearGradient id="circuitFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#00D5E8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D5E8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="circuitFadeR" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor="#00D5E8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D5E8" stopOpacity="0" />
          </linearGradient>
          <filter id="blur4">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <filter id="blur12">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="blur2">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Sky fill */}
        <rect width="1440" height="800" fill="url(#sky)" />

        {/* Ambient sun glow blob */}
        <ellipse cx="1040" cy="510" rx="280" ry="180" fill="url(#sunGlow)" filter="url(#blur12)" />

        {/* Stars / subtle dots upper sky */}
        {[
          [120,60],[200,90],[340,40],[480,70],[580,30],[650,80],[800,50],[920,75],
          [1050,35],[1150,65],[1280,45],[1380,90],[90,120],[260,130],[420,110],
          [700,100],[1000,120],[1300,105],[1420,55],
        ].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="1" fill="white" opacity={0.3 + (i % 3) * 0.15} />
        ))}

        {/* ── Sun disc ── */}
        <circle cx="1040" cy="508" r="52" fill="#FFD18A" opacity="0.9" />
        <circle cx="1040" cy="508" r="44" fill="#FFE0A0" opacity="0.95" />
        {/* Horizontal reflection streak */}
        <rect x="600" y="506" width="840" height="4" rx="2" fill="#FFD18A" opacity="0.2" filter="url(#blur4)" />

        {/* ── Circuit lines – LEFT panel ── */}
        <g opacity="0.22" stroke="url(#circuitFade)" strokeWidth="1" fill="none">
          <path d="M0 200 H120 V260 H80 V320" />
          <path d="M0 280 H60 V340 H140 V300 H200" />
          <path d="M0 350 H100 V390" />
          <path d="M30 390 H90 V430 H50" />
          <circle cx="120" cy="260" r="3" fill="#00D5E8" stroke="none" opacity="0.8"/>
          <circle cx="80"  cy="320" r="2" fill="#00D5E8" stroke="none" opacity="0.6"/>
          <circle cx="140" cy="340" r="3" fill="#00D5E8" stroke="none" opacity="0.8"/>
          <circle cx="200" cy="300" r="2" fill="#00D5E8" stroke="none" opacity="0.6"/>
          <circle cx="100" cy="390" r="2" fill="#00D5E8" stroke="none" opacity="0.5"/>
        </g>
        {/* Circuit lines – RIGHT panel */}
        <g opacity="0.22" stroke="url(#circuitFadeR)" strokeWidth="1" fill="none">
          <path d="M1440 220 H1320 V280 H1360 V340" />
          <path d="M1440 300 H1380 V360 H1280 V310 H1220" />
          <path d="M1440 380 H1340 V420" />
          <path d="M1410 420 H1350 V460 H1390" />
          <circle cx="1320" cy="280" r="3" fill="#00D5E8" stroke="none" opacity="0.8"/>
          <circle cx="1360" cy="340" r="2" fill="#00D5E8" stroke="none" opacity="0.6"/>
          <circle cx="1280" cy="360" r="3" fill="#00D5E8" stroke="none" opacity="0.8"/>
          <circle cx="1220" cy="310" r="2" fill="#00D5E8" stroke="none" opacity="0.6"/>
        </g>

        {/* ── Miami Skyline – Brickell / Downtown ── */}
        {/* Rendered in 3 layers: far bg (blurred), mid, near */}

        {/* Far background towers – very muted */}
        <g opacity="0.18" fill="#6aaed4" filter="url(#blur4)">
          {/* Scattered towers far left */}
          <rect x="50"  y="380" width="18" height="140" />
          <rect x="75"  y="360" width="14" height="160" />
          <rect x="96"  y="370" width="20" height="150" />
          {/* Mid far */}
          <rect x="580" y="330" width="22" height="190" />
          <rect x="608" y="310" width="18" height="210" />
          <rect x="632" y="345" width="26" height="175" />
          <rect x="664" y="325" width="18" height="195" />
          {/* Far right */}
          <rect x="1300" y="360" width="18" height="160" />
          <rect x="1325" y="340" width="22" height="180" />
          <rect x="1354" y="355" width="16" height="165" />
          <rect x="1378" y="348" width="20" height="172" />
        </g>

        {/* ── MID skyline – main Miami buildings ── */}
        <g fill="#0c3050" opacity="0.85">
          {/* === LEFT CLUSTER — Edgewater / Wynwood area === */}
          <rect x="30"  y="430" width="28" height="95" />
          <rect x="64"  y="400" width="22" height="125" />
          {/* small antenna */}
          <rect x="73"  y="390" width="4"  height="12" />
          <rect x="90"  y="415" width="30" height="110" />
          <rect x="126" y="395" width="26" height="130" />
          <rect x="126" y="388" width="8"  height="9" />
          <rect x="157" y="440" width="24" height="85" />
          <rect x="185" y="420" width="32" height="105" />
          <rect x="222" y="400" width="24" height="125" />
          {/* stepped top */}
          <rect x="250" y="390" width="40" height="135" />
          <rect x="254" y="378" width="32" height="14" />
          <rect x="258" y="368" width="24" height="12" />
          <rect x="293" y="410" width="28" height="115" />
          <rect x="325" y="430" width="20" height="95" />

          {/* === CENTER – iconic Brickell silhouette === */}
          {/* Four Seasons / 1450 Brickell style: very tall stepped */}
          <rect x="580" y="260" width="36" height="265" />
          <rect x="584" y="248" width="28" height="14" />
          <rect x="588" y="236" width="20" height="14" />
          <rect x="592" y="224" width="12" height="14" />
          <rect x="595" y="214" width="6"  height="12" />  {/* antenna */}
          {/* 1000 Museum style bulge */}
          <rect x="620" y="300" width="34" height="225" />
          <ellipse cx="637" cy="300" rx="17" ry="10" />
          {/* Brickell City Centre */}
          <rect x="658" y="320" width="42" height="205" />
          <rect x="662" y="310" width="34" height="12" />
          <rect x="666" y="298" width="26" height="14" />
          {/* SLS Brickell style */}
          <rect x="704" y="335" width="30" height="190" />
          <rect x="707" y="324" width="24" height="13" />
          {/* JW Marriott Marquis style – two towers */}
          <rect x="738" y="310" width="24" height="215" />
          <rect x="766" y="295" width="28" height="230" />
          <rect x="769" y="284" width="22" height="13" />
          <rect x="773" y="272" width="14" height="14" />
          <rect x="776" y="262" width="8"  height="12" />
          {/* Panorama Tower – tallest in Miami */}
          <rect x="798" y="240" width="38" height="285" />
          <rect x="802" y="228" width="30" height="14" />
          <rect x="806" y="216" width="22" height="14" />
          <rect x="810" y="204" width="14" height="14" />
          <rect x="813" y="192" width="8"  height="14" />
          <rect x="815" y="180" width="4"  height="14" />  {/* spire */}
          {/* Adjacent towers */}
          <rect x="840" y="285" width="32" height="240" />
          <rect x="876" y="300" width="28" height="225" />
          <rect x="908" y="320" width="36" height="205" />
          <rect x="912" y="308" width="28" height="14" />
          {/* Icon Brickell style – 3 towers */}
          <rect x="948" y="285" width="26" height="240" />
          <rect x="978" y="270" width="30" height="255" />
          <rect x="982" y="256" width="22" height="16" />
          <rect x="986" y="242" width="14" height="16" />
          <rect x="1012" y="290" width="26" height="235" />

          {/* === RIGHT CLUSTER – Coconut Grove / Key Biscayne feel === */}
          <rect x="1090" y="390" width="28" height="135" />
          <rect x="1122" y="370" width="34" height="155" />
          <rect x="1126" y="358" width="26" height="14" />
          <rect x="1160" y="385" width="24" height="140" />
          <rect x="1188" y="400" width="30" height="125" />
          <rect x="1222" y="380" width="26" height="145" />
          <rect x="1252" y="410" width="22" height="115" />
          <rect x="1278" y="430" width="20" height="95" />
          <rect x="1302" y="415" width="28" height="110" />
          <rect x="1334" y="435" width="18" height="90" />
          <rect x="1356" y="425" width="24" height="100" />
          <rect x="1384" y="440" width="20" height="85" />
          <rect x="1408" y="430" width="32" height="95" />
        </g>

        {/* ── NEAR skyline – darker silhouette overlay ── */}
        <g fill="#041622" opacity="0.6">
          <rect x="0"    y="490" width="80"  height="140" />
          <rect x="240"  y="470" width="60"  height="160" />
          <rect x="300"  y="480" width="50"  height="150" />
          <rect x="350"  y="460" width="40"  height="170" />
          <rect x="1040" y="480" width="55"  height="150" />
          <rect x="1095" y="468" width="45"  height="162" />
          <rect x="1390" y="475" width="50"  height="155" />
        </g>

        {/* Building windows / lights – warm glow */}
        <g opacity="0.35" fill="#FFD18A">
          {[
            [590,270,4,3],[610,290,4,3],[630,310,4,3],[590,300,4,3],[610,320,4,3],
            [800,250,5,4],[820,270,5,4],[840,290,5,4],[800,280,5,4],[820,300,5,4],
            [765,300,4,3],[770,320,4,3],[750,310,4,3],
            [950,295,4,3],[965,310,4,3],[980,275,4,3],[995,290,4,3],
            [660,335,4,3],[680,350,4,3],[700,330,4,3],
            [910,325,4,3],[930,340,4,3],[940,310,4,3],
          ].map(([x,y,w,h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="1" />
          ))}
        </g>
        {/* Cyan accent windows */}
        <g opacity="0.2" fill="#00D5E8">
          {[
            [600,280,4,2],[620,300,4,2],[640,320,4,2],
            [808,255,4,2],[812,275,4,2],[816,295,4,2],
            [958,300,4,2],[968,315,4,2],[988,280,4,2],
          ].map(([x,y,w,h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="1" />
          ))}
        </g>

        {/* ── Horizon glow line ── */}
        <rect x="0" y="519" width="1440" height="3" fill="#FF9A4D" opacity="0.25" filter="url(#blur4)" />

        {/* ── Palm trees – LEFT ── */}
        <g opacity="0.85">
          {/* Left palm trunk */}
          <path d="M138 800 Q142 720 148 660 Q152 630 158 610" stroke="#0a2535" strokeWidth="10" fill="none" strokeLinecap="round"/>
          {/* Left fronds */}
          <path d="M158 610 Q120 580 90 560 Q110 565 118 572 Q100 555 82 548" stroke="#0d3040" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9"/>
          <path d="M158 610 Q145 570 135 540 Q140 548 148 555 Q138 535 130 520" stroke="#0d3040" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9"/>
          <path d="M158 610 Q170 565 178 535 Q174 544 172 552 Q182 530 188 515" stroke="#0d3040" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.85"/>
          <path d="M158 610 Q185 580 205 562 Q195 570 196 578 Q210 558 218 548" stroke="#0d3040" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.8"/>
          <path d="M158 610 Q155 585 150 565 Q153 572 156 580" stroke="#0d3040" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.7"/>
          {/* Second left palm */}
          <path d="M58 800 Q62 740 70 680 Q76 645 85 620" stroke="#08202e" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <path d="M85 620 Q55 592 30 576 Q48 582 52 590 Q36 570 24 562" stroke="#0a2a38" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8"/>
          <path d="M85 620 Q72 585 68 558 Q72 565 78 572 Q72 550 68 536" stroke="#0a2a38" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8"/>
          <path d="M85 620 Q100 585 110 562 Q104 570 105 578 Q115 556 120 540" stroke="#0a2a38" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.75"/>
          <path d="M85 620 Q108 594 124 580 Q116 585 118 592 Q128 574 134 564" stroke="#0a2a38" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.7"/>
        </g>

        {/* ── Palm trees – RIGHT ── */}
        <g opacity="0.85">
          <path d="M1302 800 Q1298 720 1292 660 Q1288 630 1282 610" stroke="#0a2535" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <path d="M1282 610 Q1320 580 1350 560 Q1330 565 1322 572 Q1340 555 1358 548" stroke="#0d3040" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9"/>
          <path d="M1282 610 Q1295 570 1305 540 Q1300 548 1292 555 Q1302 535 1310 520" stroke="#0d3040" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9"/>
          <path d="M1282 610 Q1270 565 1262 535 Q1266 544 1268 552 Q1258 530 1252 515" stroke="#0d3040" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.85"/>
          <path d="M1282 610 Q1255 580 1235 562 Q1245 570 1244 578 Q1230 558 1222 548" stroke="#0d3040" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.8"/>
          {/* Second right palm */}
          <path d="M1390 800 Q1386 735 1378 672 Q1372 638 1362 614" stroke="#08202e" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <path d="M1362 614 Q1395 588 1418 572 Q1402 578 1398 586 Q1412 566 1422 556" stroke="#0a2a38" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8"/>
          <path d="M1362 614 Q1348 580 1344 552 Q1348 560 1354 566 Q1348 544 1344 530" stroke="#0a2a38" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.8"/>
          <path d="M1362 614 Q1342 588 1328 574 Q1336 579 1334 586 Q1324 568 1318 558" stroke="#0a2a38" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.75"/>
        </g>

        {/* ── Ocean ── */}
        {/* Base ocean body */}
        <rect x="0" y="522" width="1440" height="278" fill="url(#ocean)" />

        {/* Sun reflection on water */}
        <ellipse cx="1040" cy="525" rx="180" ry="18" fill="url(#shimmer)" filter="url(#blur2)" />

        {/* Wave 1 – far */}
        <path
          d="M0 535 C120 528 200 542 320 535 C440 528 560 545 680 535 C800 525 920 542 1040 535 C1160 528 1280 542 1440 533 L1440 550 L0 550 Z"
          fill="#005a8e" opacity="0.6"
        />
        {/* Wave 2 */}
        <path
          d="M0 555 C100 546 240 563 380 554 C520 545 640 562 760 554 C880 546 1020 564 1140 554 C1260 545 1360 560 1440 553 L1440 575 L0 575 Z"
          fill="#004070" opacity="0.7"
        />
        {/* Wave whitecaps */}
        <path
          d="M0 555 C80 551 140 558 200 554 C300 549 400 557 500 553"
          stroke="white" strokeWidth="1.5" fill="none" opacity="0.12"
        />
        <path
          d="M620 556 C720 550 820 558 940 554 C1020 550 1100 558 1200 554"
          stroke="white" strokeWidth="1.5" fill="none" opacity="0.12"
        />
        {/* Wave 3 – near */}
        <path
          d="M0 578 C160 568 300 582 460 574 C620 566 780 582 920 574 C1060 566 1200 582 1440 572 L1440 598 L0 598 Z"
          fill="#002f55" opacity="0.8"
        />
        {/* Foam lines on wave 3 */}
        <path
          d="M40 578 C100 574 180 581 260 577 C360 572 480 580 580 575"
          stroke="white" strokeWidth="1" fill="none" opacity="0.18"
        />
        <path
          d="M700 576 C820 571 940 580 1060 575 C1160 570 1280 578 1400 573"
          stroke="white" strokeWidth="1" fill="none" opacity="0.18"
        />
        {/* Wave 4 – foreground */}
        <path
          d="M0 606 C200 594 400 610 600 600 C800 590 1000 608 1200 598 C1300 593 1380 604 1440 600 L1440 640 L0 640 Z"
          fill="#001e3c" opacity="0.9"
        />
        {/* Wave 4 foam */}
        <path
          d="M0 606 C120 600 240 608 380 603 C500 598 640 607 760 602"
          stroke="#00D5E8" strokeWidth="1.5" fill="none" opacity="0.2"
        />
        <path
          d="M860 604 C980 598 1100 607 1220 602 C1320 598 1400 606 1440 603"
          stroke="#00D5E8" strokeWidth="1.5" fill="none" opacity="0.2"
        />

        {/* ── Bottom dark ocean floor ── */}
        <rect x="0" y="640" width="1440" height="160" fill="#010e1c" />

        {/* ── Subtle grid overlay on top of everything ── */}
        <g opacity="0.04" stroke="#00D5E8" strokeWidth="0.5">
          {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map(i => (
            <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="520" />
          ))}
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <line key={`h${i}`} x1="0" y1={i * 65} x2="1440" y2={i * 65} />
          ))}
        </g>

        {/* ── Text readability overlay – center band ── */}
        <radialGradient id="textBg" cx="50%" cy="50%" r="55%">
          <stop offset="0%"   stopColor="#031B2E" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#031B2E" stopOpacity="0" />
        </radialGradient>
        <rect x="280" y="80" width="880" height="500" rx="40" fill="url(#textBg)" />
      </svg>
    </div>
  );
}
