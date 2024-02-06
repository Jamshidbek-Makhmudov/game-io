import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client"
import { Genre } from "../interfaces";
const apiClient=new APIClient<Genre>('/genres')
const useGenres = () => useQuery({
	queryKey: ["genres"],
	queryFn: apiClient.getAll,
	staleTime: 24 * 60 * 60 * 1000, // 24h, //24 soat query bu yerni update qilmaydi query cache miz 24 soat fresh holatda turadi
	initialData: {count:genres.length, results:genres}
}) 
export default useGenres