export interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
}

export default function AirPlaneLanding({
  width = "1rem",
  height = "1rem",
  fill = "currentColor",
}: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} height={height} width={width}>
      <path d="M2.5 19h19v2h-19v-2m7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.79-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.03-1.93-.5v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z" />
    </svg>
  );
}
