export interface SwitchProps {
  onChange: (isOn: boolean) => void;
  initialState: boolean;
  closedLabel?: string | React.ReactNode;
  openedLabel?: string | React.ReactNode;
}
