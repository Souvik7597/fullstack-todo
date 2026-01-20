export const validateData = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (err) {
    console.log(err.errors[0])
    return res.status(400).json({ errors: err.errors[0] });
  }
};
