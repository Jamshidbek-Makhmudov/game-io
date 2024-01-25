import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import noImage from '../../assets/no-image-placeholder.webp';
import { GameCardProps,} from "../../interfaces";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";


const GameCard = ({game}:GameCardProps) => {
	return (
		<Card>
			<Image src={game.background_image ? game.background_image :noImage} />
			<CardBody	>
				<HStack justifyContent="space-between" marginBottom={3}>
					<PlatformIconList platforms={game.parent_platforms?.map(p=>p.platform)} />
					<CriticScore score={ game.metacritic} />
					
				</HStack>
				<Heading fontSize='2xl'>{game.name}</Heading>
			</CardBody>		
			</Card>
	)
}

export default GameCard