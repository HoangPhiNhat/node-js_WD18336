import Joi from "joi";

export const BookValidator = Joi.object({
  name: Joi.string().required().min(6).max(255),
  price: Joi.number().required().min(0),
  author: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
});
