import axios from 'axios';

const instance  = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com'
})

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN FROM INSTANCE';

export default instance;