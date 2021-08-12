import { CreateEntityError } from "../../domain/errors";
import { EntityAlreadExists } from "../../domain/errors/entity-already-exists";
import { CreateSchool } from "../../domain/features/create-school";
import {
  CreateSchoolRepository,
  LoadSchoolByNameRepository,
} from "../contracts/repositories/school-repository";

class CreateSchoolService implements CreateSchool {
  constructor(
    private readonly schoolRepository: CreateSchoolRepository &
      LoadSchoolByNameRepository
  ) {}
  async execute(params: CreateSchool.Params): Promise<CreateSchool.Result> {
    const schoolAlreadyExists = await this.schoolRepository.load({
      name: params.name,
    });

    if (schoolAlreadyExists) {
      return new EntityAlreadExists();
    }

    const createSchool = await this.schoolRepository.createSchool(params);

    if (!createSchool) {
      return new CreateEntityError();
    }

    return createSchool;
  }
}

export { CreateSchoolService };
