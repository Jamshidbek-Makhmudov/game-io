// import '../public/css/App.css'
import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/navbar/NavBar';
import GameGrid from './components/home/GameGrid';

function App() {
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
      <GridItem area='aside'>aside</GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={2}>
          <GameGrid/>

        </Box>
      </GridItem>
    </Grid>
  )
}

export default App
