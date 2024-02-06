import { useQuery } from '@tanstack/react-query';
import { FetchRespone, Game, GameQuery } from '../interfaces';
import APIClient from "../services/api-client"
const apiClient = new APIClient<Game>('/games');


const useGames = (gameQuery: GameQuery) => useQuery<FetchRespone<Game>, Error>({
	queryKey: ["games", gameQuery],
	queryFn: ()=> apiClient.getAll( {
				params: {
				genres: gameQuery.genre?.id,
				parent_platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search:gameQuery.searchText
			},
	}),
	})
	

export default useGames;
