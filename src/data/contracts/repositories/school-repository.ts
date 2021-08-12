import { SchoolModel } from "@/domain/models";

export interface CreateSchoolRepository {
  createSchool(
    params: CreateSchoolRepository.Params
  ): Promise<CreateSchoolRepository.Result>;
}

export namespace CreateSchoolRepository {
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

  export type Result = undefined | SchoolModel;
}

export interface LoadSchoolByNameRepository {
  load: (
    params: LoadSchoolByNameRepository.Params
  ) => Promise<LoadSchoolByNameRepository.Result>;
}

export namespace LoadSchoolByNameRepository {
  export type Params = {
    name: string;
  };

  export type Result = undefined | SchoolModel;
}
