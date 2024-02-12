import { Box, Button, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import { GameGridProps } from '../../interfaces';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const GameGrid = () => {
	const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error.message}</Text>;

	const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
	/**
	 * // bu yerda ||0 ni bermasak typescript error beradi yanani pasdagi 
	 * dataLength faqat number qaytaradi san esa number| undefined bervossan deb, 
	 * bu yerda datani boshlangich qiymati null bolgani uchun undefinned qaytaradi, shuning uchun ||0  ni yozdik 
	 */

	return (
			 // bu infinite scoll package bizga buttoni bosmasdan scrolqiganda datalaerni fecth qilib olib kelishda qol keladi
		<Box padding='10px'>
			<InfiniteScroll
				/**dataLength bu biz current vaqtda egalik qiladigan datalarni umumiy soni numberda */
				dataLength={fetchedGamesCount}
				hasMore={!!hasNextPage} /** bu yerda faqat boolean qiymat kutadi
				 hasNextPage esa boolean | undefined typelarga ega, bu togrilash hasNextPage ni oldidan !! belgisini qoyamiz shunda qat'iy booleanga aylanadi ya'ni agar undefined kelsa ozi avto false qiymatni ovoladi */
				next={() => fetchNextPage()}
				loader={ <Spinner/>}
			>


		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
			{isLoading &&
				skeletons.map(skeleton => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map(game => (
							<GameCardContainer key={game.id}>
					<GameCard game={game} />
				</GameCardContainer>			
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
			{/* infinite scroll button  */}
			{/* {
				hasNextPage &&	<Button marginY={5} onClick={()=>fetchNextPage()}>{ isFetchingNextPage ? 'Loading...' : "Load More"}</Button>
			} */}
			</InfiniteScroll>
			</Box>
	);
};

export default GameGrid;
