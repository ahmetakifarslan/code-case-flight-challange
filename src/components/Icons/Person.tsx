export interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
}

export default function Person({
  width = "1rem",
  height = "1rem",
  fill = "currentColor",
}: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} height={height} width={width}>
      <path d="M12 2a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m-1.5 5h3a2 2 0 012 2v5.5H14V22h-4v-7.5H8.5V9a2 2 0 012-2z" />
    </svg>
  );
}
