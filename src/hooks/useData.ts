import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FetchRespone, Game } from "../interfaces";
import { CanceledError } from "axios";

const useData =() => { 
	
	const [data, setDatas] = useState<Game[]>([])
	const [error, setError] = useState('')
	const [isLoading, setLoading] = useState(false)

	useEffect(() => { 
		const controller = new AbortController()

		apiClient.get<FetchRespone>("/games", {
			signal: controller.signal
			//config..
		})
		.then(res => {
				setLoading(true)
				setDatas(res.data.results);
				setLoading(false)
			})
			.catch((err) => {
				if (err instanceof CanceledError) return
				setError(err.message);
				setLoading(false)
			})
		
			return ()=> controller.abort()
	}, [])
	
	return {data, error, isLoading};
};
export default useData