import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client"
import { Genre } from "../interfaces";
import ms from "ms";
const apiClient=new APIClient<Genre>('/genres')
const useGenres = () => useQuery({
	queryKey: ["genres"],
	queryFn: apiClient.getAll,
	staleTime: ms('24'),//24 * 60 * 60 * 1000, // 24h, //24 soat query bu yerni update qilmaydi query cache miz 24 soat fresh holatda turadi
	// initialData: {count:genres.length, results:genres, next:null}
	initialData: genres
}) 
export default useGenres