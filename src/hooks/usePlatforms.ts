import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { Platform } from "../interfaces";
import APIClient from "../services/api-client"
import ms from "ms";
const apiClient=new APIClient<Platform>('/platforms/lists/parents')

const usePlatform = () => useQuery({
	queryKey: ["platform"],
	queryFn: apiClient.getAll,
	staleTime: ms("24h"), //24 * 60 * 60 * 1000, // 24h, //24 soat query bu yerni update qilmaydi query cache miz 24 soat fresh holatda turadi
	// initialData: { count: platforms.length, results: platforms }
	initialData: platforms
})

export default usePlatform;
