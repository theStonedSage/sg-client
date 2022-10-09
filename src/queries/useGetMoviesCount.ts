import { useQuery } from "@tanstack/react-query";
import { getMoviesCount } from "../api";

const getMoviesCountApi = async () => {
  const { data } = await getMoviesCount();
  return data;
};

export const useGetMoviesCount = () =>
  useQuery(["movies","count"], getMoviesCountApi);
