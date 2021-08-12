class CreateEntityError extends Error {
  constructor() {
    super();
    this.name = "CreateEntityError";
  }
}

export { CreateEntityError };
