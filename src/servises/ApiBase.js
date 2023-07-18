import axios from 'axios';
import baseApi from './config';


const APIBase = (props) => {
    // Admin Object
    const adminObject = localStorage.getItem('AsuredPayAuth')

    // Request Configuration
    const configuration = {
        method: props.method,
        url: props.url,
        baseURL: baseApi.baseUrl, //"http://43.205.1.180:3000",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        tokenRequired: props.tokenRequired
    }
    // Request Data
    if (props.method === "POST") {
        configuration.data = props.data;
    }

    // Request Params
    if (props.method === "GET") {
        configuration.params = props.params;
    }

    // Request Header Authorization
    if (props.tokenRequired) {
        if (adminObject) {
            configuration.headers.Authorization = adminObject && `bearer ${adminObject}`;
        } else {
            configuration.headers.Authorization = props.token && `bearer ${props.token}`;
        }
    }

    // Return Request
    return axios(configuration);
}

export default APIBase;