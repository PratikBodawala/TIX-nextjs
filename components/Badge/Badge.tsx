import React from "react";

type BadgeProps = {
  text: string;
  color: string;
};

const Badge: React.FC<BadgeProps> = ({ text, color }) => (
  <div className={`text-white text-xs font-bold py-1.5 px-2 rounded ${color}`}>
    {text}
  </div>
);

export default Badge;
