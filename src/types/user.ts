export interface User {
  picture: {
    large: string;
  };
  cell: string;
  email: string;
  gender: string;
  id: { name: string; value: string };
  name: { first: string; last: string; title: string };
}