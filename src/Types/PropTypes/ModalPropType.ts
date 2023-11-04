import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  header: string | ReactNode;
  children: string | ReactNode;
  onClose?: () => void;
  onApprove?: () => void;
}
