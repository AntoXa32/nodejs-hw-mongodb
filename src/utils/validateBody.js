import createHttpError from 'http-errors';

const validateBody = (schema) => {
  const func = async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      const errors = error.details.map((err) => err.message).join(', ');
      next(createHttpError(400, `Validation error: ${errors}`));
    }
  };
  return func;
};

export default validateBody;
