import TooltipArrow from "../../Icons/TooltipArrow";

export default function PassengerCountDropdown({ children }: any) {
  return (
    <div className="overlay absolute w-full mt-3 left-1/2 -translate-x-2/4 bg-white shadow-md p-4 top-full">
      <TooltipArrow
        className="absolute text-white h-4 bottom-full rotate-180"
        style={{ left: 150 }}
      />
      {children}
    </div>
  );
}
