import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { Platform } from "../interfaces";
import APIClient from "../services/api-client"
const apiClient=new APIClient<Platform>('/platforms/lists/parents')

const usePlatform = () => useQuery({
	queryKey: ["platform"],
	queryFn: apiClient.getAll,
	staleTime: 24 * 60 * 60 * 1000, // 24h, //24 soat query bu yerni update qilmaydi query cache miz 24 soat fresh holatda turadi
	initialData: { count: platforms.length, results: platforms }
})

export default usePlatform;
