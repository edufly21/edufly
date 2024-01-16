import React from "react";

const css = `
  .graphic-icon {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    .graphic-icon {
      width: 16px;
      height: 16px;
    }
  }
`;

const Icon: React.FC = () => {
  return (
    <svg
      className="graphic-icon"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{css}</style>
      <g filter="url(#filter0_d_6_15)">
        <rect x="4" width="18" height="18" fill="#FF7A00" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.38 5.04053C9.97795 5.04053 9.6054 5.26671 9.39856 5.63637L8.65687 6.96191C8.48992 7.26029 8.42657 7.66914 8.61606 8.03513C8.72321 8.2421 8.90821 8.53899 9.18496 8.77164V12.8133C9.18496 13.4911 9.69737 14.0405 10.3295 14.0405H11.474C11.8954 14.0405 12.237 13.6742 12.237 13.2223V10.7678H13.763V13.2223C13.763 13.6742 14.1046 14.0405 14.526 14.0405H15.6705C16.3026 14.0405 16.815 13.4911 16.815 12.8133V8.77164C17.0918 8.53899 17.2768 8.2421 17.3839 8.03513C17.5734 7.66913 17.5101 7.26029 17.3431 6.96191L16.6014 5.63637C16.3946 5.26671 16.0221 5.04053 15.62 5.04053H10.38ZM16.052 9.11904C15.9907 9.12714 15.9271 9.13144 15.8613 9.13144C15.3371 9.13144 14.9505 8.85391 14.6925 8.56068C14.6264 8.48552 14.5673 8.40783 14.5148 8.33095C14.2272 8.71749 13.7455 9.13144 13 9.13144C12.2545 9.13144 11.7728 8.71749 11.4852 8.33095C11.4327 8.40783 11.3736 8.48552 11.3075 8.56068C11.0495 8.85391 10.6629 9.13144 10.1387 9.13144C10.0729 9.13144 10.0093 9.12714 9.94797 9.11904V12.8133C9.94797 13.0392 10.1188 13.2223 10.3295 13.2223H11.474V10.7678C11.474 10.3159 11.8156 9.94962 12.237 9.94962H13.763C14.1844 9.94962 14.526 10.3159 14.526 10.7678V13.2223H15.6705C15.8812 13.2223 16.052 13.0392 16.052 12.8133V9.11904ZM10.0528 6.05732C10.1218 5.9341 10.246 5.85871 10.38 5.85871H15.62C15.754 5.85871 15.8782 5.9341 15.9472 6.05732L16.6888 7.38286C16.7511 7.49411 16.7436 7.58634 16.7168 7.638C16.5423 7.97512 16.2616 8.31325 15.8613 8.31325C15.6113 8.31325 15.4123 8.18646 15.2476 7.99926C15.0794 7.80813 14.9708 7.5785 14.9184 7.44761C14.8356 7.24124 14.653 7.17348 14.5273 7.17291C14.4016 7.17234 14.2201 7.23805 14.1351 7.4412C14.0187 7.71907 13.686 8.31325 13 8.31325C12.314 8.31325 11.9813 7.71907 11.865 7.4412C11.7799 7.23805 11.5983 7.17234 11.4727 7.17291C11.347 7.17348 11.1644 7.24124 11.0817 7.44761C11.0292 7.5785 10.9206 7.80813 10.7524 7.99926C10.5878 8.18646 10.3887 8.31325 10.1387 8.31325C9.73839 8.31325 9.4577 7.97512 9.28316 7.638C9.25641 7.58634 9.2489 7.49411 9.31114 7.38286L10.0528 6.05732Z"
        fill="#F5F5F5"
      />
      <defs>
        <filter
          id="filter0_d_6_15"
          x="0"
          y="0"
          width="26"
          height="26"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6_15"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6_15"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Icon;