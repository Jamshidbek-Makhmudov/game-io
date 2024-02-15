import { useParams } from 'react-router-dom';
import useGameDetail from '../hooks/useGameDetail';
import { GridItem, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import ExpandableText from '../components/home/ExpandableText';
import GameAttributes from '../components/home/GameAttributes';
import GameTrailer from '../components/home/GameTrailer';
import GameScreenshots from '../components/home/GameScreenshots';

const GameDetailPage = () => {
	const { slug } = useParams()
	/**
	 * //slug! bu typescript trick bolib bu slug hechqachon null bolmaydi deb qatiy qilib qoyamiz
	 *  bolmasa bizga typescript undefined bolishi mumkin degan erro chiqari buni boshqa yoli slug || "" qilsa hma boladi lekin bu juda ugly usul
	 */
	const { data: game, isLoading, error } = useGameDetail(slug!)
	if (isLoading) return <Spinner />
	if(error || !game) throw error
	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
			<GridItem>
				{/* bu yerda game undefined kelishi mukin degan type erro beradi buni togrilash uchun if statementda agar eror bolsa va !game  game bolmasa throw error qilishini korsatamiz va bizda type error yoqoladi , boshqa yoli shu yerda game? qilib optional chaining berib ketsak boladi lekin bunday qilsak gameni gameni qancha kop ishlatsak har safar shu optional chaining ni korsatihsimiz kerak boladi*/}
				<Heading>{game.name}</Heading>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttributes game={ game} />
			</GridItem>
			<GridItem>

			<GameTrailer gameId={game.id} />
			<GameScreenshots gameId={game.id}/>
			</GridItem>
		</SimpleGrid>
	)
}

export default GameDetailPage;

