import axios from "../utils/axios";

export const getMoviesByPage = (page: number) => axios.get(`/movie?page=${page}`);

export const getMovieById = (id: string) => axios.get(`/movie/${id}`)

export const getMoviesCount = () => axios.get('/movie/count');
