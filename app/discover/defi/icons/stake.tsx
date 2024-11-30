import { FC } from 'react';

export const StakeIcon:FC = ()=>(
    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-orange-500/10">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Stake icon"
      >
        <rect
          width="48"
          height="48"
          rx="24"
          fill="white"
          fillOpacity="0.04"
        />
        <g clipPath="url(#clip0_6356_1915)">
          <path
            d="M24 14C21.25 14 19 16.25 19 19V21H21V19C21 17.35 22.35 16 24 16C25.65 16 27 17.35 27 19V21H29V19C29 16.25 26.75 14 24 14Z"
            fill="#424242"
          />
          <path
            d="M30 34H18C16.9 34 16 33.1 16 32V23C16 21.9 16.9 21 18 21H30C31.1 21 32 21.9 32 23V32C32 33.1 31.1 34 30 34Z"
            fill="#FB8C00"
          />
          <path
            d="M24 29C24.8284 29 25.5 28.3284 25.5 27.5C25.5 26.6716 24.8284 26 24 26C23.1716 26 22.5 26.6716 22.5 27.5C22.5 28.3284 23.1716 29 24 29Z"
            fill="#C76E00"
          />
        </g>
        <defs>
          <clipPath id="clip0_6356_1915">
            <rect
              width="16"
              height="20"
              fill="white"
              transform="translate(16 14)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );