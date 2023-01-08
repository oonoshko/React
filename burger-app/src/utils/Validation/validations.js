const initValidations = () => {
  const errorRequired = "Required";
  const errorValid = "Please, enter valid data";

  const validateName = (value) => {
    let error;
    if (!value) {
      error = errorRequired;
    } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(value)) {
      error = errorValid;
    }
    return error;
  };

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = errorRequired;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = errorValid;
    }
    return error;
  };

  const validatePhone = (value) => {
    let error;
    if (!value) {
      error = errorRequired;
    } else if (
      !/^(8|\+?\d{1,3})?[ -]?\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{2})[ -]?(\d{2})$/.test(
        value
      )
    ) {
      error = errorValid;
    }
    return error;
  };

  const validateAddress = (value) => {
    let error;
    if (!value) {
      error = errorRequired;
    } else if (!/[A-Za-z0-9'.\-\s,]/.test(value)) {
      error = errorValid;
    }
    return error;
  };

  return {
    validateName,
    validateEmail,
    validatePhone,
    validateAddress,
  };
};

export const validationRules = initValidations();
