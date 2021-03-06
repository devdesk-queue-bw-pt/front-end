import Axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return Axios.create({
        baseURL: "https://devdesklambda.herokuapp.com/api",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export default axiosWithAuth;
