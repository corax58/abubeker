import React from "react";

const Glow = ({ color }: { color: string }) => {
  return (
    <div className={`${color}  size-96 rounded-full blur-[200px] -z-50 `}>
      {" "}
    </div>
  );
};

export default Glow;
