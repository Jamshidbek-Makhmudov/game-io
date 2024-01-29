import { Game, GameQuery} from '../interfaces';
import useData from './useData';

const useGames = (gameQuery:GameQuery) =>
	useData<Game>(
		'/games',
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform?.id,
				ordering:gameQuery.sortOrder
			}
		},
		[gameQuery]
	);

export default useGames;
