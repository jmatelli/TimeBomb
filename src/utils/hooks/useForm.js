import { useState } from 'react';
import VALIDATORS from '../formValidators';

export default (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const onChange = (event) => {
    console.log(event.target.type, event.target.name, event.target.value);
    event.persist();
    console.log(event);

    const validator = VALIDATORS[event.target.type];

    if (!validator.regexp.test(event.target.value)) {
      setForm((form) => ({ ...form, [event.target.name]: { input: event.target.value, error: validator.error } }));
      return;
    }

    setForm((form) => ({ ...form, [event.target.name]: { input: event.target.value, error: null } }));
  };

  return {
    onChange,
    form,
    setForm,
  };
};
