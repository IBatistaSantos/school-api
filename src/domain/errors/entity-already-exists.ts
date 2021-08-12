class EntityAlreadExists extends Error {
  constructor() {
    super();
    this.name = "EntityAlreadExists";
  }
}

export { EntityAlreadExists };
