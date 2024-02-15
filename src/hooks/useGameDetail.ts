import APIClient from '../services/api-client';
import { useQuery } from '@tanstack/react-query';
import { Game } from '../interfaces';

const apiClient=new APIClient<Game>("/games")
const useGameDetail = (slug: string) => {

return	useQuery({
		queryKey: ["gameDeatil", slug],
		queryFn:()=>apiClient.get(slug)
	})
	
}

export default useGameDetail