import * as React from "react";

function TooltipArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg x="0px" y="0px" viewBox="0 0 255 255" {...props}>
      <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
    </svg>
  );
}

export default TooltipArrow;
