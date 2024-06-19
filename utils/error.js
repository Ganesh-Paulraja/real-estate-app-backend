//custom error for password not length enough
export const errorHandler = (statusCode, message) => {
  const error = new Error()
  error.statusCode = statusCode;
  error.message = message;
  return error;
}