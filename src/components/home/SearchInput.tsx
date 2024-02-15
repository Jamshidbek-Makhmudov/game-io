import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs';
import { SearchInputProps } from '../../interfaces';
import useGameQueryStore from '../../store/store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
	const setSearchText=useGameQueryStore(s=>s.setSearchText)
	const ref = useRef<HTMLInputElement>(null)
	const navigate=useNavigate()
	return (
		<form onSubmit={(event => { 
			event.preventDefault()
			if (ref.current) {

				setSearchText(ref.current.value)
				navigate("/")
			 }
		})}>
			<InputGroup >
				<InputLeftElement children={ <BsSearch/>}/>
				<Input ref={ref}  placeholder='Search games...' variant='filled' borderRadius={20}/>
			</InputGroup>
		</form>
	)
}

export default SearchInput