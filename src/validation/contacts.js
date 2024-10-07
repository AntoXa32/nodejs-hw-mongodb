import Joi from 'joi';

import { contactType } from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.empty': 'Name cannot be empty',
    'string.min': 'Name must be at least 3 characters long',
    'string.max': 'Name must be less than or equal to 20 characters long',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number must be a string',
    'string.empty': 'Phone number cannot be empty',
    'string.min': 'Phone number must be at least 3 characters long',
    'string.max':
      'Phone number must be less than or equal to 20 characters long',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().messages({
    'string.email': 'Email must be a valid email address',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'IsFavourite must be a boolean',
  }),
  contactType: Joi.string()
    .valid(...contactType)
    .required()
    .messages({
      'string.base': 'Contact type must be a string',
      'any.only': 'Contact type must be one of the allowed values',
      'any.required': 'Contact type is required',
    }),
  photo: Joi.string().allow(null, '').optional().messages({
    'string.base': 'Photo must be a string (file link)',
  }),
});

export const contactPatchSchema = Joi.object({
  name: Joi.string(),

  phoneNumber: Joi.string(),
  email: Joi.string(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...contactType),
  photo: Joi.string().optional(),
});

export const requestResetEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});
