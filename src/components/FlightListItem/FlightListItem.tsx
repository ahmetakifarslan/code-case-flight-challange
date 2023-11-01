import { v4 as uuidv4 } from "uuid";

export default function FlightListItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return <li key={uuidv4()}>{children}</li>;
}
