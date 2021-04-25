export type UserType = {
  id: number;
  name: string;
  imageUrl?: string;
  email: string;
  phone: string;
  company: { name: string };
  website: string;
};
