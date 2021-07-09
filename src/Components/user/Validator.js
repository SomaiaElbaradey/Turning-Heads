import validator from "validator";
export const validate = ({
  mail,
  firstName,
  lastName,
  username,
  password,
  confirmPassword,
}) => {
  const errors = {};
  if (validator.isEmpty(mail)) {
    errors.mail = "Email is required";
  } else if (!validator.isEmail(mail)) {
    errors.mail = "Email is not valid";
  }
  if (!validator.isLength(firstName, { min: 3 })) {
    errors.firstName = "Firstname must be at least 3 characters";
  } else if (!validator.isLength(firstName, { max: 15 })) {
    errors.firstName = "Firstname must be less than 15 characters";
  }
  if (!validator.isLength(lastName, { min: 3 })) {
    errors.lastName = "Lastname must be at least 3 characters";
  } else if (!validator.isLength(lastName, { max: 15 })) {
    errors.lastName = "Lastname must be less than 15 characters";
  }
  if (validator.isEmpty(username)) {
    errors.username = "Username is required";
  } else if (!validator.isLength(username, { min: 7 })) {
    errors.username = "Username must be at least 7 characters";
  } else if (!validator.isLength(username, { max: 64 })) {
    errors.username = "Username must be less than 64 characters";
  }
  if (validator.isEmpty(password)) {
    errors.password = "Password is required";
  } else if (!validator.isLength(password, { min: 8 })) {
    errors.password =
      "Password is very short, it must be more than 8 characters";
  }
  if (password !== confirmPassword && !validator.isEmpty(password)) {
    errors.confirmPassword =
      "Confirm your password correctly, passwords don't match";
  }
  if (!/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
    errors.password =
      "Password must have at least 1 upper case letter, 1 special character, 1 small case letter";
  }

  if (!Object.keys(errors).length) {
    return null;
  }
  return errors;
};
