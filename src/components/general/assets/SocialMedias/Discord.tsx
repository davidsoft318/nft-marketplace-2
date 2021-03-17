import React from 'react';

interface DiscordProps {
  className: string;
  onClick: React.MouseEventHandler<SVGSVGElement>;
}

const Discord: React.FC<DiscordProps> = ({ className, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
    fill="none"
    viewBox="0 0 18 24"
  >
    <path
      fill="#fff"
      d="M2.092 20.575h11.57l-.552-2.126 1.323 1.348 1.213 1.29 2.206 2.193V2.506C17.795 1.217 16.86.118 15.7.118L2.096.122C.939.122 0 1.222 0 2.511v15.675c0 1.362.94 2.389 2.092 2.389zM10.652 5.6l-.026.013.012-.013h.015zm-6.19 1.226C5.947 5.537 7.324 5.6 7.324 5.6l.11.13c-1.821.517-2.643 1.485-2.643 1.485s.22-.127.605-.326c2.45-1.145 5.127-1.063 7.606.39 0 0-.825-.906-2.533-1.485l.152-.176c.236 0 1.488.054 2.822 1.217 0 0 1.495 3.04 1.495 6.777-.05-.073-.928 1.606-3.19 1.664 0 0-.385-.515-.655-.963 1.324-.453 1.818-1.357 1.818-1.357-.434.325-.83.52-1.152.71-.495.258-.99.384-1.484.516-2.339.452-3.655-.303-4.894-.905l-.426-.258s.494.905 1.764 1.357c-.334.452-.665.968-.665.968-2.26-.063-3.085-1.742-3.085-1.742.004-3.74 1.491-6.776 1.491-6.776z"
    />
    <path
      fill="#fff"
      d="M10.797 12.441c.578 0 1.046-.579 1.046-1.294 0-.71-.468-1.29-1.046-1.29v.005c-.574 0-1.046.58-1.046 1.29 0 .71.468 1.29 1.046 1.29zM7.051 12.441c.578 0 1.046-.579 1.046-1.294 0-.71-.468-1.29-1.042-1.29l-.004.005c-.578 0-1.046.58-1.046 1.29 0 .71.468 1.29 1.046 1.29z"
    />
  </svg>
);

export default Discord;