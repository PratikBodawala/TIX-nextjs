import type { FC } from "react";

type BadgeProps = {
  text: string;
  color: string;
  textColor?: string;
};

const Badge: FC<BadgeProps> = ({ text, color, textColor }) => (
  <div
    className={`text-white text-xs font-bold py-1.5 px-2 rounded ${color}`}
    style={{ color: textColor }}
  >
    {text}
  </div>
);

export default Badge;
