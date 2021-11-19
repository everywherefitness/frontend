import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000/api' // check the local host number
    });
}

export default axiosWithAuth;