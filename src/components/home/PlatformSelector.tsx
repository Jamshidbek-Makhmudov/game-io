import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../../hooks/usePlatforms';
import { PlatformSelectorPros } from '../../interfaces';
import usePlatformHook from '../../hooks/usePlatform';

const PlatformSelector = ({ onSelectedPlatform, selectedPlatformId }: PlatformSelectorPros) => {
	const { data, error } = usePlatform();
	const selectedPlatform =usePlatformHook( selectedPlatformId)
	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{data?.results.map(platform => (
					<MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
