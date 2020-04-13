import { useState } from 'react';
import VALIDATORS from '../formValidators';

export default (initialValue) => (inputType) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  return [
    value,
    error,
    (event) => {
      console.log(event.target.alue);
      if (!VALIDATORS[inputType].regexp.test(event.target.value)) {
        setError(VALIDATORS[inputType].error);
      } else {
        setError(null);
      }
      setValue(event.target.value);
    },
  ];
};
