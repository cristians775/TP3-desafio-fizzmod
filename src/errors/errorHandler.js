export const errorHandler = (err, req, res, next) => {
  let error;
  if (typeof err.toJSON === "function") {
    error = err.toJSON();
  } else {
    error = {
      status: 500,
      name: "UnknowError",
      message: err,
      stack: err.stack,
    };
  }
  res.send(error);
};
