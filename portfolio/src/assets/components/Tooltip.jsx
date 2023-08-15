import React, { useState } from "react";

function Tooltip({ content, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative h-full">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute z-10 p-2 mt-2 text-sm leading-tight text-white transform -translate-x-1/2 -translate-y-full bg-black bg-opacity-40 text-center rounded-lg  top-full left-1/2">
          {content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
