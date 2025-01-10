import { CSSProperties } from "react";

type Props = {
  variant: "outline" | "solid";
  bgColor?: string;
  textColor?: string;
  text: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  children?: React.ReactNode | undefined;
  style?: CSSProperties;
};

const Button: React.FC<Props> = ({
  onClick,
  text,
  variant = "outline",
  bgColor = "transparent",
  iconPosition = "left",
  textColor = "black",
  children,
  style,
}) => {
  const styles =
    variant === "solid"
      ? {
          backgroundColor: bgColor,
          border: `solid 2px ${bgColor}`,
          color: textColor,
        }
      : {
          backgroundColor: "transparent",
          border: `solid 2px #AFAFAF`,
          color: textColor,
        };

  return (
    <button
      style={{ ...styles, ...style }}
      onClick={onClick}
      className="p-2 text-base relative overflow-hidden border rounded-md group"
    >
      <div className="absolute inset-0 bg-transparent group-hover:bg-gray-950/20 transition-colors duration-500"></div>
      <div
        style={{
          display: "flex",
          flexDirection: iconPosition === "left" ? "row" : "row-reverse",
          gap: "5px",
          position: "relative",
          zIndex: "4",
        }}
      >
        {children}
        {text}
      </div>
    </button>
  );
};
export default Button;
