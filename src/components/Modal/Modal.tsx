import CrossIcon from "../../Assets/Images/Icons/cross.svg?react";
import { ModalProps } from "../../Types/PropTypes/ModalPropType";

export default function Modal({
  isOpen,
  header,
  children,
  onClose,
}: ModalProps) {
  if (!isOpen) return null;
  return (
    <div
      id="modal"
      className="h-screen w-screen bg-black bg-opacity-60 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0"
    >
      <div className="bg-white w-3/12 p-4">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <p className="font-bold text-opacity-90">{header}</p>
          <div
            onClick={onClose}
            className="bg-black rounded-full p-2 cursor-pointer"
          >
            <CrossIcon fill="black" />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
