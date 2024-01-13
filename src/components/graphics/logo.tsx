import React from "react";

const Logo: React.FC = () => {
  return (
    <svg
      width="100"
      height="50"
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="50" fill="#FF7A00" />
      <path
        d="M32.9648 19.8C32.9648 21.4667 32.1782 22.3 30.6048 22.3C29.8182 22.3 29.0448 22.12 28.2848 21.76L27.6648 25.26H31.2248C31.2248 25.9667 31.0515 26.52 30.7048 26.92C30.3582 27.3067 29.8448 27.5 29.1648 27.5C28.7648 27.5 28.3715 27.44 27.9848 27.32C27.5982 27.2 27.3715 27.1067 27.3048 27.04L26.6448 30.6H28.4248C29.3182 30.6 29.9782 30.5333 30.4048 30.4C30.4982 30.52 30.5648 30.6867 30.6048 30.9C30.6582 31.1133 30.6848 31.3133 30.6848 31.5C30.6848 32.5 29.8582 33 28.2048 33H21.9048L24.3648 19.8H32.9648ZM42.1267 30.02C42.0601 30.38 42.0267 30.66 42.0267 30.86C42.0267 31.14 42.1067 31.38 42.2667 31.58C42.4267 31.78 42.6601 31.8933 42.9667 31.92C42.8201 32.4 42.5001 32.7667 42.0067 33.02C41.5134 33.2733 40.9867 33.4 40.4267 33.4C39.9601 33.4 39.5401 33.3 39.1667 33.1C38.8067 32.9133 38.5601 32.6333 38.4267 32.26C38.0934 32.62 37.6534 32.9 37.1067 33.1C36.5734 33.3 35.9867 33.4 35.3467 33.4C34.2134 33.4 33.3934 33.0667 32.8867 32.4C32.3934 31.7333 32.1467 30.7533 32.1467 29.46C32.1467 28.1133 32.3934 26.9067 32.8867 25.84C33.3801 24.7733 34.0934 23.9333 35.0267 23.32C35.9734 22.7067 37.1001 22.4 38.4067 22.4C38.9001 22.4 39.3267 22.4467 39.6867 22.54L40.3267 19L44.2867 18.6L42.1267 30.02ZM39.3667 23.96C39.2334 23.84 39.0667 23.7533 38.8667 23.7C38.6667 23.6333 38.4801 23.6 38.3067 23.6C37.9467 23.6 37.6334 23.74 37.3667 24.02C37.1134 24.3 36.8867 24.7733 36.6867 25.44C36.4867 26.0933 36.3001 27 36.1267 28.16C35.9667 29.2533 35.8867 30.1533 35.8867 30.86C35.8867 31.2733 35.9334 31.5867 36.0267 31.8C36.1334 32.0133 36.3401 32.12 36.6467 32.12C37.1267 32.12 37.5001 31.8733 37.7667 31.38C38.0467 30.8733 38.2467 30.2867 38.3667 29.62L39.3667 23.96ZM54.2994 30.02C54.2327 30.38 54.1994 30.66 54.1994 30.86C54.1994 31.14 54.2794 31.38 54.4394 31.58C54.5994 31.78 54.8327 31.8933 55.1394 31.92C54.9927 32.4 54.6727 32.7667 54.1794 33.02C53.686 33.2733 53.1594 33.4 52.5994 33.4C52.1327 33.4 51.7127 33.3 51.3394 33.1C50.9794 32.9133 50.7327 32.6333 50.5994 32.26C49.8527 33.02 48.7794 33.4 47.3794 33.4C46.4194 33.4 45.6727 33.2133 45.1394 32.84C44.6194 32.4533 44.3594 31.8067 44.3594 30.9C44.3594 30.3533 44.4327 29.6667 44.5794 28.84C44.726 28.0133 44.8127 27.5333 44.8394 27.4L45.6794 22.8L49.6994 22.4L48.5594 27.92C48.3994 28.6667 48.2794 29.2867 48.1994 29.78C48.1327 30.26 48.0994 30.6933 48.0994 31.08C48.0994 31.4 48.146 31.6533 48.2394 31.84C48.3327 32.0267 48.526 32.12 48.8194 32.12C49.2994 32.12 49.6727 31.8733 49.9394 31.38C50.2194 30.8733 50.4194 30.2867 50.5394 29.62L51.7394 22.8L55.7394 22.4L54.2994 30.02ZM65.1269 19.88C65.1269 19.7733 65.0202 19.6867 64.8069 19.62C64.5935 19.5533 64.3602 19.52 64.1069 19.52C63.6002 19.52 63.2202 19.6667 62.9669 19.96C62.7135 20.2533 62.5135 20.72 62.3669 21.36L62.0469 22.8H63.4469L63.2669 23.7H61.8669L60.1269 33L56.0869 33.4L57.9669 23.7H56.5469L56.7269 22.8H58.1669L58.5469 21.58C58.8802 20.4867 59.5069 19.72 60.4269 19.28C61.3602 18.8267 62.5402 18.6 63.9669 18.6C64.5402 18.6 65.0135 18.6333 65.3869 18.7C65.7735 18.7667 66.1269 18.8667 66.4469 19L69.3469 18.6L67.1469 30.02C67.0802 30.38 67.0469 30.66 67.0469 30.86C67.0469 31.14 67.1269 31.38 67.2869 31.58C67.4469 31.78 67.6802 31.8933 67.9869 31.92C67.8402 32.4 67.5202 32.7667 67.0269 33.02C66.5335 33.2733 65.9869 33.4 65.3869 33.4C64.7069 33.4 64.1535 33.2267 63.7269 32.88C63.3135 32.52 63.1069 32.0067 63.1069 31.34C63.1069 30.6867 63.3269 29.28 63.7669 27.12L63.8469 26.72L65.0869 20.16L65.1269 19.88ZM69.9989 35.24C69.9989 34.2133 70.6856 33.2533 72.0589 32.36L70.3989 32.44C70.3456 30.6133 70.2856 29.18 70.2189 28.14C70.1656 27.1 70.0856 26.12 69.9789 25.2C69.9122 24.5867 69.8122 24.1267 69.6789 23.82C69.5589 23.5133 69.3856 23.2867 69.1589 23.14C69.7722 22.6467 70.5122 22.4 71.3789 22.4C71.9789 22.4 72.4456 22.5067 72.7789 22.72C73.1256 22.92 73.3722 23.22 73.5189 23.62C73.6656 24.0067 73.7656 24.5333 73.8189 25.2C73.8456 25.7333 73.8589 26.28 73.8589 26.84V27.92L73.8389 30.68C74.5589 29.7467 75.1389 28.72 75.5789 27.6C76.0189 26.4667 76.2389 25.36 76.2389 24.28C76.2389 23.8267 76.1922 23.4467 76.0989 23.14C76.5522 22.6467 77.1522 22.4 77.8989 22.4C78.4189 22.4 78.8456 22.5333 79.1789 22.8C79.5122 23.0667 79.6789 23.4933 79.6789 24.08C79.6789 24.7867 79.4256 25.6067 78.9189 26.54C78.4256 27.46 77.8256 28.36 77.1189 29.24C76.4122 30.1067 75.7389 30.8533 75.0989 31.48C74.5256 32.04 74.1122 32.5067 73.8589 32.88C73.6056 33.2533 73.4789 33.72 73.4789 34.28C73.4789 34.6133 73.5656 34.94 73.7389 35.26C73.9256 35.5933 74.1589 35.8667 74.4389 36.08C74.1189 36.3867 73.7322 36.6133 73.2789 36.76C72.8389 36.92 72.3789 37 71.8989 37C71.3122 37 70.8456 36.8467 70.4989 36.54C70.1656 36.2467 69.9989 35.8133 69.9989 35.24Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
