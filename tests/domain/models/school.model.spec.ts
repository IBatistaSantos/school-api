import { SchoolModel } from "@/domain/models";

describe("School Model", () => {
  const createSchoolPayload = {
    name: "School",
    logo_url: "https://locahost:3333/file",
  };

  it("should create with value", () => {
    const createSchool = new SchoolModel(createSchoolPayload);

    expect(createSchool.name).toEqual(createSchoolPayload.name);
  });

  it("should update with value", () => {
    const updatedSchoolPayload = {
      ...createSchoolPayload,
      address: {
        street: "6044094781112 Dare Place",
        postalCode: "45454455",
        city: "Haksuvga",
        countryCode: "PK",
        country: "Seychelles",
      },
    };

    const createSchool = new SchoolModel(updatedSchoolPayload);

    expect(createSchool.address).toEqual(updatedSchoolPayload.address);
  });
});
