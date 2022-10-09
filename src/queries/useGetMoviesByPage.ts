import { useQuery } from "@tanstack/react-query";
import { getMoviesByPage } from "../api";

const getMoviesByPageApi = async (page: number) => {
  const { data } = await getMoviesByPage(page);
  return data;
};

export const useGetMoviesByPage = (page: number) =>
  useQuery(["movies", page], () => getMoviesByPageApi(page));
