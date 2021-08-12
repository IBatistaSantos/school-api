import { CreateEntityError } from "../errors/create-entity";
import { EntityAlreadExists } from "../errors/entity-already-exists";
import { SchoolModel } from "../models";

export interface CreateSchool {
  execute(params: CreateSchool.Params): Promise<CreateSchool.Result>;
}

export namespace CreateSchool {
  export type Params = Omit<SchoolModel, "id">;

  export type Result = SchoolModel | CreateEntityError | EntityAlreadExists;
}
