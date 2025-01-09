import axios from "axios";

const axiosPublice = axios.create({
	baseURL: `${import.meta.env.VITE_SERVER_API}`,
});
const useAxiosPublice = () => {
	return axiosPublice;
};

export default useAxiosPublice;
