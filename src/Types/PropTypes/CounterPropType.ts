import { MouseEvent } from "react";

export interface CounterProps {
  count: number;
  increaseFn: (event: MouseEvent<HTMLElement>) => void;
  decreaseFn: (event: MouseEvent<HTMLElement>) => void;
}
