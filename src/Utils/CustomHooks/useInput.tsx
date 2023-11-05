import { useEffect, useState } from "react";

function useInput<T>(initialValue: T, config?: InputConfig<T>) {
  const { validators, errorMessages } = config || {};
  const [value, setValue] = useState<T>(initialValue);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [errorMessagesState, setErrorMessages] = useState<
    Record<string, string>
  >({});

  const handleChange = (newValue: T, ...rest: any[]) => {
    setValue(newValue);
    if (validators) {
      const newErrors = createErrors(newValue, ...rest);
      setErrors(newErrors);

      if (errorMessages) {
        const newErrorMessages = createErrorMessages(newErrors);
        setErrorMessages(newErrorMessages);
      }
    }
  };

  const createErrors = (value: T, ...rest: any[]) => {
    const newErrors: Record<string, boolean> = {};
    for (const key in validators) {
      if (validators[key](value, ...rest))
        newErrors[key] = validators[key](value, ...rest);
    }
    return newErrors;
  };

  const createErrorMessages = (errors: Record<string, boolean>) => {
    const newErrorMessages: Record<string, string> = {};
    for (const key in errors) {
      if (errorMessages && errors[key]) {
        newErrorMessages[key] = errorMessages[key];
      }
    }

    return newErrorMessages;
  };

  const reset = () => {
    setValue(initialValue);
    setErrors({});
    setErrorMessages({});
  };

  useEffect(() => {
    handleChange(value);
  }, []);

  return {
    value,
    onChange: handleChange,
    reset,
    errors,
    errorMessages: errorMessagesState,
  };
}

export default useInput;

interface InputConfig<T> {
  validators?: Record<string, (value: T, ...rest: any[]) => boolean>;
  errorMessages?: Record<string, string>;
}

export { useInput, InputConfig };
