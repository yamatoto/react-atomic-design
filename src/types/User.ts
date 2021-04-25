export type UserType = {
  id: number;
  name: string;
  imageUrl?: string;
  email: string;
  phone: string;
  company: { name: string; catchPhrase: string; bs: string };
  website: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};
