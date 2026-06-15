import type { IconProps } from "../../types";

export default function DownloadIcon({ ...props }: IconProps) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        {...props}
      >
        <g fill="currentColor">
          <path d="M15 16H1V9h2v5h10V9h2v7Z" />
          <path d="M12 6H9V0H7v6H4v1l4 4 4-4V6Z" />
        </g>
      </svg>
  );
}
