class UnauthorizedError extends Error {
  constructor() {
    super("User is unauthorized");
    this.name = "UnauthorizedError";
  }
}

export default UnauthorizedError;
