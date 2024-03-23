import Joi from "joi";

export const postValidator = Joi.object({
  title: Joi.string().required().min(6).max(255),
  author: Joi.string().required().min(0),
  image: Joi.string().required().min(6),
  description: Joi.string().required(),
  category: Joi.number().required(),
});
