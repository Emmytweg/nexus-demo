import { motion } from "framer-motion";

export default function AnimatedSVG() {
  return (
    <motion.svg
      width="90"
      height="93"
      viewBox="0 0 90 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover="hover"
      initial="rest"
    >
      <g
        opacity="0.25"
        clipPath="url(#clip0_1_6983)"
        filter="url(#filter0_d_1_6983)"
      >
        {/* Blue Shape */}
        <path
          d="M22.7823 41.2342L27.6207 10.4509C36.8699 11.9047 45.6726 15.4237 53.3751 20.7465C61.0776 26.0694 67.4818 33.0593 72.112 41.197C76.7422 49.3347 79.4794 58.4111 80.1202 67.7519C80.761 77.0927 79.2891 86.4578 75.8136 95.1516L46.8787 83.5846C48.6165 79.2377 49.3524 74.5551 49.032 69.8847C48.7116 65.2143 47.343 60.6762 45.0279 56.6073C42.7128 52.5384 39.5107 49.0435 35.6595 46.3821C31.8083 43.7206 27.4069 41.9611 22.7823 41.2342Z"
          fill="#00AEEF"
          stroke="white"
          strokeWidth="0.700707"
        />

        {/* Gray Shape - Animated */}
        <motion.path
          d="M-11.1342 83.2187L-40.2125 94.4202C-44.1451 84.2116 -45.3211 73.1477 -43.6225 62.3405C-41.9239 51.5333 -37.4104 41.3636 -30.5357 32.8536C-23.6611 24.3436 -14.6674 17.7931 -4.4588 13.8606C5.74983 9.92803 16.8138 8.75198 27.621 10.4506L22.7826 41.2339C17.379 40.3846 11.847 40.9726 6.74268 42.9389C1.63837 44.9052 -2.85844 48.1804 -6.29578 52.4354C-9.73311 56.6904 -11.9898 61.7753 -12.8392 67.1789C-13.6885 72.5825 -13.1005 78.1144 -11.1342 83.2187Z"
          fill="#0D1036"
          stroke="white"
          strokeWidth="0.700707"
          variants={{
            rest: { x: 0, opacity: 1 },
            hover: { x: -100, opacity: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
          }}
        />

        {/* Other parts remain static */}
        <path
          d="M8.57135 101.736L-0.801035 131.454C-9.73025 128.638 -17.9102 123.847 -24.7334 117.435C-31.5565 111.024 -36.8474 103.157 -40.213 94.4205L-11.1346 83.219C-9.45181 87.5874 -6.80637 91.5206 -3.39482 94.7263C0.0167415 97.932 4.10674 100.328 8.57135 101.736Z"
          fill="#33BEF2"
          stroke="white"
          strokeWidth="0.700707"
        />
        <path
          d="M46.8786 83.5846L75.8135 95.1517C69.9772 109.751 58.8385 121.605 44.6301 128.338C30.4217 135.07 14.1937 136.183 -0.801038 131.454L8.57134 101.736C16.0687 104.1 24.1827 103.544 31.2869 100.178C38.3911 96.8113 43.9605 90.8843 46.8786 83.5846Z"
          fill="#80D7F7"
          stroke="white"
          strokeWidth="0.700707"
        />
      </g>

      {/* SVG Definitions */}
      <defs>
        <filter
          id="filter0_d_1_6983"
          x="-53.2997"
          y="-4.83136"
          width="148.093"
          height="148.093"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.80283" dy="-2.80283" />
          <feGaussianBlur stdDeviation="1.40141" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0745098 0 0 0 0 0.215686 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_6983"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_6983"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_1_6983">
          <rect
            width="124.645"
            height="124.645"
            fill="white"
            transform="translate(-33.9461 0.774292) rotate(8.93245)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
}
