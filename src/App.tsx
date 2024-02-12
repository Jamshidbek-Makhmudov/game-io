import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from './components/home/GameGrid';
import GenreList from './components/home/GenreList';
import PlatformSelector from './components/home/PlatformSelector';
import NavBar from './components/navbar/NavBar';
import SortSelector from './components/home/SortSelector';
import GameHeading from './components/home/GameHeading';

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '250px 1fr',
			}}
		>
			<GridItem area='nav'>
				<NavBar  />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside' paddingX={5}>
					<GenreList/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<Box paddingLeft={2}>
					<GameHeading />
					<Flex marginBottom={5}>
						<Box marginRight={5}>
							<PlatformSelector/>
						</Box>
								<SortSelector/>
					</Flex>
				</Box>

				<GameGrid/>
			</GridItem>
		</Grid>
	);
}

export default App;
