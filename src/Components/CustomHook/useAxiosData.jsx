import axios from "axios";

const axiosData = axios.create({
    baseURL : 'https://task-management-server-snowy.vercel.app'
})


const useAxiosData = () => {
    return axiosData
};

export default useAxiosData;