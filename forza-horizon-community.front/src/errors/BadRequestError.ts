class BadRequestError extends Error {
  errors: {}[];
  constructor(message?: string, errors?: {}[]) {
    super(message);
    this.message = message || "Bad Request";
    this.errors = errors || [];
  }
}

export default BadRequestError;
