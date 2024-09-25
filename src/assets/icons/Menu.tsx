import * as React from "react";
import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#181A1B"
      d="M4 13q-.625 0-.875-.5a1.17 1.17 0 0 1 0-1q.25-.5.875-.5h16q.625 0 .85.5.25.5 0 1-.225.5-.85.5zm0-7q-.625 0-.875-.5a1.17 1.17 0 0 1 0-1Q3.375 4 4 4h16q.625 0 .85.5.25.5 0 1-.225.5-.85.5zm0 14q-.625 0-.875-.5a1.17 1.17 0 0 1 0-1q.25-.5.875-.5h16q.625 0 .85.5.25.5 0 1-.225.5-.85.5z"
    />
  </svg>
);
export default SvgMenu;
