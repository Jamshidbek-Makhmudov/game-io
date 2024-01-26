import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/navbar/NavBar';
import GameGrid from './components/home/GameGrid';
import GenreList from './components/home/GenreList';
import { useState } from 'react';
import { Genre } from './interfaces';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  return (
    <Grid
    templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area='nav'>
        <NavBar/>
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          {/* shu yerda state ozgargani uchun window rerendeer boladi va render bolganida biz stateni qiymatini pasda GameGridga berib yuboramiz */}
          <GenreList onSelectedGenre={ (genre)=>setSelectedGenre(genre)} /> 
      </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={2}>
          {/* game heading here */}
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              {/* selecetors */}
            </Box>
          </Flex>

        </Box>
        <GameGrid selectedGenre={ selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
