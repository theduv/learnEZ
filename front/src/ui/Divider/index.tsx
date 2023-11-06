import { memo } from "react";

const DividerBase = () => {
  return (
    <div className="border border-t-0 border-l-0 border-r-0 border-offblack w-full" />
  );
};

export const Divider = memo(DividerBase);
