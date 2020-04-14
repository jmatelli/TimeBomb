const VALIDATORS = {
  number: {
    regexp: /^[3-8]$/,
    error: 'This number is not valid.',
  },
  text: {
    regexp: /^(?!\d)[\w]{3,}$/,
    error: 'This name is not valid.',
  },
};

export default VALIDATORS;
