import spinner from "../../Assets/Images/spinner.gif";

export default function Spinner() {
  return (
    <div className="bg-white fixed top-0 left-0 right-0 bottom-0 h-screen w-screen flex items-center justify-center ">
      <img src={spinner} alt="Spinner" className="select-none w-20 h-20" />
    </div>
  );
}
