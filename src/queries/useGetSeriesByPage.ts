import { useQuery } from "@tanstack/react-query";
import { getSeriesByPage } from "../api";

const getSeriesByPageApi = async (page: number) => {
  const { data } = await getSeriesByPage(page);
  return data;
};

export const useGetSeriesByPage = (page: number) =>
  useQuery(["series", page], () => getSeriesByPageApi(page));
