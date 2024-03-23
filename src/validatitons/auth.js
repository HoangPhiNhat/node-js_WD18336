import Joi from "joi";

export const signUpValidator = Joi.object({
  username: Joi.string().required().min(6).max(255),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(255),
});
