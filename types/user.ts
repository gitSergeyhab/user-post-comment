import { Post } from "./post";

export interface UserItem {
  id: number;
  username: string;
  email: string;
}

export interface UserItemModified extends UserItem {
  imageUrl: string;
}

export interface User extends UserItem {
  name: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UserModified extends User {
  imageUrl: string;
}

export interface UserModifiedWithPosts extends UserModified {
  posts: Post[] | null;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
