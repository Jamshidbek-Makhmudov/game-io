import axios, { AxiosRequestConfig } from 'axios';
import { API_KEY, API_URL } from './api-config';
import { FetchRespone } from '../interfaces';
const axiosInstance= axios.create({
	baseURL: API_URL,
	params: {
		key:API_KEY
	}
});
class APIClient<T>{ 
	endpoint: string;
	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}
	getAll = async  (config:AxiosRequestConfig) => {
		return axiosInstance.get<FetchRespone<T>>(this.endpoint,config).then(res=>res.data)
	};
	
	 get = async  (id: string | number) => { 
		return axiosInstance.get<T>(this.endpoint +'/'+ id).then(res=>res.data)

	};
}
export default APIClient