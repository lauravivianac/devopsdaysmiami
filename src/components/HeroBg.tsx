export default function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ── Sky ── */}
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0a2a3a" />
            <stop offset="25%"  stopColor="#0d3d50" />
            <stop offset="52%"  stopColor="#1a6070" />
            <stop offset="68%"  stopColor="#c05020" stopOpacity="0.85" />
            <stop offset="78%"  stopColor="#e8703a" stopOpacity="0.9" />
            <stop offset="86%"  stopColor="#f4a050" />
            <stop offset="92%"  stopColor="#f9c878" />
            <stop offset="100%" stopColor="#fbd98a" />
          </linearGradient>

          {/* Sun radial */}
          <radialGradient id="sun" cx="58%" cy="58%" r="12%">
            <stop offset="0%"   stopColor="#fff8e0" />
            <stop offset="18%"  stopColor="#fde68a" />
            <stop offset="45%"  stopColor="#fb923c" stopOpacity="0.7" />
            <stop offset="75%"  stopColor="#f97316" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Sun halo bloom */}
          <radialGradient id="sunBloom" cx="58%" cy="58%" r="35%">
            <stop offset="0%"   stopColor="#fde68a" stopOpacity="0.55" />
            <stop offset="30%"  stopColor="#fb923c" stopOpacity="0.25" />
            <stop offset="60%"  stopColor="#f97316" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Ocean body */}
          <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1a7090" />
            <stop offset="40%"  stopColor="#0d5570" />
            <stop offset="100%" stopColor="#093a52" />
          </linearGradient>

          {/* Shallow bay – turquoise near beach */}
          <linearGradient id="bay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#20a0b8" stopOpacity="0.9" />
            <stop offset="60%"  stopColor="#26b8cc" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#40d0d8" stopOpacity="0.7" />
          </linearGradient>

          {/* Sand */}
          <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#d4956a" />
            <stop offset="25%"  stopColor="#e8b080" />
            <stop offset="60%"  stopColor="#f0c898" />
            <stop offset="100%" stopColor="#f8deb8" />
          </linearGradient>

          {/* Wet sand at waterline */}
          <linearGradient id="wetSand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#b8845c" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c89870" stopOpacity="0.6" />
          </linearGradient>

          {/* Sun reflection on ocean */}
          <linearGradient id="sunReflect" x1="0.3" y1="0" x2="0.7" y2="1">
            <stop offset="0%"   stopColor="#fde68a" stopOpacity="0.5" />
            <stop offset="40%"  stopColor="#fb923c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0.05" />
          </linearGradient>

          {/* Sky haze at horizon */}
          <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#f97316" stopOpacity="0" />
            <stop offset="50%"  stopColor="#fbd98a" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#fbd98a" stopOpacity="0" />
          </linearGradient>

          {/* Dark content overlay */}
          <radialGradient id="contentShield" cx="50%" cy="42%" r="48%">
            <stop offset="0%"   stopColor="#041220" stopOpacity="0.62" />
            <stop offset="70%"  stopColor="#041220" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#041220" stopOpacity="0" />
          </radialGradient>

          {/* Circuit line fade */}
          <linearGradient id="cktL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#00D5E8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00D5E8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cktR" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%"   stopColor="#00D5E8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00D5E8" stopOpacity="0" />
          </linearGradient>

          {/* Filters */}
          <filter id="blur6"><feGaussianBlur stdDeviation="6" /></filter>
          <filter id="blur14"><feGaussianBlur stdDeviation="14" /></filter>
          <filter id="blur3"><feGaussianBlur stdDeviation="3" /></filter>
          <filter id="blur1"><feGaussianBlur stdDeviation="1" /></filter>
        </defs>

        {/* ══ SKY ══════════════════════════════════════════════════════════ */}
        <rect width="1440" height="900" fill="url(#sky)" />

        {/* Atmospheric haze band at horizon */}
        <rect x="0" y="380" width="1440" height="180" fill="url(#haze)" filter="url(#blur14)" />

        {/* Sun bloom */}
        <rect x="0" y="0" width="1440" height="900" fill="url(#sunBloom)" />

        {/* Sun disc */}
        <circle cx="836" cy="522" r="66" fill="url(#sun)" filter="url(#blur1)" />
        <circle cx="836" cy="522" r="52" fill="#fff7d4" opacity="0.92" />
        <circle cx="836" cy="522" r="38" fill="#fffae8" opacity="0.98" />

        {/* Horizontal light streak */}
        <rect x="0" y="520" width="1440" height="6" fill="#fde68a" opacity="0.12" filter="url(#blur6)" />

        {/* Fine clouds */}
        <g opacity="0.22" fill="#fbd98a" filter="url(#blur6)">
          <ellipse cx="240"  cy="220" rx="180" ry="22" />
          <ellipse cx="480"  cy="180" rx="140" ry="16" />
          <ellipse cx="1050" cy="200" rx="160" ry="18" />
          <ellipse cx="1280" cy="240" rx="120" ry="14" />
          <ellipse cx="900"  cy="160" rx="100" ry="12" />
          <ellipse cx="150"  cy="310" rx="100" ry="10" />
          <ellipse cx="1350" cy="300" rx="90"  ry="10" />
        </g>
        {/* Warm cloud undersides */}
        <g opacity="0.12" fill="#fb923c" filter="url(#blur6)">
          <ellipse cx="240"  cy="232" rx="170" ry="14" />
          <ellipse cx="1050" cy="212" rx="150" ry="12" />
        </g>

        {/* ══ MIAMI SKYLINE ════════════════════════════════════════════════ */}
        {/* Far buildings – atmospheric, muted blue-grey */}
        <g opacity="0.28" fill="#4a8aaa" filter="url(#blur6)">
          <rect x="80"  y="340" width="20" height="190" />
          <rect x="106" y="310" width="16" height="220" />
          <rect x="128" y="330" width="24" height="200" />
          <rect x="900" y="360" width="18" height="170" />
          <rect x="924" y="335" width="22" height="195" />
          <rect x="952" y="350" width="16" height="180" />
        </g>

        {/* Mid skyline – main Brickell silhouette, warm teal-grey */}
        <g fill="#1a4a5e" opacity="0.82">
          {/* Left cluster */}
          <rect x="50"  y="430" width="26" height="100" />
          <rect x="80"  y="400" width="20" height="130" />
          <rect x="84"  y="390" width="4"  height="12" />  {/* antenna */}
          <rect x="105" y="415" width="28" height="115" />
          <rect x="138" y="395" width="22" height="135" />
          <rect x="142" y="382" width="6"  height="15" />
          <rect x="164" y="435" width="22" height="95" />
          <rect x="190" y="410" width="30" height="120" />
          <rect x="224" y="390" width="22" height="140" />
          <rect x="250" y="375" width="38" height="155" />
          <rect x="254" y="362" width="30" height="15" />
          <rect x="258" y="348" width="22" height="16" />
          <rect x="292" y="405" width="26" height="125" />
          <rect x="322" y="430" width="20" height="100" />

          {/* Center – Brickell towers */}
          <rect x="560" y="255" width="34" height="275" />
          <rect x="564" y="242" width="26" height="15" />
          <rect x="568" y="228" width="18" height="16" />
          <rect x="572" y="215" width="10" height="15" />
          <rect x="575" y="204" width="4"  height="13" />
          <rect x="598" y="295" width="32" height="235" />
          <ellipse cx="614" cy="295" rx="16" ry="9" />
          <rect x="634" y="315" width="40" height="215" />
          <rect x="638" y="304" width="32" height="13" />
          <rect x="642" y="290" width="24" height="16" />
          <rect x="678" y="330" width="28" height="200" />
          <rect x="681" y="318" width="22" height="14" />
          {/* Twin towers */}
          <rect x="710" y="305" width="22" height="225" />
          <rect x="736" y="290" width="26" height="240" />
          <rect x="739" y="278" width="20" height="14" />
          <rect x="743" y="265" width="12" height="15" />
          <rect x="746" y="252" width="6"  height="15" />
          {/* Panorama – tallest */}
          <rect x="766" y="232" width="36" height="298" />
          <rect x="770" y="220" width="28" height="14" />
          <rect x="774" y="207" width="20" height="15" />
          <rect x="778" y="194" width="12" height="15" />
          <rect x="781" y="182" width="6"  height="14" />
          <rect x="783" y="169" width="2"  height="15" />
          <rect x="806" y="278" width="30" height="252" />
          <rect x="840" y="295" width="26" height="235" />
          <rect x="870" y="315" width="34" height="215" />
          <rect x="874" y="302" width="26" height="15" />
          {/* Icon style */}
          <rect x="908" y="282" width="24" height="248" />
          <rect x="936" y="268" width="28" height="262" />
          <rect x="940" y="254" width="20" height="16" />
          <rect x="944" y="240" width="12" height="16" />
          <rect x="968" y="286" width="24" height="244" />

          {/* Right cluster */}
          <rect x="1040" y="390" width="26" height="140" />
          <rect x="1070" y="368" width="32" height="162" />
          <rect x="1074" y="354" width="24" height="16" />
          <rect x="1106" y="382" width="22" height="148" />
          <rect x="1132" y="400" width="28" height="130" />
          <rect x="1164" y="378" width="24" height="152" />
          <rect x="1192" y="408" width="20" height="122" />
          <rect x="1216" y="432" width="18" height="98" />
          <rect x="1238" y="416" width="26" height="114" />
          <rect x="1268" y="440" width="16" height="90" />
          <rect x="1288" y="428" width="22" height="102" />
        </g>

        {/* Near silhouette layer – darkest, no blur */}
        <g fill="#0d2e3e" opacity="0.7">
          <rect x="0"   y="498" width="70"  height="140" />
          <rect x="220" y="480" width="55"  height="158" />
          <rect x="275" y="492" width="48"  height="146" />
          <rect x="323" y="472" width="38"  height="166" />
          <rect x="990" y="488" width="50"  height="150" />
          <rect x="1040" y="478" width="42" height="160" />
          <rect x="1300" y="490" width="45" height="148" />
          <rect x="1345" y="480" width="38" height="158" />
          <rect x="1383" y="492" width="57" height="146" />
        </g>

        {/* Building window lights – warm */}
        <g fill="#fde68a" opacity="0.4">
          {[
            [568,265,4,3],[580,282,4,3],[592,298,4,3],[568,295,4,3],[580,312,4,3],
            [770,242,5,3],[780,260,5,3],[790,278,5,3],[770,270,5,3],[780,288,5,3],
            [740,298,4,3],[742,315,4,3],[736,308,4,3],
            [912,292,4,3],[924,308,4,3],[940,276,4,3],[952,292,4,3],
            [638,330,4,3],[656,345,4,3],[674,332,4,3],
            [874,322,4,3],[898,338,4,3],[910,312,4,3],
            [1074,375,4,3],[1088,390,4,3],[1104,372,4,3],
          ].map(([x,y,w,h],i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="1" />
          ))}
        </g>
        {/* Cyan accent lights */}
        <g fill="#00D5E8" opacity="0.18">
          {[
            [575,275,4,2],[586,292,4,2],[775,250,4,2],[785,268,4,2],
            [920,298,4,2],[936,282,4,2],[1080,380,4,2],
          ].map(([x,y,w,h],i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="1" />
          ))}
        </g>

        {/* ══ HORIZON WATER / BAY ══════════════════════════════════════════ */}
        <rect x="0" y="528" width="1440" height="80" fill="url(#ocean)" />

        {/* Sun reflection path on water */}
        <path
          d="M680 530 Q836 510 990 530 L1010 608 Q836 580 662 608 Z"
          fill="url(#sunReflect)"
          filter="url(#blur3)"
          opacity="0.7"
        />

        {/* Horizon glow line */}
        <rect x="0" y="525" width="1440" height="5" fill="#fbd98a" opacity="0.28" filter="url(#blur6)" />

        {/* ══ TURQUOISE BAY / BISCAYNE ══════════════════════════════════════ */}
        {/* Sweeping turquoise shallow water across center */}
        <path
          d="M0 580 C200 565 400 590 600 575 C800 560 1000 590 1200 572 C1320 562 1400 580 1440 575 L1440 680 C1200 665 900 680 600 668 C300 656 100 672 0 665 Z"
          fill="url(#bay)"
          opacity="0.88"
        />

        {/* Shallow surf shimmer */}
        <path
          d="M0 620 C180 608 360 625 540 614 C720 603 900 622 1080 612 C1260 602 1380 616 1440 610 L1440 638 C1200 625 900 638 600 630 C300 622 100 634 0 628 Z"
          fill="#40d8e0"
          opacity="0.35"
        />

        {/* Wave lines on bay */}
        <g stroke="#a0eef5" strokeWidth="1.5" fill="none" opacity="0.22">
          <path d="M100 595 Q300 588 500 595 Q700 602 900 593 Q1100 584 1300 595" />
          <path d="M0  610 Q250 602 500 610 Q750 618 1000 608 Q1200 598 1440 610" />
          <path d="M50  628 Q350 618 650 628 Q950 638 1250 626 Q1360 622 1440 628" />
        </g>

        {/* ══ BEACH SAND ═══════════════════════════════════════════════════ */}
        {/* Main sand body */}
        <path
          d="M0 665 C200 650 500 672 800 658 C1100 644 1300 662 1440 652 L1440 900 L0 900 Z"
          fill="url(#sand)"
        />

        {/* Wet sand at waterline */}
        <path
          d="M0 665 C200 650 500 672 800 658 C1100 644 1300 662 1440 652 L1440 695 C1200 684 900 698 600 688 C300 678 100 690 0 682 Z"
          fill="url(#wetSand)"
          opacity="0.75"
        />

        {/* Sand texture ripples */}
        <g stroke="#c8906a" strokeWidth="0.8" fill="none" opacity="0.15">
          <path d="M100 720 Q400 710 700 722 Q1000 734 1300 718" />
          <path d="M50  760 Q350 748 650 762 Q950 776 1250 758" />
          <path d="M0   800 Q300 788 600 802 Q900 816 1200 798 Q1350 790 1440 800" />
          <path d="M150 840 Q450 828 750 842 Q1050 856 1350 836" />
        </g>

        {/* Foam edge at waterline */}
        <path
          d="M0 666 C120 660 240 668 380 663 C520 658 660 668 800 661 C940 654 1080 665 1220 659 C1320 655 1400 664 1440 660"
          stroke="white" strokeWidth="2" fill="none" opacity="0.35"
        />

        {/* ══ PALM TREES ════════════════════════════════════════════════════ */}
        {/* Far-left palm – thinner, lighter */}
        <g opacity="0.7" fill="none">
          <path d="M68 900 Q74 820 82 755 Q88 715 96 690" stroke="#1a3828" strokeWidth="8" strokeLinecap="round"/>
          <path d="M96 690 Q58 665 30 648 Q50 652 56 660 Q36 642 18 634" stroke="#1a3828" strokeWidth="5" strokeLinecap="round"/>
          <path d="M96 690 Q80 654 74 626 Q78 634 84 642 Q78 620 72 604" stroke="#1a3828" strokeWidth="5" strokeLinecap="round"/>
          <path d="M96 690 Q108 650 116 622 Q112 630 110 638 Q120 616 126 600" stroke="#1a3828" strokeWidth="5" strokeLinecap="round"/>
          <path d="M96 690 Q120 662 138 646 Q128 652 128 660 Q140 642 148 632" stroke="#1a3828" strokeWidth="4" strokeLinecap="round"/>
          {/* coconuts */}
          <circle cx="96" cy="692" r="5" fill="#2a4a1a" opacity="0.8"/>
          <circle cx="90" cy="698" r="4" fill="#2a4a1a" opacity="0.7"/>
        </g>

        {/* Main left palm – tall, prominent */}
        <g opacity="0.88" fill="none">
          <path d="M152 900 Q160 800 172 720 Q180 668 192 638" stroke="#152e22" strokeWidth="14" strokeLinecap="round"/>
          <path d="M152 900 Q155 860 158 820" stroke="#1a3828" strokeWidth="12" strokeLinecap="round" opacity="0.5"/>
          {/* Fronds */}
          <path d="M192 638 Q142 605 106 582 Q130 590 136 600 Q108 578 86 566" stroke="#1a3828" strokeWidth="8" strokeLinecap="round"/>
          <path d="M192 638 Q170 596 160 565 Q165 575 172 582 Q162 558 156 540" stroke="#1a3828" strokeWidth="8" strokeLinecap="round"/>
          <path d="M192 638 Q206 590 214 558 Q210 568 208 578 Q220 552 228 534" stroke="#1a3828" strokeWidth="8" strokeLinecap="round"/>
          <path d="M192 638 Q222 610 248 590 Q236 598 236 608 Q252 588 262 576" stroke="#1a3828" strokeWidth="7" strokeLinecap="round"/>
          <path d="M192 638 Q188 600 184 572 Q186 582 190 590" stroke="#1a3828" strokeWidth="6" strokeLinecap="round"/>
          <path d="M192 638 Q168 618 152 608 Q160 610 162 618" stroke="#1a3828" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="192" cy="640" r="7" fill="#1e3c20" opacity="0.9"/>
          <circle cx="182" cy="648" r="5" fill="#1e3c20" opacity="0.8"/>
          <circle cx="200" cy="648" r="5" fill="#1e3c20" opacity="0.7"/>
        </g>

        {/* Far-right palm */}
        <g opacity="0.7" fill="none">
          <path d="M1372 900 Q1366 820 1358 755 Q1352 715 1344 690" stroke="#1a3828" strokeWidth="8" strokeLinecap="round"/>
          <path d="M1344 690 Q1382 665 1410 648 Q1390 652 1384 660 Q1404 642 1422 634" stroke="#1a3828" strokeWidth="5" strokeLinecap="round"/>
          <path d="M1344 690 Q1360 654 1366 626 Q1362 634 1356 642 Q1362 620 1368 604" stroke="#1a3828" strokeWidth="5" strokeLinecap="round"/>
          <path d="M1344 690 Q1332 650 1324 622 Q1328 630 1330 638 Q1320 616 1314 600" stroke="#1a3828" strokeWidth="5" strokeLinecap="round"/>
          <path d="M1344 690 Q1320 662 1302 646 Q1312 652 1312 660 Q1300 642 1292 632" stroke="#1a3828" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="1344" cy="692" r="5" fill="#2a4a1a" opacity="0.8"/>
        </g>

        {/* Main right palm */}
        <g opacity="0.88" fill="none">
          <path d="M1288 900 Q1280 800 1268 720 Q1260 668 1248 638" stroke="#152e22" strokeWidth="14" strokeLinecap="round"/>
          <path d="M1248 638 Q1298 605 1334 582 Q1310 590 1304 600 Q1332 578 1354 566" stroke="#1a3828" strokeWidth="8" strokeLinecap="round"/>
          <path d="M1248 638 Q1270 596 1280 565 Q1275 575 1268 582 Q1278 558 1284 540" stroke="#1a3828" strokeWidth="8" strokeLinecap="round"/>
          <path d="M1248 638 Q1234 590 1226 558 Q1230 568 1232 578 Q1220 552 1212 534" stroke="#1a3828" strokeWidth="8" strokeLinecap="round"/>
          <path d="M1248 638 Q1218 610 1192 590 Q1204 598 1204 608 Q1188 588 1178 576" stroke="#1a3828" strokeWidth="7" strokeLinecap="round"/>
          <path d="M1248 638 Q1252 600 1256 572 Q1254 582 1250 590" stroke="#1a3828" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="1248" cy="640" r="7" fill="#1e3c20" opacity="0.9"/>
          <circle cx="1258" cy="648" r="5" fill="#1e3c20" opacity="0.8"/>
          <circle cx="1240" cy="648" r="5" fill="#1e3c20" opacity="0.7"/>
        </g>

        {/* ══ CIRCUIT LINES ════════════════════════════════════════════════ */}
        <g opacity="0.18" stroke="url(#cktL)" strokeWidth="1" fill="none">
          <path d="M0 180 H100 V240 H70 V300" />
          <path d="M0 260 H50 V320 H120 V270 H180" />
          <path d="M0 330 H90 V370" />
          <circle cx="100" cy="240" r="3" fill="#00D5E8" stroke="none" opacity="0.7"/>
          <circle cx="120" cy="320" r="2" fill="#00D5E8" stroke="none" opacity="0.5"/>
        </g>
        <g opacity="0.18" stroke="url(#cktR)" strokeWidth="1" fill="none">
          <path d="M1440 200 H1340 V260 H1370 V320" />
          <path d="M1440 280 H1390 V340 H1300 V290 H1240" />
          <circle cx="1340" cy="260" r="3" fill="#00D5E8" stroke="none" opacity="0.7"/>
          <circle cx="1300" cy="340" r="2" fill="#00D5E8" stroke="none" opacity="0.5"/>
        </g>

        {/* ══ CONTENT READABILITY SHIELD ════════════════════════════════════ */}
        <rect width="1440" height="900" fill="url(#contentShield)" />

        {/* Extra dark band behind text area */}
        <rect x="200" y="90" width="1040" height="460" rx="60"
          fill="#041220" opacity="0.22" filter="url(#blur14)" />
      </svg>
    </div>
  );
}
