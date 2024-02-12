import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../../hooks/usePlatforms'; 
import usePlatformHook from '../../hooks/usePlatform';
import useGameQueryStore from '../../store/store';

const PlatformSelector = () => {
	const { data, error } = usePlatform();
	const setPlatformId =useGameQueryStore(s=>s.setPlatformId)
	const selectedPlatformId=useGameQueryStore(s=>s.gameQuery.platformId)
	const selectedPlatform =usePlatformHook( selectedPlatformId)
	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{data?.results.map(platform => (
					<MenuItem key={platform.id} onClick={() => setPlatformId(platform.id)}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
