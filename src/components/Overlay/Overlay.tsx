import React, { useEffect, useRef, useState } from "react";

export interface OverlayProps {
  className?: string;
  children: React.ReactNode;
  component: React.ReactNode;
  wrapperRef: any;
}

export default function Overlay({
  className,
  children,
  component,
  wrapperRef,
}: OverlayProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipOptions, setTooltipOptions] = useState({ width: 0 });

  const overlayClassName = `relative inline-block ${className}`;
  const overlayRef = useRef();

  const handleMouseEnter = (e) => {
    console.log(wrapperRef);
    setTooltipOptions({
      width: wrapperRef.current.offsetWidth,
    });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    // setShowTooltip(false);
  };

  const tooltip = (
    <div
      className="absolute mt-4 left-1/2 -translate-x-2/4 bg-white w-52 shadow-md p-4 top-full"
      style={{ width: tooltipOptions.width }}
    >
      <svg
        className="absolute text-white h-4 w-full left-1/2 -translate-x-2/4 bottom-full rotate-180"
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
      >
        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
      {component}
    </div>
  );

  useEffect(() => {}, []);

  return (
    <div
      ref={overlayRef}
      className={overlayClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.Children.map(children, (child) => child)}
      {showTooltip && tooltip}
    </div>
  );
}
