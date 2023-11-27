import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, useFormState] = useState(initialForm);
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    useFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
