import axios from "../utils/axios";

export const getSeriesByPage = (page: number) => axios.get(`/series?page=${page}`);

export const getSeriesById = (id: string) => axios.get(`/series/${id}`);

export const getSeriesCount = () => axios.get('/series/count');
