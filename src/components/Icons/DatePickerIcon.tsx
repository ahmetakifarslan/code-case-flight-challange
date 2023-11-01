export interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
}

export default function DatePickerIcon({
  width = "1rem",
  height = "1rem",
  fill = "currentColor",
}: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} height={height} width={width}>
      <path
        fill={fill}
        d="M8 13a1 1 0 110-2 1 1 0 010 2zM8 17a1 1 0 110-2 1 1 0 010 2zM11 16a1 1 0 102 0 1 1 0 00-2 0zM16 17a1 1 0 110-2 1 1 0 010 2zM11 12a1 1 0 102 0 1 1 0 00-2 0zM16 13a1 1 0 110-2 1 1 0 010 2zM8 7a1 1 0 000 2h8a1 1 0 100-2H8z"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zm12 2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}
