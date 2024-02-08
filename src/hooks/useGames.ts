import { useInfiniteQuery } from '@tanstack/react-query';
import { FetchRespone, Game, GameQuery } from '../interfaces';
import APIClient from "../services/api-client"
import ms from 'ms';
const apiClient = new APIClient<Game>('/games');


const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchRespone<Game>, Error>({
	queryKey: ["games", gameQuery],
	queryFn: ({ pageParam=1})=> apiClient.getAll( {
				params: {
				genres: gameQuery.genreId,
				parent_platforms: gameQuery.platformId,
				ordering: gameQuery.sortOrder,
			  search: gameQuery.searchText,
				page: pageParam
		},
	}),
	getNextPageParam: (lastPage, allPages) => {
		return lastPage.next ? allPages.length +1: undefined
	},
	staleTime:ms('24h') //time calulation package
	})
	

export default useGames;
