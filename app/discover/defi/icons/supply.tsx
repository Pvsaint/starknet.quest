import { FC } from 'react';

export const SupplyIcon:FC = () =>(
    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-cyan-500/10">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Supply icon"
      >
        <rect
          width="48"
          height="48"
          rx="24"
          fill="white"
          fillOpacity="0.04"
        />
        <g clipPath="url(#clip0_6356_1944)">
          <path
            d="M31 24.5V30.5C31 31.05 30.55 31.5 30 31.5H18C17.45 31.5 17 31.05 17 30.5V24.5C17 22.85 15.65 21.5 14 21.5V23.5C14.55 23.5 15 23.95 15 24.5V30.5C15 32.15 16.35 33.5 18 33.5H30C31.65 33.5 33 32.15 33 30.5V24.5C33 23.95 33.45 23.5 34 23.5V21.5C32.35 21.5 31 22.85 31 24.5Z"
            fill="#2196F3"
          />
          <path
            d="M31.3008 15.3008L26.5008 20.1008V26.5008H28.5008V20.9008L32.7008 16.7008L31.3008 15.3008ZM15.3008 16.7008L19.5008 20.9008V26.5008H21.5008V20.1008L16.7008 15.3008L15.3008 16.7008Z"
            fill="white"
          />
          <path
            d="M30.5 26L27.5 29L24.5 26H30.5ZM23.5 26L20.5 29L17.5 26H23.5Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_6356_1944">
            <rect
              width="20"
              height="19"
              fill="white"
              transform="translate(14 14.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );