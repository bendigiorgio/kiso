import React from "react";
const DotBlock: React.FC<React.SVGAttributes<SVGSVGElement>> = ({
  ...props
}) => {
  return (
    <>
      <svg
        width="400px"
        height="400px"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <pattern
            id="dotPattern2"
            x="0"
            y="0"
            width="8.47"
            height="8.47"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2.47" cy="2.47" r="1.235" fill="#27272A" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern2)" />
      </svg>
    </>
  );
};

export default DotBlock;
