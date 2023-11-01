export default function FlightCardBox({ children, className }) {
  const classNames = `bg-white shadow-default p-4 ${className}`;
  return <div className={classNames}>{children}</div>;
}
