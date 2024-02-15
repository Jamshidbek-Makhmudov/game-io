import React from 'react'
import NavBar from '../components/navbar/NavBar';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<NavBar />
			<Box padding={5}>
				{/* child elementlar shu yerga kelib tushadi */}
				<Outlet/>
			</Box>
		</>
	)
}

export default Layout