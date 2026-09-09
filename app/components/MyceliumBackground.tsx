export default function MyceliumBackground() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 320"
        className="block h-[220px] w-full sm:h-[260px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="#d8d5cc"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Main network */}
          <g opacity="0.34" strokeWidth="1.2">
            <path d="M40 300 C150 270 170 215 260 205 C340 195 365 245 445 225 C525 205 545 145 630 150 C715 155 735 205 820 190 C900 175 930 110 1015 120 C1100 130 1125 175 1210 155 C1290 135 1320 95 1400 80" />

            <path d="M260 205 C245 165 215 135 185 105" />
            <path d="M260 205 C285 170 300 135 300 95" />
            <path d="M260 205 C305 215 335 205 365 175" />

            <path d="M445 225 C430 185 435 150 420 120" />
            <path d="M445 225 C475 190 505 180 540 175" />

            <path d="M630 150 C600 120 585 90 595 55" />
            <path d="M630 150 C665 120 690 105 730 100" />
            <path d="M630 150 C655 170 675 195 680 230" />

            <path d="M820 190 C805 155 815 120 850 90" />
            <path d="M820 190 C855 205 890 205 925 185" />

            <path d="M1015 120 C990 85 995 55 1020 30" />
            <path d="M1015 120 C1050 90 1085 80 1115 65" />
            <path d="M1210 155 C1195 120 1210 90 1245 65" />
            <path d="M1210 155 C1240 165 1275 155 1300 130" />
          </g>

          {/* Finer branches */}
          <g opacity="0.22" strokeWidth="0.9">
            <path d="M185 105 C160 85 145 65 150 40" />
            <path d="M185 105 C175 125 150 140 125 142" />

            <path d="M300 95 C330 70 345 50 340 25" />
            <path d="M300 95 C280 70 270 45 280 20" />

            <path d="M420 120 C395 95 385 70 395 45" />
            <path d="M540 175 C565 150 570 120 560 95" />

            <path d="M595 55 C575 35 570 20 580 5" />
            <path d="M730 100 C755 75 775 60 800 55" />
            <path d="M680 230 C705 245 720 260 720 280" />

            <path d="M850 90 C870 65 875 40 865 20" />
            <path d="M925 185 C955 175 975 155 980 130" />

            <path d="M1020 30 C1040 20 1060 10 1075 0" />
            <path d="M1115 65 C1140 45 1165 40 1185 45" />

            <path d="M1245 65 C1260 40 1280 25 1305 20" />
            <path d="M1300 130 C1330 115 1350 100 1360 75" />
            y
            
          </g>
        </g>
      </svg>
    </div>
  );
}