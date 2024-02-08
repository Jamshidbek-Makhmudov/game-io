import { Heading } from '@chakra-ui/react'
import { GameGridProps } from '../../interfaces';
import useGenres from '../../hooks/useGenres';
import usePlatformHook from '../../hooks/usePlatform';
import useGenre from '../../hooks/useGenre';

const GameHeading = ({ gameQuery }: GameGridProps) => {
  const genre=useGenre(gameQuery.genreId)

const platform = usePlatformHook(gameQuery.platformId) //ozi bundan qaytadigan data object undefined bollishi ham mumkin lekin hookni ozi undefined qiymatni olmaydi bunui hal qilish uchun  u yerda hookda prop kutadigan idni optional berib qoysak kifoya

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;  

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading