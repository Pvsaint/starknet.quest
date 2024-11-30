import { FC } from 'react';

export const CollateralIcon:FC = () =>(
    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-indigo-500/10">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Collateral icon"
      >
        <rect
          width="48"
          height="48"
          rx="24"
          fill="white"
          fillOpacity="0.04"
        />
        <g clipPath="url(#clip0_6356_1982)">
          <path
            d="M23.632 14.1183C23.7385 14.0414 23.8665 14 23.9979 14C24.1292 14 24.2572 14.0414 24.3637 14.1183C24.8995 14.5049 26.1037 15.2116 27.6112 15.8191C29.1195 16.4274 30.8795 16.9166 32.5387 16.9166C32.7045 16.9166 32.8634 16.9824 32.9806 17.0996C33.0978 17.2169 33.1637 17.3758 33.1637 17.5416V24.0016C33.1637 26.5241 31.7445 28.8691 29.9654 30.6266C28.1879 32.3824 25.9429 33.6599 24.1045 33.9799L23.9979 33.9983L23.8904 33.9799C22.0529 33.6591 19.807 32.3824 18.0295 30.6266C16.2512 28.8691 14.832 26.5241 14.832 24.0016V17.5416C14.832 17.3758 14.8979 17.2169 15.0151 17.0996C15.1323 16.9824 15.2913 16.9166 15.457 16.9166C17.1162 16.9166 18.8762 16.4274 20.3854 15.8191C21.892 15.2108 23.0962 14.5041 23.632 14.1183Z"
            fill="url(#paint0_radial_6356_1982)"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_6356_1982"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(7.63037 2.75079) rotate(54) scale(47.894 42.5548)"
          >
            <stop offset="0.338" stopColor="#0FAFFF" />
            <stop offset="0.529" stopColor="#367AF2" />
            <stop offset="0.682" stopColor="#5750E2" />
            <stop offset="0.861" stopColor="#CC23D1" />
          </radialGradient>
          <clipPath id="clip0_6356_1982">
            <rect
              width="18.3333"
              height="20"
              fill="white"
              transform="translate(14.832 14)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );