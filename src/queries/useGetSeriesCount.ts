import { useQuery } from "@tanstack/react-query";
import { getSeriesCount } from "../api";

const getSeriesCountApi = async () => {
  const { data } = await getSeriesCount();
  return data;
};

export const useGetSeriesCount = () =>
  useQuery(["series","count"], getSeriesCountApi);
