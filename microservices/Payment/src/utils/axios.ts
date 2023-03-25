import Axios, { AxiosInstance } from 'axios';

type A = (token: string) => AxiosInstance;

export const axios: A = (token: string) =>
  Axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
