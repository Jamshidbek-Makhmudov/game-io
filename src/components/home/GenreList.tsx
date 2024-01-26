import useGenres from '../../hooks/useGenres';
import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import getCroppedImageUrl from '../../services/image-url';

const GenreList = () => {
	const { data, isLoading, error } = useGenres()
	console.log(data);
	

	if (error) return null

	if (isLoading) return <Spinner />
	
	return (
		<>
			<Heading fontSize='2xl' marginTop={9} marginBottom={3}>Genres</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize='32px'
								borderRadius={8}
								objectFit='cover'
								src={getCroppedImageUrl(genre.image_background)} />
							<Button
								whiteSpace='normal'
								textAlign='left'
								fontWeight='normal'
								onClick={() => console.log("clicked genres")}
								fontSize='md'
								variant='link'

							>{genre.name}</Button>

						</HStack>

					</ListItem>
				))}

			</List>
		</>
	)
}

export default GenreList