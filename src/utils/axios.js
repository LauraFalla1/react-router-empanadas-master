import Domain from '../constantes/domain';

import  Axios  from 'axios';

const axios = () => {

    const axiosConnect = Axios.create({
        baseURL: Domain.BASE_URL
    });
    axiosConnect.interceptors.request.use(
        function (config) {
            config.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token':localStorage.getItem('token')
            }
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
    return axiosConnect;
}

export default axios();