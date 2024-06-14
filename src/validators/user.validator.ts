import joi from "joi";

import { regexConstant } from "../constants/regex.constant";

export class UserValidator {
  private static userName = joi
    .string()
    .pattern(regexConstant.NAME)
    .trim()
    .label("Name")
    .messages({
      "string.empty": "Name must not be empty",
      "string.pattern.base": "Name must match the required pattern",
    });

  private static userEmail = joi
    .string()
    .pattern(regexConstant.EMAIL)
    .lowercase()
    .trim()
    .label("Email")
    .messages({
      "string.empty": "Email must not be empty",
      "string.pattern.base": "Email must be a valid email address",
      "any.required": "Email is required",
    });

  private static userPhone = joi
    .string()
    .pattern(regexConstant.PHONE)
    .trim()
    .label("Phone")
    .messages({
      "string.empty": "Phone must not be empty",
      "string.pattern.base": "Phone must be a valid phone number",
    });

  private static userPassword = joi
    .string()
    .pattern(regexConstant.PASSWORD)
    .trim()
    .label("Password")
    .messages({
      "string.empty": "Password must not be empty",
      "string.pattern.base": "Password must meet the required complexity",
    });

  private static userAge = joi
    .number()
    .integer()
    .positive()
    .min(18)
    .max(199)
    .label("Age")
    .messages({
      "number.base": "Age must be a number",
      "number.integer": "Age must be an integer",
      "number.min": "Age must be at least 18",
      "number.max": "Age must be less than or equal to 199",
    });

  public static create = joi.object({
    name: this.userName.required(),
    email: this.userEmail.required(),
    phone: this.userPhone,
    password: this.userPassword.required(),
    age: this.userAge,
  });

  public static update = joi.object({
    name: this.userName,
    phone: this.userPhone,
    password: this.userPassword,
    age: this.userAge,
  });
}
