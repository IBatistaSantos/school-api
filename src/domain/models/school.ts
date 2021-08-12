class SchoolModel {
  id?: string;
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
}

export { SchoolModel };
