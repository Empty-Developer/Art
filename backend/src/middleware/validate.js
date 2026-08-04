/**
 * @description this function validation
 * for data login and password
 */

export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errorMessages = result.error.issues.map((issue) => issue.message);

    return res.status(400).json({
      status: "fail",
      errors: errorMessages,
    });
  }

  req.body = result.data;
  next();
};
