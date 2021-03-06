import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.common['Authorization'] = 'Berear base64';

// Add a request interceptor
axios.interceptors.request.use((config)=> {
    // Do something before request is sent
    console.log(config);
    return config;
  }, error=> {
    // Do something with request error
    return Promise.reject(error);
});
// Add a response interceptor
axios.interceptors.response.use(response=> {
    // Do something with response data
    console.log(response)
    return response;
  }, error=> {
    // Do something with response error
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
