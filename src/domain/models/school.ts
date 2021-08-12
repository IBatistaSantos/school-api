type ParamsInstanceSchoolModel = {
  id?: string;
  name: string;
  logo_url: string;
  address?: {
    street: string;
    postalCode: string;
    city: string;
    countryCode: string;
    country: string;
    complement?: string;
  };
};

class SchoolModel {
  constructor(params: ParamsInstanceSchoolModel) {
    this.id = params.id;
    this.name = params.name;
    this.logo_url = params.logo_url;
    this.address = {
      street: params.address?.street,
      postalCode: params.address?.postalCode,
      city: params.address?.city,
      countryCode: params.address?.countryCode,
      country: params.address?.country,
      complement: params.address?.complement,
    };
  }

  id?: string;
  name: string;
  logo_url: string;
  address?: {
    street?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    country?: string;
    complement?: string;
  };
}

export { SchoolModel };
