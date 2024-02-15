
import NavBar from '../components/navbar/NavBar';
import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error=useRouteError() //routes bilan bogliq errolarni catch qiladi
	return (
		<>
			<NavBar />
			<Box padding={5}>
				<Heading>Oupsss....</Heading>
				<Text>
					{/* agar route bilan bogliq erro bolsa bosqa messaga bomasa boshqa message korsatiladi */}
					{ isRouteErrorResponse(error) ? "This page does not exist" : "An unexpected error occured"}
					
				</Text>
			</Box>
		</>
	)
}

export default ErrorPage