import React from "react";

export default function layoutDashboard({
  children,
  analytic,
  payment,
  chartlist,
}) {
  return (
    <div className="p-5">
      <div className="flex bg-pink-300 w-fill mb-5 h-[300px]">{children}</div>
      <div className="flex bg-pink-300 w-fill mb-5 h-[300px]">{analytic}</div>
      <div className="flex bg-pink-300 w-fill mb-5 h-[300px]">{payment}</div>
      <div className="flex bg-pink-300 w-fill mb-5 h-[300px]">{chartlist}</div>
    </div>
  );
}
