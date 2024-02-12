import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { sortOrders } from '../../config/constants'; 
import useGameQueryStore from '../../store/store';

const SortSelector = () => {
	const setSortOrder=useGameQueryStore(s=>s.setSortOrder)
	const sortOrder=useGameQueryStore(s=>s.gameQuery.sortOrder)
	const currentSortOrder = sortOrders.find(order=>order.value===sortOrder)
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{ currentSortOrder?.label ||'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map(order => (
					
					<MenuItem onClick={() => setSortOrder(order.value)} key={ order.value} value={order.value}>{ order.label}</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}

export default SortSelector