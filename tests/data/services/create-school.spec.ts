import { mock, MockProxy } from "jest-mock-extended";

import {
  CreateSchoolRepository,
  LoadSchoolByNameRepository,
} from "@/data/contracts/repositories";
import { CreateSchoolService } from "@/data/services";

describe("Create School Service", () => {
  let schoolRepository: MockProxy<
    LoadSchoolByNameRepository & CreateSchoolRepository
  >;

  let sut: CreateSchoolService;

  beforeAll(() => {
    schoolRepository = mock();

    schoolRepository.load.mockResolvedValue(undefined);
    schoolRepository.createSchool.mockResolvedValue({
      name: "School",
      logo_url: "https://www.googleapis.com/",
      id: "any_id",
    });
  });

  beforeEach(() => {
    sut = new CreateSchoolService(schoolRepository);
  });

  it("should call LoadSchoolByNameRepository with correct params", async () => {
    await sut.execute({
      name: "School",
      logo_url: "https://www.googleapis.com/",
    });

    expect(schoolRepository.load).toHaveBeenCalledWith({ name: "School" });
  });
});
