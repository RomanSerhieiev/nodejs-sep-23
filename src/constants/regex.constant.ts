export const regexConstant = {
  NAME: /^[a-zA-Z\s]{3,30}$/,
  EMAIL: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
  PASSWORD: /^.{6,}$/,
  PHONE: /^\+?[1-9]\d{1,14}$/,
  AGE: /^(?:1[89]|[2-9]\d|1\d{2,2})$/,
};
