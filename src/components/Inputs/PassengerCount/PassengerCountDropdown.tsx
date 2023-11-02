// import { useState } from "react";
// import { FareCategoriesEnum } from "../../../types/constants";
// import RadioButton from "../RadioButton/RadioButton";
// import RadioGroup from "../RadioGroup/RadioGroup";

// export default function PassengerCountDropdown() {
//   const [radioGroupValue, setRadioGroupValue] = useState(
//     FareCategoriesEnum.economy
//   );

//   function handleChange(event: any) {
//     console.log("event", event);
//   }

//   return (
//     <div className="overlay absolute w-full mt-3 left-1/2 -translate-x-2/4 bg-white shadow-md p-4 top-full">
//       <svg
//         className="absolute text-white h-4 bottom-full rotate-180"
//         style={{ left: 150 }}
//         x="0px"
//         y="0px"
//         viewBox="0 0 255 255"
//       >
//         <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
//       </svg>
//       <div className="p-2">
//         <p className="text-gray-500 mb-2 text-md">Kabin ve yolcu seçimi</p>
//         <RadioGroup onChange={handleChange} selectedValue={radioGroupValue}>
//           <RadioButton
//             id={FareCategoriesEnum.economy}
//             name="fareCategory"
//             label="Economy Class"
//             value={FareCategoriesEnum.economy}
//             checked={fareCategory === FareCategoriesEnum.economy}
//             onChange={handleCategorySelect}
//             classNames={{
//               labelClasses: "text-xs",
//             }}
//           />

//           <RadioButton
//             id={FareCategoriesEnum.business}
//             name="fareCategory"
//             label="Business Class"
//             value={FareCategoriesEnum.business}
//             checked={fareCategory === FareCategoriesEnum.business}
//             classNames={{
//               labelClasses: "text-xs",
//             }}
//             onChange={handleCategorySelect}
//           />
//         </RadioGroup>

//         <Counter
//           count={passengerCount}
//           increaseFn={increase}
//           decreaseFn={decrease}
//         />
//       </div>
//     </div>
//   );
// }
