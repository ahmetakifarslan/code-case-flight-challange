import { useState } from "react";

function useInput<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (value: T) => {
    setValue(value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    onChange: handleChange,
    reset,
  };
}

export default useInput;
