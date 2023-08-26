import { instance } from "./instance";
import { Iproducts } from "../interface/product";

export const getAllData = () => {
  const url = "/products";
  return instance.get(url);
};

export const getIdproducts = (id: number) => {
  const url = "/products/" + id;
  return instance.get(url);
};

export const postproducts = (product: Omit<Iproducts, "id">) => {
  const url = "/products";
  return instance.post(url, product);
};

export const Deleteproducts = (id: number) => {
  const url = "/products/" + id;
  return instance.delete(url);
};

export const updateproducts = (id: number, product: Iproducts) => {
  const url = "/products/" + id;
  return instance.put(url, product);
};
