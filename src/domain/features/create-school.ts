import { CreateEntityError } from "../errors/create-entity";
import { EntityAlreadExists } from "../errors/entity-already-exists";
import { SchoolModel } from "../models";

export interface CreateSchool {
  execute(params: CreateSchool.Params): Promise<CreateSchool.Result>;
}

export namespace CreateSchool {
  export type Params = {
    name: string;
    logo_url: string;
    address?: {
      street: string;
      postalCode: string;
      city: string;
      countryCode: string;
      country: string;
      complement: string;
    };
  };

  export type Result = SchoolModel | CreateEntityError | EntityAlreadExists;
}
